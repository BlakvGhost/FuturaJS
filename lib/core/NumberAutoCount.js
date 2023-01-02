/*---------------------------------------------------------------------
	AnimationJS v1.0.0 (FuturaJS)
-----------------------------------------------------------------------*/

/**
 * @class : NumberAutoCount
 * @classdesc : Easily Count in time interval your number
 * @site : https://fv.zd.lu
 * @tutorial :
 * @licence : MIT
 * @version : v1.0.0
 */

import Utils from "../Utils.js";

const DATA_VALUE = 'data-fv-data';
const COUNTDOWN_SELECTOR = `[data-fv-anim='countdown']`;


let _u = new Utils();

export default class NumberAutoCount {


    constructor(timeout = 200) {
        this.timeout = timeout;
        this.___ = document.querySelectorAll(COUNTDOWN_SELECTOR);
        this.begin();
    }
    begin() {

        _u.IntersectionHandler({
            elt: this.___,
            visible: (__) => this.count(__),
        })
    }
    count(__) {
        const __y = __.getAttribute(DATA_VALUE);
        let _y = 0;

        let ___y = setInterval(() => {
            _y <= __y ? __.innerText = _y : this.stopCount(___y);
            _y++;
        },this.timeout);

    }
    stopCount(___y) {
        clearInterval(___y);
    }
}
window.fJs.NumberAutoCount = NumberAutoCount;
new NumberAutoCount();