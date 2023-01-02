/*---------------------------------------------------------------------
	DropdownJS v1.0.0 (FuturaJS)
-----------------------------------------------------------------------*/

/**
 * @class : Dropdown
 * @classdesc : Easily build your drop-down menu
 * @site : 
 * @tutorial : 
 * @licence : MIT
 * @version : v1.0.0
*/
import Exception from "./Exception.js";

export default class Dropdown {
    /**
     * @param elt
     * @param event
     * @param arrowKeys
     */
    constructor(elt = '', event = 'click', arrowKeys = false) {
        if (elt === '') return new Exception('Elt options is empty');
        this.elt = elt;
        this.event = event;
        this.arrayKeys = arrowKeys;
        this.build()
    }

    build(){
        let menu = document.querySelector(this.elt);
        if(menu !== null){
            let event = this.event, list = [];
            menu.querySelectorAll('li').forEach(function(e,i){
                for (let x of e.children) {
                    console.log(e)
                }
                e.querySelectorAll('ul').forEach(function(e,i){e.classList.add('d-none')});
                e.addEventListener(event,function(e){
                    if(e.target )
                    this.querySelector('ul').classList.toggle('d-none');
                },false);
            });
            return;
        }
        return new Exception('Bad selector !');
    }


}
window.fJs = window.fJs ?? {};
window.fJs.Dropdown = Dropdown;