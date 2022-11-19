var sp=prompt("enter the sp");
var loss=prompt("enter the loss");
var cp;
sp=parseInt(sp);
loss=parseInt(loss);
var cp=((100/(100-loss))*sp);
alert(cp);