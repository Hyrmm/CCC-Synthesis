import Main from "../Main";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BaseManager extends cc.Component {


    public owner: Main = null

    init(owner: Main) {
        this.owner = owner
    }

    start() {

    }
}
