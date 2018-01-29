var i = $("h4[class='time']").length - 1;
var height = (50 * i) + 'px';
// 设置直线初始高度
$(".line").css("height", height);

//设置展开收缩 并更新直线高度
$("h4[class='time']").each(function (index) {
    // 设置鼠标指针样式为手型
    $(this).mouseover(() => {
        $(this).css("cursor", "Pointer");
    });

    $(this).on('click', function () {
        var brother = $(this).next();
        if (brother.is(':visible')) {
            brother.hide();
            computHeight()
        } else {
            brother.show();
            computHeight()
        }

    })
})

// 获取所有li
var lis = $("ul").children();
var allheight = 0;

// 计算并设置直线的高度
function computHeight() {
    lis.each(function (index) {
        if (index != i) {
            allheight += parseInt($(this).height());
        }
    })

    $(".line").css("height", allheight + 'px');
    allheight = 0;
}