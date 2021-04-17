function setNew(){
    document.getElementById("image1").src = "imgs/img-bg.png";
}
function setOld(){
    document.getElementById("image1").src = "imgs/img1.jpg";
}

var ID = 0;
var sec = 0;
function timing(){
    document.getElementById("op").innerHTML=sec+" seconds";
    sec = sec+1;
}
function start(){
    ID = window.setInterval(timing,1000);
}
function stop(){
    window.clearInterval(ID);
}

function validate(){
    var Num = document.getElementById("num").value;
    var Mal = document.getElementById("mail").value;

    var reg = /^([8]{1})([8]{1})([0]{1})([1]{1})([5-9]{1})(\d{8})$/;
    var rex = /^([a-z 0-9]+)@([a-z 0-9]+).([a-z]{2,5})$/;

    if(reg.test(Num) && rex.test(Mal)){
        alert("Thanks");
        document.getElementById("lbl").innerHTML="Valid";
        document.getElementById("lbl").style.visibility="visible";
        document.getElementById("lbl").style.color="green";   
        return true;
    }
    else{
        document.getElementById("lbl").style.visibility="visible";
        document.getElementById("lbl").style.color="red";
        return false;
    }
}

var opacity = 0;
var intervalID = 0;
function fadeOut(){
    intervalID = setInterval(hide,200);
}
function hide(){
    var img = document.getElementById("image2");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity>0){
        opacity = opacity-0.1;
        img.style.opacity = opacity;
    }
    else{
        clearInterval(intervalID);
    }
}
function fadeIn(){
    intervalID = setInterval(show,200);
}
function show(){
    var img = document.getElementById("image2");
    opacity = Number(window.getComputedStyle(img).getPropertyValue("opacity"));
    if(opacity<1){
        opacity = opacity+0.1;
        img.style.opacity = opacity;
    }
    else{
        clearInterval(intervalID);
    }
}

var width = 100;
var difference = 2;
//var intervalID = 0;
function increase(){
    intervalID  = setInterval(zoomIn,5);
}
function zoomIn(){
    if(document.getElementById("image3").width<200){
        width = width+difference;
        document.getElementById("image3").width=width;
    }
    else{
        clearInterval(intervalID);
    }
}
function decrease(){
    intervalID = setInterval(zoomOut,5);
}
function zoomOut(){
    if(document.getElementById("image3").width>100){
        width = width-difference;
        document.getElementById("image3").width=width;
    }
    else{
        clearInterval(intervalID);
    }
}
function validate2(){
    var username = document.getElementById("uname");
    var password = document.getElementById("pass");
    if(username.value.trim() ==""){
        username.style.border = "solid 2px red";
        document.getElementById("lbluser").style.visibility = "visible";
        return false;
    }
    else if(password.value.trim() ==""){
        password.style.border = "solid 2px red";
        document.getElementById("lblpass").style.visibility = "visible";
        return false;
    }
    else if(password.value.trim().length<5){
        password.style.border = "solid 2px red";
        document.getElementById("lbpass").style.visibility = "visible";
        return false;
    }
    else{
        return true;
    }

}