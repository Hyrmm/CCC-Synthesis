import { ShapeConfig, shapesConfig } from "./common/Config";
import BagManager from "./mgr/BagManager";
import ShapeManager from "./mgr/ShapeManager";
import TowerManager from "./mgr/TowerManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property(BagManager)
    bagManager: BagManager = null

    @property(ShapeManager)
    shapeManager: ShapeManager = null

    @property(ShapeManager)
    towerManager: TowerManager = null


    private shapesPool: ObjectPool<ShapeConfig> = null

    start() {

        const manager = cc.director.getCollisionManager()
        manager.enabled = true
        // manager.enabledDebugDraw = true
        // manager.enabledDrawBoundingBox = true

        window['main'] = this
        cc.assetManager.loadBundle("synthesis", this.init)
    }

    init() {

        shapesConfig.forEach((val, index) => val.id = index)

        this.bagManager.init(this)
        this.shapeManager.init(this)

        this.shapesPool = new ObjectPool<ShapeConfig>(shapesConfig)
    }

    public refreshShapes() {

        for (let i = 0; i < 4; i++) {
            const shapes = this.shapesPool.acquire()
            this.shapeManager.addShapeInList(shapes.id, shapes.blockType, shapes.shapeType)
        }

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
    originalCollionPos: Array<number[]>,
}


