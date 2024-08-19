// ==UserScript==
// @name         qq空间点赞
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  自动点击未激活状态的点赞按钮
// @author       ranfey
// @match        *://user.qzone.qq.com/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

function performClicks() {
    var elements = document.querySelectorAll('a.item.qz_like_btn_v3:not(.item-on) i.fui-icon.icon-op-praise');

    if (elements.length > 0) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                if (!element.closest('a.item.qz_like_btn_v3').classList.contains('item-on')) {
                    element.click();
                    console.log(`已点击序号为 ${index} 的元素`);
                }
            }, index * (500 + Math.random() * 2000));
        });
        setTimeout(performClicks, 3000); // 增加了延迟以等待状态更新
    } else {
        console.log('没有可点击的元素，向下滚动页面加载更多内容...');
        window.scrollBy(0, window.innerHeight);
        setTimeout(performClicks, 3000); // 增加了延迟
    }
}

performClicks();

})();