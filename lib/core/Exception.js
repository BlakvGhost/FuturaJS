/*---------------------------------------------------------------------
	Exception v1.0.0 (FuturaJS)
-----------------------------------------------------------------------*/

/**
 * @Type : Module
 * @Description : Manage site exceptions
 * @Project : FriedJS
 * @foundation : Fried Foundation | (c) JS Foundation and other contributors
 * @website : 
 * @license : MIT
 * @version : v1.0.0
 * @contributors : ...
 */

export default class Exception{
    constructor(message) {
        let messageHeader = '---------- FuturaJs -----------\n \n \t AN ERROR WAS OCCURRED\n\n', messageBody = 'File : \nMessage : ' + message + '\nLine : \n \n \n', messageFooter = 'Visit web site for help -> https://js.futura-vision.com';
        console.error(messageHeader + messageBody + messageFooter);
        document
    }
}

window.fJs = window.fJs ?? {};
window.fJs.Exception = Exception;