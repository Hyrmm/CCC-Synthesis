import { TEnemyData } from "../common/Config";
import Enemy from "../item/Enemy";
import EnemyBar from "../item/EnemyBar";
import Main from "../Main";
import BaseManager from "./BaseManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class EnemyManager extends BaseManager {

    @property(cc.Prefab)
    prefab_bar: cc.Prefab = null

    @property(cc.Prefab)
    prefab_enemie: cc.Prefab = null

    @property(cc.Node)
    layer_paths: cc.Node = null

    @property(cc.Node)
    layer_enemies: cc.Node = null

    @property(cc.Node)
    layer_bars: cc.Node = null

    private barPool: cc.NodePool = new cc.NodePool()
    private enemyPool: cc.NodePool = new cc.NodePool()

    private keyId2Enemy: Map<number, Enemy> = new Map()
    private keyId2EnemyBar: Map<number, EnemyBar> = new Map()

    init(owner: Main): void {
        super.init(owner)
    }

    addBar(keyId: number) {

        let barNode = this.barPool.get()
        if (!barNode) {
            barNode = cc.instantiate(this.prefab_bar)
            barNode.getComponent(EnemyBar).init(this)
        }

        barNode.parent = this.layer_bars
        barNode.getComponent(EnemyBar).reset(keyId)

        this.keyId2EnemyBar.set(keyId, barNode.getComponent(EnemyBar))
    }

    addEnemy(enemyData: TEnemyData) {
        let enemyNode = this.enemyPool.get()

        if (!enemyNode) {
            enemyNode = cc.instantiate(this.prefab_enemie)
            enemyNode.getComponent(Enemy).init(this)
        }

        enemyNode.getComponent(Enemy).reset(enemyData)
        enemyNode.parent = this.layer_enemies
        enemyNode.position = this.layer_paths.children[0].position.clone()

        this.keyId2Enemy.set(enemyData.keyId, enemyNode.getComponent(Enemy))

        this.addBar(enemyData.keyId)
    }

    delBar(keyId: number) {
        let bar = this.keyId2EnemyBar.get(keyId)
        if (!bar) return
        this.keyId2EnemyBar.delete(keyId)
        this.barPool.put(bar.node)
    }

    delEnemy(keyId: number) {
        let enemy = this.keyId2Enemy.get(keyId)
        if (!enemy) return

        if (this.keyId2EnemyBar.has(keyId)) {
            this.delBar(keyId)
        }

        this.keyId2Enemy.delete(keyId)
        this.enemyPool.put(enemy.node)
    }

    getEnemy(keyId: number): Enemy {
        return this.keyId2Enemy.get(keyId)
    }

    getEnemyRadius(pos: cc.Vec3, radius: number): Enemy {
        const temp = Array.from(this.keyId2Enemy.values())
        const inRadius = temp.filter((enemy) => {
            const worldPos = enemy.node.parent.convertToWorldSpaceAR(enemy.node.position)
            enemy['distanceSqr'] = pos.sub(worldPos).magSqr()
            return enemy['distanceSqr'] <= radius ** 2
        }).sort((a, b) => a['distanceSqr'] - b['distanceSqr'])
        return inRadius[0]
    }

    onUpdate(dt: number): void {
        this.keyId2Enemy.forEach((enemy) => enemy.onUpdate(dt))
        this.keyId2EnemyBar.forEach((bar) => bar.onUpdate(dt))
    }

}
