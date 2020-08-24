window.onload = function () {
  //视频窗口显示
    var vediosBtn = document.getElementsByClassName("broadcast-btn");
    var vedioArea = document.getElementById("vedio")
    for(var i = 0;i<vediosBtn.length;i++) {
      vediosBtn[i].addEventListener("click",() => vedioArea.style.cssText = 'display:block' )
    }
}
    //根据设备宽度跳转
    window.onresize = function(){
     var buyBtn = document.getElementById("buyBtn");
     var  BWidth = document.body.clientWidth;
     if(BWidth < 768){
         buyBtn.href = 'https://school.jin10.com/course/mobile/75'
    }
}

function stop(){
  var vedio = document.getElementById('vedio');
  var videos = document.querySelector('video')
  vedio.style.display = 'none';
  videos.pause()
}

  