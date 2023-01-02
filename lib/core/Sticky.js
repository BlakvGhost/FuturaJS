/*---------------------------------------------------------------------
	StickyJS v1.0.0 (FuturaJS)
-----------------------------------------------------------------------*/

/**
 * @class : Sticky
 * @classdesc : Easily build your sticky
 * @site : 
 * @tutorial : 
 * @licence : MIT
 * @version : v1.0.0
 */

import Exception from "./Exception.js";

const STICKY_CLASS_LIST = [
    'position-fixed',
    'w-100',
    'start-0',
    'top-0',
    'shadow',
    'fv-zd',
    'animate__animated',
    'animate__fadeInDown'
];
const EXCEPTION_ERROR = "Element options is empty";

export default class Sticky{
    /**
     * @param options
     */
    constructor(options = {elt : '',class : '', callback : null, fallback: null}) {
        if (options.elt === '') return new Exception(EXCEPTION_ERROR);
        options.elt = document.querySelector(options.elt);
        this.options = options;   
        this.run();
    }
    run(){
        let z = this.options;
        window.addEventListener('scroll',(e) => {
            window.scrollY >= z.elt.getClientRects()[0].height ? STICKY_CLASS_LIST.forEach((e)=>{z.elt.classList.add(e)}) || (z.callback ? z.callback(z.elt) : false) : STICKY_CLASS_LIST.forEach((e)=>{z.elt.classList.remove(e)}) || z.elt.classList.remove(z.class) || (z.fallback ? z.fallback(z.elt) : false) ;
        })
    }
}
window.fJs.Sticky = Sticky;