window.onload=function (){
    var getUl=document.getElementById('ul');               //获取整个无序列表
    var turnLeft=document.getElementById('left');          //获取按钮
    var turnRight=document.getElementById('right');
    var getLi=document.getElementsByTagName('li');
    var lenGth=getLi[0].offsetWidth+6;
    //alert(lenGth);
    getUl.innerHTML+=getUl.innerHTML;
    //alert(getLi[0].offsetWidth);
    var timer1=timer2=null;
    function moveLeft(){
        if(getUl.offsetLeft<-lenGth*5){     
            getUl.style.left=-lenGth+'px';                   //复位
        }                             
        getUl.style.left=getUl.offsetLeft-1+'px';
    }
    function moveRight(){
        if(getUl.offsetLeft>0){                    
            getUl.style.left=-lenGth*4+'px';    //复位
        }
        getUl.style.left=getUl.offsetLeft+1+'px';
    }

    
    //按住向左移动
    turnLeft.onmousedown=function(){
        timer1=setInterval(moveLeft,10);
    }
    turnLeft.onmouseup=function(){
        clearInterval(timer1);
    }

    //按住向右移动
    turnRight.onmousedown=function(){
        timer2=setInterval(moveRight,10);
    }
    turnRight.onmouseup=function(){
        clearInterval(timer2);
    }

    //alert(getUl.offsetLeft);
}