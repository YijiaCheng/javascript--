/**
 * Created by cyj on 17/7/26.
 */

//创建并动态加载引导图
(function() {
    var start = document.getElementById('start');
    function initStartView() {
        start.style.display = "none";
        start.style.width = "50%";
        start.style.position = "absolute";
        start.style.bottom = "30px";
        start.style.left = "25%";
        start.src = "../res/icon_start.png";
    };
    function initPageView() {
        var pages = [
            "http://img.zcool.cn/community/01f515556d00ba0000004383bb211d.jpg",
            "http://img.zcool.cn/community/014042556d005d0000009fcb58fb08.jpg",
            "http://img.zcool.cn/community/018f50569ccd236ac72537009c8129.gif"
        ];
        var size = pages.length;
        var pageContainer = document.getElementById('pageContainer');
        pageContainer.style.position = "absolute";
        for(var i = 0; i < size; i++) {
            var verImg = document.createElement('img');
            verImg.src = pages[i];
            pageContainer.insertBefore(verImg, pageContainer.childNodes[i]);
        }
        //水平滑动
        Slip(pageContainer, 'x').webapp().end(function() {
            if (this.page === (size - 1)) {
                start.style.display = "block";
            } else {
                start.style.display = "none";
            }
        });
    };
    initStartView();
    initPageView();
})();

function open() {
    console.log("open--->");
    window.location.href='../charge_money/charge_money.html';
}