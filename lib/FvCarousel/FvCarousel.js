/*---------------------------------------------------------------------
	FvCarousel v1.0.0 (FuturaJS)
-----------------------------------------------------------------------*/

/**
 * @class : FvCarousel
 * @classdesc : Easily build your Carousel
 * @site : https://github.com/BlakvGhost/FuturaJS.git
 * @tutorial :
 * @licence : MIT
 * @version : v1.0.0
 */

const DATA_VISIBLE = `data-fv-visible`;
const DATA_POSITION = `data-fv-position`;
const SLIDE_ITEM_LABEL = `aria-label`
const DIV_NODE = `div`;
const DOT_CLASS = `fv-carousel-dots-item`
const DEFAULT_PARAM = {
    items: 2,
    margin: '5px',
    prev: '.fv-carousel-control-prev',
    next: '.fv-carousel-control-next',
    autoplay: true,
    autoplaySpeed: '500ms',
    autoplayHoverPause: true,
    timeout: 5000,
    allowDrag: true,
    keyDirection: true,
    direction: 'horizontal',
    dots: {
        el: '.fv-dots',
        direction: 'vertical'
    }
}
const CAROUSEL_STYLE = `
    .fv-carousel {overflow: hidden;max-width:100%;height: 100%;}
    .fv-carousel-inner {width: 100%;height: 100%;overflow: hidden;padding: 0;}
    .fv-carousel-group {width: 100%;height: 100%;display: flex;flex-wrap: nowrap;}
    .fv-carousel-item {flex: 0 0 auto;width: 100%;height: 100%;display: block; }
    .direction-horizontal {flex-direction: row}
    .direction-vertical {flex-direction: column}
    .fv-carousel-dots {z-index: 6}
    .fv-carousel-dots-group {display: flex;justify-content: space-between;height: 100%;width: 100%;}
    .fv-carousel-dots-item {margin: .5rem!important;height:10px;width:10px;border-radius:50%;}
    .fv-dot-active {background-color: red;}
    .fv-dot-inactive {background-color: silver;}
`

export default class FvCarousel {

