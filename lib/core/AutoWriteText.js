/*---------------------------------------------------------------------
	AutoWriteText v1.0.0 (FuturaJS)
-----------------------------------------------------------------------*/

/**
 * @class : AutoWriteText
 * @classdesc : Easily build your Auto Write Text
 * @site : https://github.com/BlakvGhost/FuturaJS.git
 * @tutorial :
 * @licence : MIT
 * @version : v1.0.0
 */

import Utils from "../Utils";

const DATA_VALUE = 'data-fv-data';
const AUTOWRITE_SELECTOR = `[data-fv-anim='autowrite']`;

let _u = new Utils();

export default class AutoWriteText {

    constructor(options = {
        timeout: 300,
        separator: '|',
    }) {
        this.timeout = options.timeout ?? 300;
        this.separator = options.separator ?? '|';
        this.___ = document.querySelectorAll(AUTOWRITE_SELECTOR);
        this.begin();
    }
    begin() {
        _u.IntersectionHandler({
            elt: this.___,
            visible: (__) => this.write(__)
        })
    }
    write(__) {
        let __y = 0;
        let _y = __.getAttribute(DATA_VALUE);

        let ___y = setInterval(() => {
            let y = __.innerHTML.split(` ${this.separator}`);
            __y < _y.length ? __.innerHTML = `${y[0]}${_y[__y]} ${this.separator}` : this.stopWrite(__,___y) ;
            __y++;

        },this.timeout);

    }
    stopWrite(_e,___y) {
        clearInterval(___y);
        _e.innerHTML = _e.innerHTML.split(` ${this.separator}`)[0];
    }
}
window.fJs.AutoWriteText = AutoWriteText;
new AutoWriteText();
