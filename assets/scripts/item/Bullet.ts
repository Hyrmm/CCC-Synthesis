import BulletManager from "../mgr/BulletManager";
import Enemy from "./Enemy";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Bullet extends cc.Component {

    @property(cc.Animation)
    animation: cc.Animation = null

    public owner: BulletManager = null

    public target: Enemy = null
    public bulletType: number = 0

    init(owner: BulletManager) {
        this.owner = owner
    }

    reset(enemykeyId: number, bulletType: number) {

        this.target = this.owner.owner.enemyManager.getEnemy(enemykeyId)
        this.bulletType = bulletType

        // this.animation.play("bullet_" + bulletType)
    }

    onUpdate(dt: number) {

        const startPos = this.node.parent.convertToWorldSpaceAR(this.node.position)
        const endPos = this.target.node.parent.convertToWorldSpaceAR(this.target.node.position)
        const speed = 500

        const dir = endPos.sub(startPos).normalize()
        let targetPos = startPos.add(dir.mul(speed * dt))

        if (targetPos.sub(startPos).len() >= endPos.sub(startPos).len()) {
            targetPos = endPos
        }

        this.node.position = this.node.parent.convertToNodeSpaceAR(targetPos)

        const distance = targetPos.sub(endPos).len()
        if (distance < 10) {
            this.target.onAttack([])
            this.owner.delBullet(this.target.data.keyId)
        }


    }
}
