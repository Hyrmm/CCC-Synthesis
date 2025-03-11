import { globalConfig } from "../common/Config";
import BagBlock from "../item/BagBlock";
import Shape from "../item/Shape";
import { EnumBagBlockType, EnumBlockType, EnumShapeInWhere } from "../Main";
import BaseManager from "./BaseManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BagManager extends BaseManager {

    @property(cc.Prefab)
    prefeb_bagBlock: cc.Prefab = null

    private bagBlocks: Array<BagBlock[]> = []
    private bagBlockName2Collision: Map<string, cc.Node> = new Map()
    private shapeId2InPlaceShape: Map<number, Shape> = new Map()
    private bagBlockName2InPlaceShape: Map<string, Shape> = new Map()

    private maxSize: number[] = []
    private defalueSize: number[] = []

    start() {
        super.start()

        this.maxSize = globalConfig.bagMaxSize
        this.defalueSize = globalConfig.bagDefalueSize

        this.initBagBlocks()
    }

    private initBagBlocks() {
        const [spacing, blockSize] = [globalConfig.spacing, globalConfig.blockSize]
        const [maxW, maxH, defW, defH] = this.maxSize.concat(this.defalueSize)

        // 显示范围
        const startX = Math.floor((maxW - defW) / 2)
        const startY = Math.floor((maxH - defH) / 2)
        const endX = startX + defW
        const endY = startY + defH

        // 创建格子
        for (let row = 0; row < maxH; row++) {
            for (let col = 0; col < maxW; col++) {

                const bagBlock = cc.instantiate(this.prefeb_bagBlock)
                const bagBlockComp = bagBlock.getComponent(BagBlock)

                bagBlock.width = globalConfig.blockSize
                bagBlock.height = globalConfig.blockSize
                const posX = col < maxW / 2 ? -1 * ((maxW / 2 - col - 1) * (blockSize) + blockSize / 2) : (col - maxW / 2) * (blockSize) + blockSize / 2
                const posY = row < maxH / 2 ? -1 * ((maxH / 2 - row - 1) * (blockSize) + blockSize / 2) : (row - maxH / 2) * (blockSize) + blockSize / 2

                bagBlock.position = cc.v3(posX, posY, 0)
                bagBlock.parent = this.node
                bagBlock.name = `${row}_${col}`


                const type = (row >= startY && row < endY && col >= startX && col < endX) ? EnumBagBlockType.HasBlock : EnumBagBlockType.None
                bagBlockComp.init(this, type)
                bagBlock.getComponent(cc.BoxCollider).size = cc.size(blockSize - spacing, blockSize - spacing)

                if (!this.bagBlocks[row]) this.bagBlocks[row] = []
                this.bagBlocks[row][col] = bagBlockComp
            }
        }
    }

    public onCollisionEnter(other: cc.Collider, self: cc.Collider) {
    }

    public onCollisionStay(other: cc.Collider, self: cc.Collider) {

        if (other.tag != 0) return

        const shapeComp = other.node.getComponent(Shape)
        const bagBlockComp = self.node.getComponent(BagBlock)

        if (shapeComp.blockType == EnumBlockType.Block) {
            if (bagBlockComp.type == EnumBagBlockType.None) this.bagBlockName2Collision.set(self.node.name, self.node)
        } else {
            if (bagBlockComp.type == EnumBagBlockType.HasBlock && !this.bagBlockName2Collision.has(self.node.name)) this.bagBlockName2Collision.set(self.node.name, self.node)
        }


        this.node.children.forEach((child) => child.children[0].color = cc.Color.WHITE)

        let color = cc.Color.RED
        let inpalceCollisions = 0

        for (const [key, shape] of this.shapeId2InPlaceShape) {
            inpalceCollisions += shape.blockCnt
        }

        const draggingShape = this.owner.shapeManager.getDraggingShape()
        if (draggingShape && draggingShape.blockCnt == this.bagBlockName2Collision.size - inpalceCollisions) {
            color = cc.Color.GREEN
        }

        this.bagBlockName2Collision.forEach((value, key) => value.children[0].color = color)
    }

    public onCollisionExit(other: cc.Collider, self: cc.Collider) {

        if (other.tag != 0) return

        this.bagBlockName2Collision.delete(self.node.name)
        this.node.children.forEach((child) => child.children[0].color = cc.Color.WHITE)

        let color = cc.Color.RED
        const draggingShape = this.owner.shapeManager.getDraggingShape()
        if (draggingShape && draggingShape.blockCnt == this.bagBlockName2Collision.size) {
            color = cc.Color.GREEN
        }

        this.bagBlockName2Collision.forEach((value, key) => value.children[0].color = color)
    }

    public dropShape(): { result: boolean, placeWorldPos: cc.Vec3, intersect: number } {

        const draggingShapeInfo = this.owner.shapeManager.getDraggingShapeInfo()
        let draggingShape = draggingShapeInfo.target.getComponent(Shape)
        if (draggingShape.where == EnumShapeInWhere.InList) draggingShape = draggingShapeInfo.targetCopy.getComponent(Shape)

        if (!draggingShape) return { result: false, placeWorldPos: cc.Vec3.ZERO, intersect: 0 }

        let inpalceCollisions = 0
        for (const [key, shape] of this.shapeId2InPlaceShape) {
            inpalceCollisions += shape.blockCnt
        }

        const curInpalceCollisionsCnt = this.bagBlockName2Collision.size - inpalceCollisions

        if (curInpalceCollisionsCnt != draggingShape.blockCnt) return { result: false, placeWorldPos: draggingShapeInfo.originalPos, intersect: curInpalceCollisionsCnt }

        const collisions = Array.from(this.bagBlockName2Collision.values())

        const curCollisions = collisions.filter((value, key) => !this.bagBlockName2InPlaceShape.has(value.name))

        curCollisions.sort((a, b) => {

            if (a.x == b.x) {
                return a.y - b.y
            }

            return a.x - b.x
        })

        const placeWorldPos = curCollisions[0].parent.convertToWorldSpaceAR(curCollisions[0].position)

        if (draggingShape.blockType == EnumBlockType.Block) {

            this.bagBlockName2Collision.forEach((value, key) => {
                value.opacity = 255
                value.color = cc.Color.WHITE
                value.getComponent(BagBlock).type = EnumBagBlockType.HasBlock
            })

        } else {

            this.shapeId2InPlaceShape.set(draggingShape.id, draggingShape)
            this.bagBlockName2Collision.forEach((value, key) => {
                value.color = cc.Color.WHITE
                if (!this.bagBlockName2InPlaceShape.has(key)) this.bagBlockName2InPlaceShape.set(key, draggingShape)
            })
        }

        return { result: true, placeWorldPos: placeWorldPos, intersect: curInpalceCollisionsCnt }
    }

    public getBagBlocksByShapeId(shapeId: number): Array<BagBlock> {

        const result = []

        for (const [key, shape] of this.bagBlockName2InPlaceShape) {
            if (shapeId == shape.id) {
                const [row, col] = key.split('_')
                result.push(this.bagBlocks[row][col])
            }
        }

        return result

    }

    public setBlockEmptyByShapeId(shapeId: number) {
        const bagBlocks = this.getBagBlocksByShapeId(shapeId)
        this.shapeId2InPlaceShape.delete(shapeId)
        bagBlocks.forEach((bagBlock) => this.bagBlockName2InPlaceShape.delete(bagBlock.node.name))
    }
}
