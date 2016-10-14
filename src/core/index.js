/**
 * 动效库
 */
import animation from './directory/animation';
let str = ['ux-animation', '_act'];
export default {
    install (_opt) {
        var $hasTouch = 'ontouchstart' in window;
        let $opt = _opt;
        document.addEventListener(($hasTouch ? 'touchstart' : 'mousedown'), function (e) {
            var $that = e.target;
            // 判断是否处于diasbled状态
            if ($that.disabled) return;
            // 查询是否设置了动效 并且判断状态不处于动效状态中

            // 尝试读取用户是否配置了timeout
            if ($that.dataset[str[0]] && $that.className.indexOf(str[0] + str[1]) === -1) {
                $that.classList.add($that.dataset.animation + str[1]);
                setTimeout(function () {
                    $that.classList.remove($that.dataset.animation + str[1]);
                }, $opt.timeout || 100);
            }
        });
    }
};
