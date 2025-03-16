import EnemyManager from "../mgr/EnemyManager";
import { StateMachine } from "../common/Fsm";
import { TEnemyData } from "../common/Config";
import { MovingByPath } from "../state/enemyState/MovingByPath";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Enemy extends cc.Component {

    public data: TEnemyData = null
    public owner: EnemyManager = null
    public stateMachine: StateMachine<this> = null

    public skComp: sp.Skeleton = null

    init(owner: EnemyManager) {
        this.owner = owner
        this.skComp = this.node.getChildByName("sk").getComponent(sp.Skeleton)
        this.stateMachine = new StateMachine(this)
    }

    reset(enemyData: TEnemyData) {

        this.data = enemyData
        this.stateMachine.reset(this)

        this.registerState()
        this.renderSkeleton()
    }

    onUpdate(dt: number) {
        if (this.node.parent) this.stateMachine.tick(dt)
    }

    onAttack(attr: number[]) {

        this.data.attr[0] -= 300
        if (this.data.attr[0] <= 0) this.owner.delEnemy(this.data.keyId)
    }

    private registerState() {

        const isMoveEnding = () => true

        const movingByPath = new MovingByPath(this, this.owner.layer_paths.children)
        this.stateMachine.setState(movingByPath)
    }

    private renderSkeleton() {

        cc.assetManager.getBundle("synthesis").load(`spine/enemies/${this.data.res}_gray`, sp.SkeletonData, (err, rowdata) => {
            if (err) return console.error(err)
            this.skComp.skeletonData = rowdata
            this.skComp.setAnimation(0, "idle1", true)
            this.skComp.node.scale = 1.5
        })
    }

}
