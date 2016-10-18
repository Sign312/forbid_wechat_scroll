var overscroll = function (els) {
    for (var i = 0; i < els.length; ++i) {
        var el = els[i];
        el.addEventListener('touchstart', function () {
            var top = this.scrollTop
                , totalScroll = this.scrollHeight
                , currentScroll = top + this.offsetHeight;
            //If we're at the top or the bottom of the containers
            //scroll, push up or down one pixel.
            //
            //this prevents the scroll from "passing through" to
            //the body.
            if (top === 0) {
                this.scrollTop = 1;
            } else if (currentScroll === totalScroll) {
                this.scrollTop = top - 1;
            }
        });
        el.addEventListener('touchmove', function (evt) {
            //if the content is actually scrollable, i.e. the content is long enough
            //that scrolling can occur
            if (this.offsetHeight < this.scrollHeight)
                evt._isScroller = true;
        });
    }
};

//禁止body的滚动事件
document.body.addEventListener('touchmove', function (evt) {
    //In this case, the default behavior is scrolling the body, which
    //would result in an overflow.  Since we don't want that, we preventDefault.
    if (!evt._isScroller) {
        evt.preventDefault();
    }
});

//给class为.scroll的元素加上自定义的滚动事件
overscroll(document.querySelectorAll('.scroll'));