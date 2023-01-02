/*---------------------------------------------------------------------
	WindowPreloader v1.0.0 (FuturaJS)
-----------------------------------------------------------------------*/


export default class Preloader extends HTMLElement{
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `<div id="WindowPreloader" class="position-fixed top-0 start-0 w-100 modal-backdrop h-100 bg-black">
            <div class="container-fluid position-absolute start-0 top-50">
                <div class="row">
                    <div class="col col-6 m-auto">
                        <div style="height: 120px;width: 120px;" class="royal-preloader-inner overflow-hidden m-auto text-center rounded-circle ">
                            <div class="w-100 h-100 rounded-circle position-relative royal-preloader-spin">
                                <h2 class="text-white-50 m-auto fa-3x oswald-bold royal-preloader-text" style="line-height: 2">0</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        window.onload = () => {
            let i = 0;
            setInterval(() => {
                this.querySelector('.royal-preloader-text').innerText = i;
                i++;
            },50);
            $(this).fadeOut('5000');
        }
    }
}
customElements.define('fv-preloader',Preloader);