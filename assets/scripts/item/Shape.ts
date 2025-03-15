import { shapeType2BlockCnt, TShapeData } from "../common/Config";
import { EnumShapeInWhere } from "../Main";
import ShapeManager from "../mgr/ShapeManager";

const { ccclass, property } = cc._decorator;

const blockType2SpineName = {

}


@ccclass
export default class Shape extends cc.Component {

    public owner: ShapeManager = null

    public where: EnumShapeInWhere
    public blockCnt: number = -1

    private lbNode: cc.Node = null

    public data: TShapeData = null

    public init(owner: ShapeManager) {

        this.owner = owner
        this.node.on(cc.Node.EventType.TOUCH_START, this.owner.onShapeTouchBegan, this.owner)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.owner.onShapeTouchMoved, this.owner)
        this.node.on(cc.Node.EventType.TOUCH_END, this.owner.onShapeTouchEnded, this.owner)
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.owner.onShapeTouchEnded, this.owner)
    }

    public reset(shapeData: TShapeData, where: EnumShapeInWhere) {

        this.node.opacity = 255

        this.data = shapeData
        this.where = where
        this.blockCnt = shapeType2BlockCnt[this.data.shapeType]

        this.renderLabel()
        this.renderSprite()
        this.renderHightlight()

    }

    private renderLabel() {

        if (!this.lbNode) {

            this.lbNode = new cc.Node()
            this.lbNode.parent = this.node
            this.lbNode.addComponent(cc.Label)
            this.lbNode.color = cc.Color.BLUE
            this.lbNode.getComponent(cc.Label).horizontalAlign = cc.Label.HorizontalAlign.CENTER
            this.lbNode.getComponent(cc.Label).verticalAlign = cc.Label.VerticalAlign.CENTER
            this.lbNode.getComponent(cc.Label).fontSize = 32
            this.lbNode.getComponent(cc.Label).lineHeight = 32
            const posX = this.node.width / 2
            const posY = this.node.anchorY == 1 ? -this.node.height / 2 : this.node.height / 2

            this.lbNode.setPosition(posX, posY)
        }

        this.lbNode.color = cc.Color.RED
        this.lbNode.getComponent(cc.Label).string = "Lv." + this.data.lv

        this.lbNode.active = this.data.blockType != 0
    }

    private renderSprite() {
        const spNode = this.node.getChildByName("sp")
        // cc.assetManager.getBundle("synthesis").load(`texture/sp/block_type_${this.data.blockType}`, cc.SpriteFrame, (err, sp) => {
        //     spNode.getComponent(cc.Sprite).spriteFrame = sp
        //     spNode.x = this.data.spOffset[0]
        //     spNode.y = this.data.spOffset[1]
        // })

        cc.assetManager.getBundle("synthesis").load(`texture/sp/block_type_${this.data.blockType}`, sp.SkeletonData, (err, rowdata) => {
            spNode.getComponent(sp.Skeleton).skeletonData = rowdata
            // spNode.x = this.data.spOffset[0]
            // spNode.y = this.data.spOffset[1]
        })
    }

    private renderHightlight() {
        for (const child of this.node.children) {
            if (child.name == "sp") child.active = this.data.blockType != 0
            if (child.name == "block") child.active = this.data.blockType == 0
        }

    }

    public onCollisionStay(other, self) {
        this.owner.onShapeCollisionStay(other, self)
    }

    public onCollisionExit(other, self) {
        this.owner.onShapeCollisionExit(other, self)
    }

    public upgradeLevel() {
        this.data.lv += 1
        this.lbNode.getComponent(cc.Label).string = "Lv." + this.data.lv
    }
}
