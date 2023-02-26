var CurScreen=1;//当前显示的图像
var MaxSceen=3;//最多可切换图象数
var timer=null;//定时器变量
function $(id){
    return document.getElementById(id);
}
function switchPic(){//切换图像函数，定时触发
    if(CurScreen==MaxSceen){
        CurScreen=1;
    }else{
        CurScreen++;
    }
    $("pic").src="images/example"+CurScreen+".webp";//更换图像的文件名
}
function reStart(){//重新开始，鼠标移出时触发
    switchPic();
    init();
}
function pause(){//暂停切换，鼠标悬停时触发
    clearInterval(timer);
}
function init(){//初始化函数，在body加载时触发
    timer = setInterval('switchPic();',2000);
}