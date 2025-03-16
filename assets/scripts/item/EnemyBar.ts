import EnemyManager from "../mgr/EnemyManager"
import Enemy from "./Enemy"
const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemyBar extends cc.Component {

    @property(cc.ProgressBar)
    progress: cc.ProgressBar = null

    private enemy: Enemy = null
    private owner: EnemyManager = null

    init(owner: EnemyManager) {
        this.owner = owner
    }

    reset(keyId: number) {
        this.enemy = this.owner.getEnemy(keyId)
        this.progress.progress = 0
    }

    onUpdate(dt: number): void {
        this.node.position = this.enemy.node.position.add(cc.v3(0, 65, 0))
        this.progress.progress = this.enemy.data.attr[0] / this.enemy.data.attrMax[0]
    }
}