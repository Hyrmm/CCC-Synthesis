import { globalConfig, TShapeData } from "../common/Config";
import Shape from "../item/Shape";
import Main, { DragingShape, EnumShapeInWhere, EnumBlockType } from "../Main";
import BaseManager from "./BaseManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ShapeManager extends BaseManager {

    @property([cc.Prefab])
    prefab_shapes: cc.Prefab[] = []

    @property(cc.Node)
    panel_list: cc.Node = null

    @property(cc.Node)
    panel_scrollView: cc.Node = null

    @property(cc.Node)
    panel_inplace: cc.Node = null

    public draggingShape: DragingShape = { target: null, targetCopy: null, originalPos: null, originalBlockId: null }
    public shapeList: Map<number, Shape> = new Map()


    private shape2ShapeCollision: Map<Shape, Shape[]> = new Map()
    private shape2ShapeListCollision: Map<Shape, cc.Collider> = new Map()
    private shapeType2ShapePool: Map<number, cc.NodePool> = new Map()

    init(owner: Main): void {

        super.init(owner)

        this.panel_scrollView.getComponent(cc.BoxCollider)['onCollisionExit'] = this.onShapeListCollisionExit.bind(this)
        this.panel_scrollView.getComponent(cc.BoxCollider)['onCollisionStay'] = this.onShapeListCollisionStay.bind(this)
    }

    update(dt: number): void {

        const shapeListCollider = this.panel_scrollView.getComponent(cc.BoxCollider)

        shapeListCollider.size.width = Math.max(this.panel_list.width, 640)
        shapeListCollider.offset.x = shapeListCollider.size.width / 2
    }

    public addShapeInList(shapeData: TShapeData) {

        const shapeType = shapeData.shapeType

        if (!this.shapeType2ShapePool.has(shapeType)) this.shapeType2ShapePool.set(shapeType, new cc.NodePool())

        let shape = this.shapeType2ShapePool.get(shapeType).get()

        if (!shape) shape = cc.instantiate(this.prefab_shapes[shapeType])

        shape.getComponent(Shape).init(this)
        shape.getComponent(Shape).reset(shapeData, EnumShapeInWhere.InList)

        shape.parent = this.panel_list

        if (shape.anchorY == 1) {
            shape.y = shape.height
        } else {
            shape.y = 0
        }

        this.shapeList.set(shapeData.id, shape.getComponent(Shape))
    }

    public delShapeById(shapeId: number) {
        if (!this.shapeList.has(shapeId)) return
        const shape = this.shapeList.get(shapeId)
        this.shapeList.delete(shapeId)
        this.shapeType2ShapePool.get(shape.data.shapeType).put(shape.node)
    }

    public onShapeTouchBegan(event: cc.Event.EventTouch) {

        const target = event.currentTarget as cc.Node
        const shapeComp = target.getComponent(Shape)

        const [shapeType, blockType] = [shapeComp.data.shapeType, shapeComp.data.blockType]

        if (!this.shapeType2ShapePool.has(shapeType)) this.shapeType2ShapePool.set(shapeType, new cc.NodePool())

        if (shapeComp.where === EnumShapeInWhere.InList) {

            let copyTarget = this.shapeType2ShapePool.get(shapeType).get()
            if (!copyTarget) {
                copyTarget = cc.instantiate(this.prefab_shapes[shapeType])
                copyTarget.getComponent(Shape).init(this)
            }

            copyTarget.opacity = 255
            copyTarget.parent = this.panel_inplace
            copyTarget.getComponent(Shape).reset(shapeComp.data, EnumShapeInWhere.InPlace)

            const targetWorldPos = target.parent.convertToWorldSpaceAR(target.position)
            copyTarget.position = this.panel_inplace.convertToNodeSpaceAR(targetWorldPos)


            // target.parent = this.panel_inplace
            target.opacity = 0
            this.panel_scrollView.getComponent(cc.ScrollView).enabled = false
            this.draggingShape.targetCopy = copyTarget
        } else {
            this.draggingShape.originalBlockId = this.owner.bagManager.getBlockIdByInPlaceShapeId(shapeComp.data.id)
            this.owner.bagManager.setBlockEmptyByShapeId(shapeComp.data.id)
        }

        this.draggingShape.target = target
        this.draggingShape.originalPos = target.position
    }

    public onShapeTouchMoved(event: cc.Event.EventTouch) {

        if (!this.draggingShape.target) return

        const delta = event.getDelta()
        const shapeComp = this.draggingShape.target.getComponent(Shape)

        if (shapeComp.where === EnumShapeInWhere.InList) {

            this.draggingShape.targetCopy.position = new cc.Vec3(
                this.draggingShape.targetCopy.position.x + delta.x,
                this.draggingShape.targetCopy.position.y + delta.y,
                this.draggingShape.targetCopy.position.z
            )

            // this.draggingShape.target.position = new cc.Vec3(
            //     this.draggingShape.target.position.x + delta.x,
            //     this.draggingShape.target.position.y + delta.y,
            //     this.draggingShape.target.position.z
            // )


        } else {

            this.draggingShape.target.position = new cc.Vec3(
                this.draggingShape.target.position.x + delta.x,
                this.draggingShape.target.position.y + delta.y,
                this.draggingShape.target.position.z
            )

        }

    }

    public onShapeTouchEnded(event: cc.Event.EventTouch) {

        const dropResult = this.owner.bagManager.dropShape()

        const shapeComp = this.draggingShape.target.getComponent(Shape)
        const [shapeType, blockType] = [shapeComp.data.shapeType, shapeComp.data.blockType]


        if (!dropResult.result) {
            if (shapeComp.where === EnumShapeInWhere.InPlace) {

                const shapeComp = this.draggingShape.target.getComponent(Shape)

                if (dropResult.intersect <= 0) {

                    // 计算是否参与合成
                    let canUpgradedShape: Shape = null
                    const collisionShape = this.shape2ShapeCollision.get(shapeComp)
                    if (collisionShape && collisionShape.length) {
                        for (const shape of collisionShape) {
                            if (shape.data.lv == shapeComp.data.lv && shape.data.blockType == shapeComp.data.blockType) canUpgradedShape = shape
                        }
                    }

                    if (canUpgradedShape) {
                        canUpgradedShape.upgradeLevel()
                        this.shapeType2ShapePool.get(shapeType).put(this.draggingShape.target)
                        this.shapeList.delete(shapeComp.data.id)
                    } else if (this.shape2ShapeListCollision.size > 0) {
                        shapeComp.reset(shapeComp.data, EnumShapeInWhere.InList)
                        this.draggingShape.target.parent = this.panel_list
                        const posY = this.draggingShape.target.anchorY == 1 ? this.draggingShape.target.height : 0
                        this.draggingShape.target.position = new cc.Vec3(0, posY, 0)
                    } else {

                        for (const blockId of this.draggingShape.originalBlockId) {
                            this.owner.bagManager.setBlockInPlaceShapeById(blockId, shapeComp)
                        }

                        this.draggingShape.target.position = this.draggingShape.originalPos
                    }


                } else {

                    for (const blockId of this.draggingShape.originalBlockId) {
                        this.owner.bagManager.setBlockInPlaceShapeById(blockId, shapeComp)
                    }

                    this.draggingShape.target.position = this.draggingShape.originalPos
                }

            } else {

                // 计算是否参与合成
                let canUpgradedShape = null
                const collisionShape = this.shape2ShapeCollision.get(this.draggingShape.targetCopy.getComponent(Shape))
                if (collisionShape && collisionShape.length) {
                    for (const shape of collisionShape) {
                        if (shape.data.lv == shapeComp.data.lv && shape.data.blockType == shapeComp.data.blockType) canUpgradedShape = shape
                    }
                }

                if (canUpgradedShape) {
                    canUpgradedShape.upgradeLevel()
                    this.shapeType2ShapePool.get(shapeType).put(this.draggingShape.target)
                    this.shapeList.delete(shapeComp.data.id)
                }

                this.draggingShape.target.opacity = 255
                this.shapeType2ShapePool.get(shapeType).put(this.draggingShape.targetCopy)
            }
        } else {

            if (this.draggingShape.targetCopy) {
                this.shapeList.set(this.draggingShape.targetCopy.getComponent(Shape).data.id, this.draggingShape.targetCopy.getComponent(Shape))
            }

            if (shapeComp.data.blockType == EnumBlockType.Block) {
                this.shapeType2ShapePool.get(shapeType).put(this.draggingShape.target)
                this.shapeType2ShapePool.get(shapeType).put(this.draggingShape.targetCopy)
            } else {

                let target
                if (shapeComp.where === EnumShapeInWhere.InPlace) {
                    target = this.draggingShape.target
                } else {
                    this.shapeType2ShapePool.get(shapeType).put(this.draggingShape.target)
                    target = this.draggingShape.targetCopy
                }

                const posAr = this.panel_inplace.convertToNodeSpaceAR(dropResult.placeWorldPos)
                const posX = posAr.x - globalConfig.blockSize / 2
                const posY = target.anchorY == 1 ? posAr.y + globalConfig.blockSize / 2 : posAr.y - globalConfig.blockSize / 2
                target.position = new cc.Vec3(posX, posY, 0)
            }
        }

        this.draggingShape.target = null
        this.draggingShape.targetCopy = null
        this.draggingShape.originalPos = null

        this.panel_scrollView.getComponent(cc.ScrollView).enabled = true
        console.log(Array.from(this.shapeList.values()))
        console.log(Array.from(this.shapeList.values()).filter((shape) => shape.where == EnumShapeInWhere.InList))
    }

    public getDraggingShape(): Shape | null {

        if (this.draggingShape.target) {
            return this.draggingShape.target.getComponent(Shape)
        }

        return null
    }

    public getDraggingShapeInfo(): DragingShape | null {
        return this.draggingShape
    }

    public onShapeCollisionExit(other: cc.Collider, self: cc.Collider) {

        if (other.tag != 1 || self.tag != 1) return

        const shapeComp = self.node.getComponent(Shape)
        const otherShapeComp = other.node.getComponent(Shape)
        if (!shapeComp || !otherShapeComp) return
        if (shapeComp.where === EnumShapeInWhere.InList || otherShapeComp.where === EnumShapeInWhere.InList) return

        if (!this.shape2ShapeCollision.has(shapeComp)) return
        if (!this.shape2ShapeCollision.get(shapeComp).includes(otherShapeComp)) return
        this.shape2ShapeCollision.get(shapeComp).splice(this.shape2ShapeCollision.get(shapeComp).indexOf(otherShapeComp), 1)
    }

    public onShapeCollisionStay(other: cc.Collider, self: cc.Collider) {

        if (other.tag != 1 || self.tag != 1) return

        const shapeComp = self.node.getComponent(Shape)
        const otherShapeComp = other.node.getComponent(Shape)
        if (!shapeComp || !otherShapeComp) return
        if (shapeComp.where === EnumShapeInWhere.InList || otherShapeComp.where === EnumShapeInWhere.InList) return

        if (!this.shape2ShapeCollision.has(shapeComp)) this.shape2ShapeCollision.set(shapeComp, [])
        if (this.shape2ShapeCollision.get(shapeComp).includes(otherShapeComp)) return
        this.shape2ShapeCollision.get(shapeComp).push(otherShapeComp)
    }

    public onShapeListCollisionExit(other: cc.Collider, self: cc.Collider) {
        const shapeComp = other.node.getComponent(Shape)
        if (!shapeComp || shapeComp.where == EnumShapeInWhere.InList) return
        this.shape2ShapeListCollision.delete(shapeComp)
        this.panel_scrollView.getChildByName("view_bg").active = this.shape2ShapeListCollision.size > 0
    }

    public onShapeListCollisionStay(other: cc.Collider, self: cc.Collider) {
        const shapeComp = other.node.getComponent(Shape)

        if (shapeComp.where == EnumShapeInWhere.InList) {
            this.shape2ShapeListCollision.delete(shapeComp)
        } else {
            this.shape2ShapeListCollision.set(shapeComp, self)
        }

        this.panel_scrollView.getChildByName("view_bg").active = this.shape2ShapeListCollision.size > 0
    }
}