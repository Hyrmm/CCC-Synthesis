import { IState, State } from "../../common/Fsm";
import { getDirection } from "../../common/Utils";
import Shape from "../../item/Shape";
import EnemyManager from "../../mgr/EnemyManager";


export class Warning extends State implements IState {

    private owner: Shape = null
    private enemyManager: EnemyManager = null

    private lastTickTime: number = 0

    constructor(owner: Shape) {

        super()

        this.owner = owner
    }

    onTick(dt: number): void {
        if (this.tickTime - this.lastTickTime < 0.5 && this.lastTickTime != 0) return
        this.lastTickTime = this.tickTime

        const worldPos = this.owner.node.parent.convertToWorldSpaceAR(this.owner.node.position)
        this.owner.targetEnemy = this.enemyManager.getEnemyRadius(worldPos, 200)
    }

    onEnter(): void {
        this.enemyManager = this.owner.owner.owner.enemyManager
    }

    onExit(): void {
        this.lastTickTime = 0
    }
}