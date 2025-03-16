export class State {
    tickTime: number = 0
}

export interface IState {

    tickTime: number

    onTick(dt: number): void

    onEnter(): void

    onExit(): void

}
export class Transition {

    public to: IState
    public priority: number = 0
    public condition: () => boolean


    constructor(to: IState, condition: () => boolean, priority: number) {
        this.to = to
        this.priority = priority
        this.condition = condition
    }

}
export class StateMachine<T> {

    private owner: T
    private curState: IState

    private state2Transitions: Map<IState, Transition[]> = new Map()

    private curTransitions: Transition[] = []
    private anyTransitions: Transition[] = []
    private emptyTransitions: Transition[] = []

    constructor(owner: T) {
        this.owner = owner
    }

    public tick(dt: number) {

        const transition = this.getTransition()

        if (transition) {
            this.setState(transition.to)
        }

        if (this.curState) {
            this.curState.tickTime += dt
            this.curState.onTick(dt)
        }
    }

    public setState(state: IState) {
        // if (this.curState === state) return

        if (this.curState) { this.curState.onExit(); this.curState.tickTime = 0 }
        if (this.curState) console.log(`State Change:${this.curState.constructor.name} to ${state.constructor.name}`)

        this.curState = state
        this.curTransitions = this.state2Transitions.get(state) || this.emptyTransitions

        this.curState.onEnter()
    }

    /**
     * 添加from状态转换到to状态条件
     * @param from 
     * @param to 
     * @param condition 
     */
    public addTransition(from: IState, to: IState, condition: () => boolean, priority: number = 0) {

        const transition = new Transition(to, condition, priority)

        if (!this.state2Transitions.has(from)) this.state2Transitions.set(from, [])

        this.state2Transitions.get(from)!.push(transition)

        if (priority != 0) this.state2Transitions.get(from).sort((a, b) => b.priority - a.priority)
    }

    /**
     * 添加任意状态转换条件(任意状态到to状态)
     * @param to 
     * @param condition 
     */
    public addAnyTransition(to: IState, condition: () => boolean, priority: number = 0) {

        const transition = new Transition(to, condition, priority)

        this.anyTransitions.push(transition)
        if (priority != 0) this.anyTransitions.sort((a, b) => b.priority - a.priority)
    }


    /**
     * 获取当前状态的转换到存在状态的条件,任意状态优先级最高
     * @returns 
     */
    public getTransition(): Transition | null {

        for (const transition of this.anyTransitions) {
            if (transition.condition()) return transition
        }

        for (const transition of this.curTransitions) {
            if (transition.condition()) return transition
        }

        return null
    }

    public reset(owner: T) {
        if (this.curState) this.curState.onExit()
        this.owner = owner
        this.curState = null
        this.state2Transitions.clear()
        this.curTransitions.length = 0
        this.anyTransitions.length = 0
    }
}