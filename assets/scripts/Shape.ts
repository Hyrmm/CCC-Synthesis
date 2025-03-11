import { shapeType2BlockCnt } from "./Config";
import { EnumShapeInWhere } from "./Main";
import ShapeManager from "./ShapeManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Shape extends cc.Component {

    public id: number = -1
    public lv: number = -1
    public owner: ShapeManager = null

    public blockType: number = -1
    public shapeType: number = -1

    public where: EnumShapeInWhere
    public blockCnt: number = -1

    private lbNode: cc.Node = null

    start() {

    }

    public init(owner: ShapeManager) {

        this.owner = owner
        this.node.on(cc.Node.EventType.TOUCH_START, this.owner.onShapeTouchBegan, this.owner)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.owner.onShapeTouchMoved, this.owner)
        this.node.on(cc.Node.EventType.TOUCH_END, this.owner.onShapeTouchEnded, this.owner)
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.owner.onShapeTouchEnded, this.owner)
    }

    public reset(id: number, lv: number, types: number[], where: EnumShapeInWhere) {

        this.id = id
        this.lv = lv
        this.where = where
        this.blockType = types[0]
        this.shapeType = types[1]
        this.blockCnt = shapeType2BlockCnt[this.shapeType]

        if (this.blockType != 0) {
            this.node.children.forEach(child => child.color = cc.Color.YELLOW)
        } else {
            this.node.children.forEach(child => child.color = cc.Color.WHITE)
        }

        if (this.blockType == 0) return

        if (!this.lbNode) {

            this.lbNode = new cc.Node()
            this.lbNode.parent = this.node
            this.lbNode.addComponent(cc.Label)
            this.lbNode.color = cc.Color.BLUE
            this.lbNode.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER
            this.lbNode.getComponent(cc.Label).verticalAlign = cc.Label.VerticalAlign.CENTER
            this.lbNode.getComponent(cc.Label).fontSize = 24
            this.lbNode.getComponent(cc.Label).lineHeight = 24
            const posX = this.node.width / 2
            const posY = this.node.anchorY == 1 ? -this.node.height / 2 : this.node.height / 2

            this.lbNode.setPosition(posX, posY)
        }

        this.lbNode.color = cc.Color.BLUE
        this.lbNode.getComponent(cc.Label).string = "Lv." + this.lv
    }

    public upgradeLevel() {
        this.lv += 1
        this.lbNode.getComponent(cc.Label).string = "Lv." + this.lv
    }

    public onCollisionStay(other, self) {
        this.owner.onShapeCollisionStay(other, self)
    }

    public onCollisionExit(other, self) {
        this.owner.onShapeCollisionExit(other, self)
    }
}
