import { TEnemyData, TShapeData, combatsConfig, enemiesConfig } from "./common/Config";
import { ObjectPool } from "./common/Pool";
import Bullet from "./item/Bullet";
import BagManager from "./mgr/BagManager";
import BulletManager from "./mgr/BulletManager";
import EnemyManager from "./mgr/EnemyManager";
import ShapeManager from "./mgr/ShapeManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {

    @property(BagManager)
    bagManager: BagManager = null

    @property(ShapeManager)
    shapeManager: ShapeManager = null

    @property(EnemyManager)
    enemyManager: EnemyManager = null

    @property(BulletManager)
    bulletManager: BulletManager = null

    @property(cc.Node)
    btn_start: cc.Node = null

    @property(cc.Node)
    btn_refresh: cc.Node = null

    private shapesPool: ObjectPool<TShapeData> = null
    private ememiesPool: ObjectPool<TEnemyData> = null

    public curStage: EnumStage = 0
    public curCombatId: number = 148

    start() {

        const manager = cc.director.getCollisionManager()
        manager.enabled = true
        // manager.enabledDebugDraw = true
        // manager.enabledDrawBoundingBox = true

        window['main'] = this
        cc.assetManager.loadBundle("synthesis", this.init.bind(this))
    }

    init() {

        this.resetCombat()

        this.bagManager.init(this)
        this.shapeManager.init(this)
        this.bulletManager.init(this)

        this.btn_start.on(cc.Node.EventType.TOUCH_END, () => this.onStartBtn())
        this.btn_refresh.on(cc.Node.EventType.TOUCH_END, () => this.onRefreshBtn())
    }

    public resetCombat() {

        const shapeDatas: Array<TShapeData> = [
            // { lv: 1, blockType: 0, shapeType: 0, spOffset: [0, 0] },
            // { lv: 1, blockType: 0, shapeType: 1, spOffset: [0, 0] },
            // { lv: 1, blockType: 0, shapeType: 5, spOffset: [0, 0] },
            // { lv: 1, blockType: 0, shapeType: 3, spOffset: [0, 0] },
            // { lv: 1, blockType: 0, shapeType: 6, spOffset: [0, 0] },
            { id: 1, lv: 1, blockType: 1, shapeType: 2, spOffset: [62, 24] },
            { id: 2, lv: 1, blockType: 2, shapeType: 1, spOffset: [25, 23] },
            { id: 3, lv: 1, blockType: 3, shapeType: 3, spOffset: [92, 37] },
            // { lv: 1, blockType: 4, shapeType: 3, spOffset: [85, 74] },
            // { lv: 1, blockType: 5, shapeType: 6, spOffset: [52, 48] },
            // { lv: 1, blockType: 1, shapeType: 0, spOffset: [35, 57] },
            // { lv: 1, blockType: 2, shapeType: 1, spOffset: [35, 50] },
            // { lv: 1, blockType: 3, shapeType: 5, spOffset: [41, 56] },
            // { lv: 1, blockType: 4, shapeType: 3, spOffset: [85, 74] },
            // { lv: 1, blockType: 5, shapeType: 6, spOffset: [52, 48] },
        ]

        const enemyDatas: Array<TEnemyData> = []

        const combatConfig = combatsConfig[this.curCombatId]
        const enemies = JSON.parse(combatConfig.npc)

        let defaultKeyId = Date.now()
        for (const enemy of enemies) {

            const [id, count] = enemy

            for (let i = 0; i < count; i++) {

                const enemyConfig = enemiesConfig[id - 1]
                const enemyData: TEnemyData = {
                    id: +enemyConfig.id, keyId: defaultKeyId, res: enemyConfig.npcRes,
                    type: +enemyConfig.npcType, armType: +enemyConfig.armType,
                    attr: JSON.parse(enemyConfig.npcAttr), attrMax: JSON.parse(enemyConfig.npcAttr)
                }

                enemyDatas.push(enemyData)

                defaultKeyId += 1
            }
        }

        this.shapesPool = new ObjectPool<TShapeData>(shapeDatas)
        this.ememiesPool = new ObjectPool<TEnemyData>(enemyDatas)
    }

    public onStartBtn() {

        this.curStage = EnumStage.Defense

        for (let i = 0; i < this.ememiesPool.getAvailableCount(); i++) {
            this.scheduleOnce(() => this.enemyManager.addEnemy(this.ememiesPool.acquire()), 2 * i)
        }
    }

    public onRefreshBtn() {
        const shapeInlist = Array.from(this.shapeManager.shapeList.values()).filter(shape => shape.where == EnumShapeInWhere.InList)

        shapeInlist.forEach(shape => {
            this.shapeManager.delShapeById(shape.data.id)
            this.shapesPool.release(shape.data)
        })

        for (let i = 0; i < 4; i++) {
            const shapeData = this.shapesPool.acquire()
            if (shapeData) this.shapeManager.addShapeInList(shapeData)

        }
    }

    update(dt: number): void {
        this.bagManager.onUpdate(dt)
        this.shapeManager.onUpdate(dt)
        this.enemyManager.onUpdate(dt)
        this.bulletManager.onUpdate(dt)
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
    originalBlockId: number[],
}


export enum EnumStage {
    Placing = 0,
    Defense = 1,
}