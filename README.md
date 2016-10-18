# forbid_wechat_scroll
禁止微信浏览器下拉滑动

解决思路：

1 先禁止body的滚动事件

2 再给需要scroll的元素加上自定义的滚动事件

注：加入此代码后要给需要scroll的元素加上.scroll的class