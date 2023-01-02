/*---------------------------------------------------------------------
	TabJS v1.0.0 (FuturaJS)
-----------------------------------------------------------------------*/

/**
 * @class : Tab
 * @classdesc : Easily create your tab panel
 * @site : https://fv.zd.lu
 * @tutorial :
 * @licence : MIT
 * @version : v1.0.0
 */


 const DATA_VALUE = 'data-fv-data';
 const DATA_TARGET = 'data-fv-target';
 const PARENT_CLASS = '.tab-init';
 const TAB_SELECTOR = `[data-fv-toggle='tab']`;
 const CONTENT_SELECTOR = `[role="tabpanel"]`;
 const CONTENT_VISIBLE_CLASS = `show fade active`;
 const TAB_VISIBLE_CLASS = `btn-danger active-tab`;
 const ACTIVE_TAB_CLASS = `active-tab`;
 const TAB_HIDDEN_CLASS = `btn-light`;
  
 export default class Tab {
 
     constructor() {
         this.___ = document.querySelectorAll(TAB_SELECTOR);
         this.begin();
     }
     begin() {
         this.___.forEach(function(elt, y) {
            
            let $_yPT = $(elt).parents(PARENT_CLASS);
            let $_yT = $_yPT.find(elt.getAttribute(DATA_TARGET));
            let $__t = $_yPT.find(TAB_SELECTOR);
            let $__c = $_yPT.find(CONTENT_SELECTOR);

            elt.addEventListener('click', function() {
                if (!$(this).hasClass(ACTIVE_TAB_CLASS)) {
                    $__t.each((_y, _elt) => {$(_elt).removeClass(TAB_VISIBLE_CLASS).addClass(TAB_HIDDEN_CLASS) && $__c.eq(_y).removeClass(CONTENT_VISIBLE_CLASS)});
                    $(this).addClass(TAB_VISIBLE_CLASS).removeClass(TAB_HIDDEN_CLASS);
                    $_yT.addClass(CONTENT_VISIBLE_CLASS);
                }
            })
         })
     }
     
 }
 window.fJs.Tab = Tab;
 new Tab();
 