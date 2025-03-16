import { TShapeData } from "../common/Config";
import { StateMachine } from "../common/Fsm";
import { EnumShapeInWhere } from "../Main";
import ShapeManager from "../mgr/ShapeManager";
import { Attacking } from "../state/shapeState/Attacking";
import { Warning } from "../state/shapeState/Warning";
import Enemy from "./Enemy";

const { ccclass, property } = cc._decorator;

const blockType2SpineName = {
    1: "gongjian",
    2: "jianshi",
    3: "qibing"
}

const shapeType2BlockCnt = {
    0: 1,
    1: 2,
    2: 2,
    3: 3,
    4: 3,
    5: 3,
    6: 4,
}

@ccclass
export default class Shape extends cc.Component {
    public owner: ShapeManager = null

    public data: TShapeData = null
    public where: EnumShapeInWhere
    public blockCnt: number = -1

    private lbNode: cc.Node = null
    private stateMachine: StateMachine<this> = null

    public targetEnemy: Enemy = null

    public attackRange: number = 200

    public skComp: sp.Skeleton = null

    init(owner: ShapeManager) {

        this.owner = owner
        this.stateMachine = new StateMachine(this)
        this.skComp = this.node.getChildByName("sk").getComponent(sp.Skeleton)
        this.node.on(cc.Node.EventType.TOUCH_START, this.owner.onShapeTouchBegan, this.owner)
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.owner.onShapeTouchMoved, this.owner)
        this.node.on(cc.Node.EventType.TOUCH_END, this.owner.onShapeTouchEnded, this.owner)
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.owner.onShapeTouchEnded, this.owner)
    }

    reset(shapeData: TShapeData, where: EnumShapeInWhere) {

        this.node.opacity = 255

        this.data = shapeData
        this.where = where
        this.blockCnt = shapeType2BlockCnt[this.data.shapeType]
        this.stateMachine.reset(this)

        this.renderLabel()
        this.renderSkeleton()
        this.renderHightlight()
        this.registerState()

    }

    registerState() {

        const warning = new Warning(this)
        const attacking = new Attacking(this)

        const hasTargetEnemy = () => this.targetEnemy != null

        const isTargerDead = () => {
            if (!this.targetEnemy) return false

            if (this.targetEnemy.data.attr[0] <= 0) {
                this.targetEnemy = null
                return true
            }
            return false
        }

        const isTargerFarAway = () => {

            const worldPos1 = this.node.parent.convertToWorldSpaceAR(this.node.position)
            const worldPos2 = this.targetEnemy.node.parent.convertToWorldSpaceAR(this.targetEnemy.node.position)

            if (this.targetEnemy && worldPos1.sub(worldPos2).mag() > this.attackRange) {
                this.targetEnemy = null
                return true
            }
            return false
        }

        this.stateMachine.addTransition(warning, attacking, hasTargetEnemy)

        this.stateMachine.addTransition(attacking, warning, isTargerDead)
        this.stateMachine.addTransition(attacking, warning, isTargerFarAway)

        this.stateMachine.setState(warning)
    }

    onUpdate(dt: number) {
        if (this.node.parent && this.where == EnumShapeInWhere.InPlace) this.stateMachine.tick(dt)
    }

    upgradeLevel() {
        this.data.lv += 1
        this.lbNode.getComponent(cc.Label).string = "Lv." + this.data.lv
    }

    onCollisionStay(other, self) {
        this.owner.onShapeCollisionStay(other, self)
    }

    onCollisionExit(other, self) {
        this.owner.onShapeCollisionExit(other, self)
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

    private renderSkeleton() {

        const skNode = this.node.getChildByName("sk")

        cc.assetManager.getBundle("synthesis").load(`spine/shapes/${blockType2SpineName[this.data.blockType]}${this.data.lv}_red`, sp.SkeletonData, (err, rowdata) => {
            if (err) return console.error(err)
            skNode.getComponent(sp.Skeleton).skeletonData = rowdata
            skNode.getComponent(sp.Skeleton).setAnimation(0, "idle1", true)
            skNode.scale = 1.5
            skNode.x = this.data.spOffset[0]
            skNode.y = this.data.spOffset[1]
        })
    }

    private renderHightlight() {
        for (const child of this.node.children) {
            if (child.name == "sp") child.active = this.data.blockType != 0
            if (child.name == "block") child.active = this.data.blockType == 0
        }

    }
}
