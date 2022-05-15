window.onload = function() {
    // 头部区域轮播
    var fashion_dot = document.getElementsByClassName('fashion_dot');
    var fashion_box = document.getElementsByClassName('fashion_box');
    var fashion = document.getElementsByClassName('fashion');
    var index = -1;
    var num = -1;
    var flag = 0;
    for (var i = 0; i < fashion_dot.length; i++) {
        // 为每个圆点添加一个num属性
        fashion_dot[i].num = i;
        fashion_dot[i].onclick = function() {
            // 获取点击圆点的索引,并将其设置为index
            index = this.num;
            num = index;
            change_fashion();

        }
    }
    // 改变小圆点样式
    function change_fashion() {

        for (var i = 0; i < fashion_dot.length; i++) {
            fashion_dot[0].style.backgroundColor = "#d3d3d3";
            fashion_dot[0].style.height = "8px";
            fashion_dot[i].style.backgroundColor = "";
            fashion_dot[i].style.height = "";
            // 使其每次点击后其他方框恢复默认样式
            // “”去除内联样式，防止其优先级较高使hover属性无法生效
        }

        fashion_box[0].style.transition = "all 0.6s";
        // 将选中的圆点的背景颜色变为橙色，并改变高度
        fashion_dot[index].style.backgroundColor = "#ea5828";
        fashion_dot[index].style.height = "14px";
        currentLeft = fashion_box[0].offsetLeft - 560 * num;
        console.log(currentLeft);

        console.log(num);
        fashion_box[0].style.transform = "translate(" + currentLeft + "px,0)";
        if (num == fashion_box[0].children.length) {
            console.log(111);
            fashion_box[0].style.transform = "translate(0,0)";
            fashion_box[0].style.transition = "all 0s";
            // fashion_box[0].style.left = "0";
            console.log(fashion_box[0].style.left);

            num = 0;
            index = 0;
        }
        console.log(num);
    };

    autoChange();

    // 自动轮播
    function autoChange() {

        // 开启定时器 
        change = setInterval(function() {


            // 使索引自增
            num++;
            index++;
            // 判断index的值，如到最后一张（与第一张同），圆点切换到第一个
            if (num == fashion_box[0].children.length - 1) {
                index = 0;
            }

            change_fashion();

        }, 2000);


    }
    // 鼠标经过轮播盒子，停止自动轮播
    fashion[0].addEventListener('mouseenter', function() {
            clearInterval(change);
        })
        //鼠标离开盒子，定时器继续
    fashion[0].addEventListener('mouseleave', function() {
        autoChange();
    })


    // trending区域轮播
    var trending_dot = document.getElementsByClassName('trending_dot');
    var trending_box = document.getElementsByClassName('trending_box');
    for (var i = 0; i < trending_dot.length; i++) {
        // 为每个圆点添加一个num属性
        trending_dot[i].num = i;
        trending_dot[i].onclick = function() {
            // 获取点击圆点的索引,并将其设置为index
            index = this.num;
            // console.log(index);
            change_trending();
            animate(trending_box[0], -1000 * index);
        }
    }
    // 改变小圆点样式
    function change_trending() {
        for (var i = 0; i < trending_dot.length; i++) {
            trending_dot[0].style.backgroundColor = "#d3d3d3";
            trending_dot[0].style.width = "8px";
            trending_dot[i].style.backgroundColor = "";
            trending_dot[i].style.width = "";
            // 使其每次点击后其他方框恢复默认样式
            // “”去除内联样式，防止其优先级较高使hover属性无法生效
        }
        // 将选中的圆点的背景颜色变为橙色，并改变宽度
        trending_dot[index].style.backgroundColor = "#ea5828";
        trending_dot[index].style.width = "14px";
    };

    // what's new区域轮播
    var new_loop = document.getElementsByClassName('new_loop');
    var new_pic = document.getElementsByClassName('new_pic');
    for (var i = 0; i < new_loop.length; i++) {
        // 为每个点击标签添加一个num属性
        new_loop[i].num = i;
        new_loop[i].onclick = function() {
            // 获取点击的索引,并将其设置为index
            index = this.num;
            // console.log(index);
            change_new();
        }
    }
    // 改变标签样式
    function change_new() {
        for (var i = 0; i < new_loop.length; i++) {
            new_loop[0].style.color = "#4b5157";
            new_loop[0].className = "new_loop";
            new_loop[i].style.color = "";
            new_loop[i].className = "new_loop";
            // 使其每次点击后其他方框恢复默认样式
            // “”去除内联样式，防止其优先级较高使hover属性无法生效
        }
        // 将点击的标签类名及颜色改变
        new_loop[index].className = "new_loop new_active"
        new_loop[index].style.color = "#ea5828"
        if (index === 0) {
            new_pic[0].className = "new_pic new_pic1 hover_pic";
        } else if (index === 1) {
            new_pic[0].className = "new_pic new_pic2 hover_pic";
        } else if (index === 2) {
            new_pic[0].className = "new_pic new_pic3 hover_pic";
        } else if (index === 3) {
            new_pic[0].className = "new_pic new_pic4 hover_pic";
        } else {
            new_pic[0].className = "new_pic new_pic5 hover_pic";
        }
    };


    // 黑色背景右侧轮播
    var black_loop = document.getElementsByClassName('black_loop');
    var black_box = document.getElementsByClassName('black_box');
    for (var i = 0; i < black_loop.length; i++) {
        // 为每个标签添加一个num属性
        black_loop[i].num = i;
        black_loop[i].onclick = function() {
            // 获取点击标签的索引,并将其设置为index
            index = this.num;
            // console.log(index);
            change_black();
            animate(black_box[0], -index * 300)
        }
    }
    // 改变标签样式
    function change_black() {
        for (var i = 0; i < black_loop.length; i++) {
            black_loop[0].style.color = "#d3d3d3";
            black_loop[0].className = "black_loop gray";
            black_loop[i].style.color = "";
            black_loop[i].className = "black_loop gray";
            // 使其每次点击后其他方框恢复默认样式
            // “”去除内联样式，防止其优先级较高使hover属性无法生效
        }
        // 将选中的标签改变类名及颜色
        black_loop[index].className = "black_loop mod_title"
        black_loop[index].style.color = "#ea5828"

    };

    // 灰色背景轮播
    var gray_dot = document.getElementsByClassName('gray_dot');
    var gray_box = document.getElementsByClassName('gray_box');
    for (var i = 0; i < gray_dot.length; i++) {
        // 为每个圆点添加一个num属性
        gray_dot[i].num = i;
        gray_dot[i].onclick = function() {
            // 获取点击圆点的索引,并将其设置为index
            index = this.num;
            // console.log(index);
            change_gray();
            animate(gray_box[0], -1000 * index);
        }
    }
    // 改变小圆点样式
    function change_gray() {
        for (var i = 0; i < gray_dot.length; i++) {
            gray_dot[0].style.backgroundColor = "#d3d3d3";
            gray_dot[0].style.width = "8px";
            gray_dot[i].style.backgroundColor = "";
            gray_dot[i].style.width = "";
            // 使其每次点击后其他方框恢复默认样式
            // “”去除内联样式，防止其优先级较高使hover属性无法生效
        }
        // 将选中的圆点的背景颜色变为橙色，并改变宽度
        gray_dot[index].style.backgroundColor = "#ea5828";
        gray_dot[index].style.width = "16px";
    };


    //  缓动动画函数
    function animate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            //步长值写到定时器内
            //防止出现小数，需考虑到后退步长为负数
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                if (callback) {
                    callback();
                }
            }
            //将每次加一这个步长改为一个慢慢变小的值
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 10);
    }
}