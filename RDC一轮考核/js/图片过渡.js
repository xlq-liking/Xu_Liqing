// 将所有鼠标滑过盒子内的图片会放大所在的盒子命名为hover_box，将图片盒子命名为hover_pic
var hover_box = document.getElementsByClassName('hover_box');
var hover_pic = document.getElementsByClassName('hover_pic');
for (var i = 0; i < hover_box.length; i++) {
    // 遍历所有该类型盒子
    hover_box[i].num = i;
    hover_box[i].onmouseover = function() {
        index = this.num;
        // 过渡效果
        hover_pic[index].style.transition = "all 0.5s";
        // 鼠标经过图片放大
        hover_pic[index].style.transform = "scale(" + 1.08 + ")";
    }
    hover_box[i].onmouseout = function() {
        index = this.num;
        hover_pic[index].style.transform = "scale(" + 1 + ")";
    }
}

// 将所有鼠标滑过盒子内的图片会移动所在的盒子命名为translate_box，将图片盒子命名为translate_pic
var translate_box = document.getElementsByClassName('translate_box');
var translate_pic = document.getElementsByClassName('translate_pic');
for (var i = 0; i < translate_box.length; i++) {
    // 遍历所有该类型盒子
    translate_box[i].num = i;
    translate_box[i].onmouseover = function() {
        index = this.num;
        // 过渡效果
        translate_pic[index].style.transition = "all 1s";
        // 鼠标经过图片移动
        translate_pic[index].style.backgroundPosition = "35% center";
    }
    translate_box[i].onmouseout = function() {
        index = this.num;
        translate_pic[index].style.backgroundPosition = "";
    }
}