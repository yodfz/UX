/**
 * 动效库
 */
import animation from './directory/animation';
let str = ['uxAnimation', '_act'];
export default {
    install (_opt) {
        var $hasTouch = 'ontouchstart' in window;
        let $opt = _opt;
        function end(e){
            var $that = e.target;
            if ($that.className.indexOf('ux-animation') > -1) {
                $that.classList.remove($that.dataset[str[0]] + str[1]);
            }
        }
        // 开启动画监听webkitTransitionEnd
        document.addEventListener('transitionend', end);
        document.addEventListener('webkitTransitionEnd', end);
        document.addEventListener('animationend', end);
        document.addEventListener('webkitAnimationEnd', end);

        document.addEventListener(($hasTouch ? 'touchstart' : 'mousedown'), function (e) {
            var $that = e.target;
            // 判断是否处于diasbled状态
            if ($that.disabled||!$that.dataset[str[0]]) return;
            // 查询是否设置了动效 并且判断状态不处于动效状态中
            if ($that.className.indexOf('ux-animation') == -1) {
                $that.classList.add('ux-animation');
                $that.classList.add($that.dataset[str[0]]);
            }
            // 尝试读取用户是否配置了timeout
            if ($that.className.indexOf($that.dataset[str[0]] + str[1]) === -1) {
                $that.classList.add($that.dataset[str[0]] + str[1]);
            }
        });
    }
};
