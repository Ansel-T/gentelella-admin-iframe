$(function () {
    /* 初始化后台iframe */
    $('#mainFrameTabs').bTabs({
    });
    $('a',$('#menuSideBar')).on('click', function(e) {
        e.stopPropagation();
        var li = $(this).closest('li');
        var menuId = $(li).attr('mid');
        var url = $(li).attr('funurl');
        var title = $(this).text();
        $('#mainFrameTabs').bTabsAdd(menuId,title,url);
        // $('#mainFrameTabs').bTabsAdd(123,'用户管理','http://www.kgc.cn/');
    });

    window.tools = {
        getOuterJq:getOuterJq,
        iframeReload:iframeReload
    };

    /**javascript:;
     * 获取iframe 外层jq对象
     * @param className
     * @returns {*}
     */
    function getOuterJq (className){
        if(!className) return;
        var win = window.parent.$;
        return win(className);
    }

    /**
     * 刷新iframe
     * @param id iframe唯一父元素id
     * @param level sibling:刷新兄弟iframe ,parent:窗口，默认：当前
     */
    function iframeReload(level,id){
        if(level ==="sibling" && !id) return;
        var win = window;
        if(level === 'sibling'){
            win = getOuterJq('#bTabs_' + id).find('iframe').get(0).contentWindow;
        }else if(level === 'parent'){
            win = window.parent;
        }
        win.location.reload();
    }
});