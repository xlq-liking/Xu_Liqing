    window.onscroll = function() {
            // 获取导航栏底部元素
            var nav_bottom = document.getElementsByClassName('nav_bottom');
            // 获取滚动距离
            var distance = document.body.scrollTop || document.documentElement.scrollTop;
            // console.log(distance);
            if (distance > 150) {
                nav_bottom[0].className = "nav_bottom fixed";
            } else {
                nav_bottom[0].className = "nav_bottom";
            }

            // 获取右侧导航栏“回到顶部”的元素
            var toTop = document.getElementsByClassName("toTop");
            // console.log(distance);
            // 当页面滚动到一定高度,回到顶部板块出现
            if (distance >= 500) {
                toTop[0].style.display = "block";
            } else {
                toTop[0].style.display = "none";
            }
            // 点击按钮返回顶部
            toTop[0].addEventListener('click', function() {
                    scrollToTop(window, 0);
                })
                //  缓动动画函数
            function scrollToTop(obj, target) {
                clearInterval(obj.timer);
                obj.timer = setInterval(function() {
                    //步长值写到定时器内
                    //防止出现小数，需考虑到后退步长为负数
                    var step = (target - window.pageYOffset) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    if (window.pageYOffset == target) {
                        clearInterval(obj.timer);
                    }
                    // 监听鼠标滚轮事件
                    window.addEventListener('mousewheel', function(e) {
                            e = e || window.event;
                            // 当点击按钮还未回到顶部时，鼠标滚轮向下滚动，回到顶部事件停止
                            if (e.wheelDelta < 0) {
                                clearInterval(obj.timer);
                            }
                        })
                        //将每次加一这个步长改为一个慢慢变小的值
                        //obj.style.top = window.pageYOffset + step + 'px';
                    window.scroll(0, window.pageYOffset + step);
                }, 15);
            }
        }
        // 获取导航栏底部各个菜单
    var hover1 = document.getElementsByClassName('hover1');
    var hover1_box = document.getElementsByClassName('hover1_box');
    var hidden1 = document.getElementsByClassName('hidden1');
    var hover2 = document.getElementsByClassName('hover2');
    var hidden2_box = document.getElementsByClassName('hidden2_box');
    var hidden2_right = document.getElementsByClassName("hidden2_right");
    var hidden2_menu = document.getElementsByClassName("hidden2_menu");
    var hover4 = document.getElementsByClassName('hover4');
    var hidden4 = document.getElementsByClassName('hidden4');
    var hover6 = document.getElementsByClassName('hover6');
    var hover6_box = document.getElementsByClassName('hover6_box');
    var hidden6 = document.getElementsByClassName('hidden6');
    var hidden6_left_menu = document.getElementsByClassName('hidden6_left_menu');
    var hidden6_left = document.getElementsByClassName('hidden6_left');
    var hidden6_right = document.getElementsByClassName('hidden6_right');
    // 鼠标经过菜单栏显示底部内容

    // 第一个菜单
    hover1[0].addEventListener('mouseenter', function() {
            hover1_box[0].style.display = "block";
            hidden1[0].style.display = "block";
        })
        // 鼠标移出内容盒子消失
    hover1[0].addEventListener('mouseleave', function() {
        hover1_box[0].style.display = "none";
    })
    hidden1[0].addEventListener('mouseleave', function() {
        hidden1[0].style.display = "none";
    })


    // 第二个菜单
    hover2[0].addEventListener('mouseenter', function() {
        // 鼠标经过第二个菜单默认显示第一个子菜单
        hidden2_menu[0].className = "hidden2_menu hidden2_active";
        hidden2_box[0].style.display = "flex";
    })
    hover2[0].addEventListener('mouseleave', function() {
        hidden2_box[0].style.display = "none";
        // 鼠标离开盒子，恢复默认样式
        for (var i = 0; i < hidden2_menu.length; i++) {
            hidden2_menu[i].className = "hidden2_menu";
        }
    })

    for (var i = 0; i < hidden2_menu.length; i++) {
        hidden2_menu[i].num = i;
        hidden2_menu[i].addEventListener('mouseenter', function() {
            index = this.num;
            // console.log(index);
            // 遍历所有菜单，取消其样式
            for (var i = 0; i < hidden2_menu.length; i++) {
                hidden2_right[i].style.display = "none";
                hidden2_menu[i].className = "hidden2_menu";
            }
            // 鼠标经过的子菜单及其对应盒子显示
            hidden2_menu[index].className = "hidden2_active hidden2_menu";
            hidden2_right[index].style.display = "flex";
        })
    }


    // 第四个菜单
    hover4[0].addEventListener('mouseenter', function() {
            hidden4[0].style.display = "flex";
        })
        // 鼠标移出内容盒子消失
    hover4[0].addEventListener('mouseleave', function() {
        hidden4[0].style.display = "none";
    })
    hidden4[0].addEventListener('mouseleave', function() {
        hidden4[0].style.display = "none";
    })

    // 第六个菜单
    hover6[0].addEventListener('mouseenter', function() {
            hover6_box[0].style.display = "block";
            hidden6_left_menu[0].style.display = "block";
        })
        // 鼠标移出内容盒子消失
    hover6[0].addEventListener('mouseleave', function() {
        hover6_box[0].style.display = "none";
        for (var i = 0; i < hidden6_right.length; i++) {
            hidden6_right[i].style.display = "none";
        }
    })

    for (var i = 0; i < hidden6_left.length; i++) {
        hidden6_left[i].num = i;
        hidden6_left[i].addEventListener('mouseenter', function() {
            index = this.num;
            // console.log(index);
            // 遍历所有菜单，取消其样式
            for (var i = 0; i < hidden2_menu.length; i++) {
                hidden6_right[i].style.display = "none";
            }
            // 鼠标经过的子菜单及其对应盒子显示
            hidden6_right[index].style.display = "block";
        })
    }