(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.UX = factory());
}(this, (function () { 'use strict';

/**
 * 动效库
 */
var str = ['ux-animation', '_act'];
var index = {
    install: function install(_opt) {
        var $hasTouch = 'ontouchstart' in window;
        var $opt = _opt;
        // 开启动画监听
        document.addEventListener('transitionend', function (e) {
            var $that = e.target;
            $that.classList.remove($that.dataset[str[0]] + str[1]);
        });

        document.addEventListener($hasTouch ? 'touchstart' : 'mousedown', function (e) {
            var $that = e.target;
            // 判断是否处于diasbled状态
            if ($that.disabled) return;
            // 查询是否设置了动效 并且判断状态不处于动效状态中
            // 尝试读取用户是否配置了timeout
            if ($that.dataset[str[0]] && $that.className.indexOf(str[0] + str[1]) === -1) {
                $that.classList.add($that.dataset[str[0]] + str[1]);
            }
        });
    }
};

return index;

})));