    constructor(elt,b = DEFAULT_PARAM) {
        this._itemClass = `.fv-carousel-item`;
        this.___i = 0;
        this.__ = document.querySelector(elt);
        this.___ = this.__.querySelectorAll(this._itemClass);
        this.prevBtn = document.querySelector(b.prev);
        this.nextBtn = document.querySelector(b.next);
        this.dotsContainer = document.querySelector(b.dots.el);
        this.dotsDirection = b.dots.direction;
        this.slideDirection = b.direction;
        this.timeout = b.timeout ?? 5000;
        this.itemsCount = b.items ?? 2;
        this.autoplaySpeed = b.autoplaySpeed ?? '500ms';
        this.elementMargin = b.margin;
        this.allowKeyDirection = b.keyDirection === undefined ? true : b.keyDirection;
        this.autoplay = b.autoplay === undefined ? true : b.autoplay;
        this.autoplayHoverPause = b.autoplayHoverPause === undefined ? true : b.autoplayHoverPause;
        this.allowDrag = b.allowDrag === undefined ? true : b.allowDrag;
        this.elementWidth = b.direction === 'vertical' ? this.__.offsetWidth : this.__.offsetWidth / this.itemsCount;
        this.elementHeight = this.___[0].getBoundingClientRect().height;

        this.start();

    }
    start() {
        let __m = document.createElement('style');
        __m.innerHTML = CAROUSEL_STYLE;
        document.querySelector('head').append(__m);

        this.__.classList.add('fv-carousel');

        let _m = document.createElement(DIV_NODE);
        _m.classList.add('fv-carousel-inner');
        this.__.appendChild(_m);

        let __y = document.createElement(DIV_NODE);
        __y.classList.add('fv-carousel-group',`direction-${this.slideDirection}`);
        _m.appendChild(__y);

        this.___.forEach( (__t,_i) => {
            __y.appendChild(__t) && __t.classList.add('fv-carousel-item');
            __t.setAttribute(SLIDE_ITEM_LABEL,`${_i + 1}/${this.___.length}`) ;
            __t.style.width = `${this.elementWidth}px`;
            __t.style.margin = this.elementMargin;
        });

        this.rowMain = __y;


        this.autoplay ? this.autoPlay() : null;
        this.autoplayHoverPause ? this.stopOnHover() : false;
        this.dotsContainer ? this.dots() : null;
        this.allowDrag ? this.drag() : null;
        this.allowKeyDirection ? this.keyDirection() : null;
        this.prevBtn ? this.prevBtn.addEventListener('click',() => this.prev()) : null
        this.nextBtn ? this.nextBtn.addEventListener('click',() => this.next()) : null
    }
    autoPlay() {
        this.__autoplayId = setInterval(() => {
            this.next();
        },this.timeout);
    }
    toIndex(_i) {
        this.rowMain.style.transition = `${this.autoplaySpeed} ease-in`;
        this.rowMain.style.transform = this.slideDirection.includes('horizontal') ? `translate3d(-${_i * this.elementWidth}px,0px,0px)` : `translate3d(0px,-${_i * 100}%,0px)`;
        this.rowMain.setAttribute(DATA_VISIBLE,_i);

        this.dotsBgColor();
    }
    prev() {
        this.___i = this.___i > 0 ? this.___i - 1 : this.___.length - 1
        this.toIndex(this.___i);
        this.dotsBgColor();
    }
    next() {
        this.___i = this.___i < this.___.length - 1 ? this.___i + 1 : 0 ;
        this.toIndex(this.___i);
        this.dotsBgColor();
    }
    drag() {
        this.__.addEventListener('drag',(e) => {
            let _x = e.pageX;
            _x !== 0 ? this.toIndex(_x/1000) : false;
        });
        this.__.addEventListener('dragend',(e) => {
            let _x = e.pageX,_m = this.elementWidth/2;
            _x < _m ? this.prev() : this.next();
        });
    }
    keyDirection() {
        this.__.addEventListener('keyup', (e) => {

            switch (e.code) {
                case 'ArrowRight': this.next()
                    break
                case 'ArrowLeft': this.prev()
                    break
            }
        })
    }
    touchmove() {
        this.__.addEventListener('touchmove',(e) => {
            let _x = e.pageX;
            _x !== 0 ? this.toIndex(_x/1000) : false;
        });
    }
    stopOnHover() {
        this.__.addEventListener('mouseenter',() => {
            clearInterval(this.__autoplayId);
        });
        this.__.addEventListener('mouseleave',() => {
            //this.next();
            this.autoPlay();
        });
    }
    dots() {
        this.dotsContainer.classList.add('fv-carousel-dots');
        let _m = document.createElement(DIV_NODE);
        _m.classList.add('fv-carousel-dots-group',`direction-${this.dotsDirection}`)
        this.___.forEach((item,i) => {
            let _d = document.createElement(DIV_NODE);
            _d.classList.add(DOT_CLASS);
            _d.setAttribute(DATA_POSITION,i);
            i === 0? _d.classList.add('fv-dot-active') : _d.classList.add('fv-dot-inactive');
            _m.appendChild(_d);

            _d.addEventListener('click', () => {
                this.toIndex(i) ;
                this.___i = i;
            });

        });
        this.dotsContainer.appendChild(_m);
    }
    dotsBgColor() {
        if (this.dotsContainer) {
            let _d = this.dotsContainer.querySelectorAll(`.${DOT_CLASS}`);
            _d.forEach((item,_i) => {
                let __i = parseInt(this.rowMain.getAttribute(DATA_VISIBLE));
                let _c = __i === _i ? 'active' : 'inactive';
                item.setAttribute('class',`${DOT_CLASS} fv-dot-${_c}`);
            })
        }
    }
}

window.FvCarousel = FvCarousel;