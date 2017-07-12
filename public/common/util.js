/**
 * Created by lenovo on 2017/7/11.
 */

const util = {
    preventDefault() {
        if(document.all){ //判断IE浏览器
            window.event.returnValue = false;
        } else{
            event.preventDefault();
        }
    }
};

module.exports = util;