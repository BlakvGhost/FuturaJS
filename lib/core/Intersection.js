/*---------------------------------------------------------------------
	AnimationJS v1.0.0 (FuturaJS)
-----------------------------------------------------------------------*/

/**
 * @class : Intersection
 * @classdesc : Easily build your Intersection
 * @site : https://fv.zd.lu
 * @tutorial :
 * @licence : MIT
 * @version : v1.0.0
 */


import Utils from "../Utils.js";


let _u = new Utils()

export default class Intersection {


    constructor(options = {elt : '', class : ''}) {

        options.___ = document.querySelectorAll(options.elt);
        options.class = options.class.trim();
        this._ = options;
        this.run();

    }
    run(){
        let ___y = this._, __y = ___y.class.split(' ');

        _u.IntersectionHandler({
            elt: this._.___,
            options: ___y,
            visible: (__) =>  __y.forEach( (e) => __.classList.add(e)),
        })
    }
}

window.fJs.Intersection = Intersection;