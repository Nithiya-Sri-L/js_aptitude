var downDis=prompt("enter the downDis");
var downTime=prompt("enter the downTime");
var upDis=prompt("enter the upDis");
var upTime=prompt("enter the upTine");
downDis=parseInt(downDis);
downTime=parseInt(downTime);
upDis=parseInt(upDis);
upTime=parseInt(upTime);
downSpeed=downDis/downTime;
alert(downSpeed);
upSpeed=upDis/upTime;
alert(upSpeed);
stillSpeed=(upSpeed+downSpeed)/2;
alert(stillSpeed);
