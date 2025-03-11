import BagManager from "./BagManager";
import Shape from "./Shape";
import ShapeManager from "./ShapeManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property(BagManager)
    bagManager: BagManager = null

    @property(ShapeManager)
    shapeManager: ShapeManager = null

    start() {

        cc.director.getCollisionManager().enabled = true
        const manager = cc.director.getCollisionManager()
        manager.enabled = true
        manager.enabledDebugDraw = true
        manager.enabledDrawBoundingBox = true

        this.bagManager.init(this)
        this.shapeManager.init(this)


        window['main'] = this
    }
}


export enum EnumBlockType {
    Block = 0,
}

export enum EnumShapeInWhere {
    InList = 1,
    InPlace = 2,
}

export enum EnumBagBlockType {
    None = 0,
    HasBlock = 1,
}

export type DragingShape = {
    target: cc.Node | null,
    targetCopy: cc.Node | null,
    originalPos: cc.Vec3,
}


