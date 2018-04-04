var color = document.getElementById("color");
var preview = document.getElementById("preview");
var range = document.getElementById("range");
var number = document.getElementById("number");
var hairRange = document.getElementById("hairRange");
var eyeRange = document.getElementById("eyeRange");
var noseRange = document.getElementById("noseRange");
var mouthRange = document.getElementById("mouthRange");
var hairCounter = 1;
var eyeCounter = 1;
var noseCounter = 1;
var mouthCounter = 1;
var add = document.getElementById("add");
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

number.addEventListener("click", function(){
    changeType("number");
});

range.addEventListener("click", function(){
    changeType("range");
});

function changeType(type){
    hairRange.type = type;
    eyeRange.type = type;
    noseRange.type = type;
    mouthRange.type = type;
};


































