import { IState, State } from "../../common/Fsm";
import { getDirection } from "../../common/Utils";
import Enemy from "../../item/Enemy";


export class MovingByPath extends State implements IState {

    private owner: Enemy = null
    private paths: cc.Node[] = []

    private curPathIdx: number = -1

    constructor(owner: Enemy, paths: cc.Node[]) {
        super()
        this.paths = paths
        this.owner = owner
    }

    onTick(dt: number): void {


        const curPath = this.paths[this.curPathIdx]
        if (!curPath) return

        const startPos = this.owner.node.position.clone()
        const endPos = curPath.position.clone()
        const speed = this.owner.data.attr[1]

        const dir = endPos.sub(startPos).normalize()
        let targetPos = startPos.add(dir.mul(speed * dt))

        if (targetPos.sub(startPos).len() >= endPos.sub(startPos).len()) {
            targetPos = endPos
            this.curPathIdx += 1
        }


        const direction = getDirection(startPos, targetPos)
        if (this.owner.skComp.animation != `move${direction}`) { 
            this.owner.skComp.setAnimation(0, `move${direction}`, true)
        }

        this.owner.node.position = targetPos
    }

    onEnter(): void {
        this.curPathIdx = 1
    }

    onExit(): void {

    }
}