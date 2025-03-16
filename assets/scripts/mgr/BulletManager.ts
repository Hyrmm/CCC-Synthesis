import { TEnemyData } from "../common/Config";
import Bullet from "../item/Bullet";
import Enemy from "../item/Enemy";
import EnemyBar from "../item/EnemyBar";
import Main from "../Main";
import BaseManager from "./BaseManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BulletManager extends BaseManager {

    @property(cc.Prefab)
    prefab_bullet: cc.Prefab = null

    @property(cc.Node)
    layer_bullets: cc.Node = null

    private bulletPool: cc.NodePool = new cc.NodePool()
    private keyId2Bullets: Map<number, Bullet[]> = new Map()

    init(owner: Main): void {
        super.init(owner)
    }

    addBullet(oriPos: cc.Vec3, enemykeyId: number, type: number) {

        let bulletNode = this.bulletPool.get()
        if (!bulletNode) {
            bulletNode = cc.instantiate(this.prefab_bullet)
            bulletNode.getComponent(Bullet).init(this)
        }

        bulletNode.parent = this.layer_bullets
        bulletNode.getComponent(Bullet).reset(enemykeyId, type)
        bulletNode.setPosition(bulletNode.parent.convertToNodeSpaceAR(oriPos))

        if (!this.keyId2Bullets.has(enemykeyId)) this.keyId2Bullets.set(enemykeyId, [])
        this.keyId2Bullets.get(enemykeyId).push(bulletNode.getComponent(Bullet))

        return bulletNode.getComponent(Bullet)
    }

    delBullet(enemykeyId: number) {
        let bullets = this.keyId2Bullets.get(enemykeyId)
        if (!bullets) return
        let index = bullets.findIndex((bullet: Bullet) => bullet.target.data.keyId == enemykeyId)
        if (index == -1) return
        this.bulletPool.put(bullets[index].node)
        bullets.splice(index, 1)
    }

    onUpdate(dt: number): void {
        this.keyId2Bullets.forEach((bullets, keyId) => bullets.forEach(bullet => bullet.onUpdate(dt)))
    }

}
