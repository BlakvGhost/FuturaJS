/*---------------------------------------------------------------------
	UtilsJS v1.0.0 (FuturaJS)
-----------------------------------------------------------------------*/


const DEFAULT_INTERSECTION_OPTION = {
    root: null,
    ratio: 0.2,
    rootMargin: '0px',
    threshold: 0.7,
    timeout: 200,
}
const DATA_INTERSECTION_VISIBLE = `data-fv-visible`;

export default class Utils {

    IntersectionHandler(s= {
        elt: '',
        visible :null,
        invisible: null,
        options: {}
    }){
        const options = s.options ?? DEFAULT_INTERSECTION_OPTION ;

        if(IntersectionObserver){
            function animate(e,obs){
                e.forEach(function(entry){

                    let target = entry.target;

                    if(entry.intersectionRatio > options.ratio){

                        if (!target.hasAttribute(DATA_INTERSECTION_VISIBLE)) {
                            s.visible ? s.visible(target) : false;
                            target.setAttribute(DATA_INTERSECTION_VISIBLE,true);
                        }

                    }else {
                        s.invisible ? s.invisible(target) : false;
                    }
                })
            }
            const observer = new IntersectionObserver(animate, options);
            s.elt.forEach(function(r,i){
                observer.observe(r);
            })
        }
    }
}