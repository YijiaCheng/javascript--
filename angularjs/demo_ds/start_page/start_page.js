/**
 * Created by cyj on 17/7/26.
 */
//模拟倒计时3秒跳转引导页面
(function() {
    var time = 1 * 1000;
    setTimeout(function() {
        window.location.href='../guide_page/guide_page.html';
    }, time);
})();

//Loading...其他任务的初始化与下载js