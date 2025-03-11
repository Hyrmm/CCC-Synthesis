import BagManager from "../mgr/BagManager";
import { globalConfig } from "../common/Config";
import { EnumBagBlockType } from "../Main";


const { ccclass, property } = cc._decorator;

@ccclass
export default class BagBlock extends cc.Component {

    private owner: BagManager = null

    public type: EnumBagBlockType = EnumBagBlockType.None


    init(owner: BagManager, type: EnumBagBlockType) {
        this.owner = owner
        this.type = type
        this.node.opacity = type == EnumBagBlockType.HasBlock ? 255 : 120
        this.node.width = globalConfig.blockSize
        this.node.height = globalConfig.blockSize
    }

    onCollisionEnter(other, self) {
        this.owner.onCollisionEnter(other, self)
    }

    onCollisionStay(other, self) {
        this.owner.onCollisionStay(other, self)
    }

    onCollisionExit(other, self) {
        this.owner.onCollisionExit(other, self)
    }
}
