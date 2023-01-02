/*---------------------------------------------------------------------
	AnimationJS v1.0.0 (FuturaJS)
-----------------------------------------------------------------------*/

/**
 * @class : AnimationJS
 * @classdesc : Easily build your animation
 * @site : https://github.com/BlakvGhost/FuturaJS.git
 * @tutorial :
 * @licence : MIT
 * @version : v1.0.0
 */


import Utils from "../Utils.js";

const DATA_VALUE = 'data-fv-data';
const COUNTDOWN_SELECTOR = `[data-fv-anim='countdown']`;
const AUTOWRITE_SELECTOR = `[data-fv-anim='autowrite']`;

let utils = new Utils()

 export class Intersection {


     constructor(options = {elt : '', class : ''}) {

        options.elt = document.querySelectorAll(options.elt);
        options.class = options.class.trim();
        this.options = options;
        this.run();

     }
     run(){
        let z = this.options, y = z.class.split(' ');

        utils.IntersectionHandler({
            elt: this.options.elt,
            options: z,
            visible: function (handled){
                y.forEach((e) => handled.classList.add(e));
            }
        })
     }
 }
 export class NumberAutoCount {


     constructor(timeout = 200) {
         this.timeout = timeout;
         this.nodeListOfElements = document.querySelectorAll(COUNTDOWN_SELECTOR);
         this.begin();
     }
     begin() {

         utils.IntersectionHandler({
             elt: this.nodeListOfElements,
             visible: (handled) => this.count(handled)
         })
     }
     count(elt) {
        const limit = elt.getAttribute(DATA_VALUE);
        let i = 0;

        let timer = setInterval(() => {
           i <= limit ? elt.innerText = i : this.stopCount(timer);
           i++;
        },this.timeout);

     }
     stopCount(timer) {
         clearInterval(timer);
     }
 }
 export class AutoWriteText {

    constructor(options = {
        timeout: 300,
        separator: '|',
    }) {
        this.timeout = options.timeout ?? 300;
        this.separator = options.separator ?? '';
        this.nodeListOfElements = document.querySelectorAll(AUTOWRITE_SELECTOR);
        this.begin();
    }
    begin() {
        utils.IntersectionHandler({
            elt: this.nodeListOfElements,
            visible: (handled) => this.write(handled)
        })
    }
    write(elt) {
        let i = 0;
        let text = elt.getAttribute(DATA_VALUE);

        let timer = setInterval(() => {
            let newText = elt.innerHTML.split(` ${this.separator}`);
            i < text.length ? elt.innerHTML = `${newText[0]}${text[i]} ${this.separator}` : this.stopWrite(elt,timer) ;
            i++;

        },this.timeout);

    }
    stopWrite(elt,timer) {
        clearInterval(timer);
        elt.innerHTML = elt.innerHTML.split(` ${this.separator}`)[0];
    }
 }
 
 window.fJs.Intersection = Intersection;
 window.fJs.NumberAutoCount = NumberAutoCount;
 window.fJs.AutoWriteText = AutoWriteText;
