import { IState, State } from "../../common/Fsm";
import { getDirection } from "../../common/Utils";
import Shape from "../../item/Shape";
import BulletManager from "../../mgr/BulletManager";
import EnemyManager from "../../mgr/EnemyManager";


export class Attacking extends State implements IState {

    private owner: Shape = null
    private enemyManager: EnemyManager = null
    private bulletManager: BulletManager = null

    private lastTickTime: number = 0

    constructor(owner: Shape) {

        super()

        this.owner = owner
    }

    onTick(dt: number): void {

        if (this.tickTime - this.lastTickTime < 1 && this.lastTickTime != 0) return
        this.lastTickTime = this.tickTime

        const bullet = this.bulletManager.addBullet(this.owner.node.parent.convertToWorldSpaceAR(this.owner.node.position), this.owner.targetEnemy.data.keyId, 1)
    }

    onEnter(): void {
        this.bulletManager = this.owner.owner.owner.bulletManager
        this.owner.skComp.setAnimation(0, "attack1", true)
    }

    onExit(): void {
        this.owner.skComp.setAnimation(0, "idle1", true)
        this.lastTickTime = 0
    }
}