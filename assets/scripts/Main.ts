import { shapeDatas, TShapeData } from "./common/Config";
import { ObjectPool } from "./common/Pool";
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

    @property(cc.Node)
    btn_refresh: cc.Node = null

    private shapesPool: ObjectPool<TShapeData> = null

    start() {

        const manager = cc.director.getCollisionManager()
        manager.enabled = true
        // manager.enabledDebugDraw = true
        // manager.enabledDrawBoundingBox = true

        window['main'] = this
        cc.assetManager.loadBundle("synthesis", this.init.bind(this))
    }

    init() {

        shapeDatas.forEach((val, index) => val.id = index)

        this.bagManager.init(this)
        this.shapeManager.init(this)

        this.shapesPool = new ObjectPool<TShapeData>(shapeDatas)
        this.refreshShapes()


        this.btn_refresh.on(cc.Node.EventType.TOUCH_END, () => this.refreshShapes())
    }

    public refreshShapes() {

        const shapeInlist = Array.from(this.shapeManager.shapeList.values()).filter(shape => shape.where == EnumShapeInWhere.InList)

        shapeInlist.forEach(shape => {
            this.shapeManager.delShapeById(shape.data.id)
            this.shapesPool.release(shape.data)
        })


        for (let i = 0; i < 4; i++) {
            const shapeData = this.shapesPool.acquire()
            this.shapeManager.addShapeInList(shapeData)
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


