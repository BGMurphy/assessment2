/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/

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
var currentColor = "white";
var hairWidth = hairRange.value;
var eyeWidth = eyeRange.value;
var noseWidth = noseRange.value;
var mouthWidth = mouthRange.value;
var random = document.getElementById("random");
var mtimer = null;
var create = document.getElementById("create");


color.addEventListener("change", function(){
    preview.style.backgroundColor = color.value;
    currentColor = color.value;
});

hairRange.addEventListener("change", function(){
    hair.style.width = hairRange.value + "%";
    hairWidth = hairRange.value;
});

eyeRange.addEventListener("change", function(){
    eyes.style.width = eyeRange.value + "%";
    eyeWidth = eyeRange.value;
});

noseRange.addEventListener("change", function(){
    nose.style.width = noseRange.value + "%";
    noseWidth = noseRange.value;
});

mouthRange.addEventListener("change", function(){
    mouth.style.width = mouthRange.value + "%";
    mouthWidth = mouthRange.value;
});

hair.addEventListener("click", function(){
    hairCounter++
    if(hairCounter >= 4){
        hairCounter = 1;
    };
    hair.src = "img/hair"+hairCounter+".png";
});

eyes.addEventListener("click", function(){
    eyeCounter++
    if(eyeCounter >= 4){
        eyeCounter = 1;
    };
    eyes.src = "img/eyes"+eyeCounter+".png";
});

nose.addEventListener("click", function(){
    noseCounter++
    if(noseCounter >= 4){
        noseCounter = 1;
    };
    nose.src = "img/nose"+noseCounter+".png";
});

mouth.addEventListener("click", function(){
    mouthCounter++
    if(mouthCounter >= 4){
        mouthCounter = 1;
    };
    mouth.src = "img/mouth"+mouthCounter+".png";
});

add.addEventListener("click", function(){
    createFace();
});

random.addEventListener("click", function(){
    randomFace();
    
});

function createFace(){
    var gallery = document.createElement("div");
    var nhair = document.createElement("img");
    var neyes = document.createElement("img");
    var nnose = document.createElement("img");
    var nmouth = document.createElement("img");
    
    gallery.id = "galleryImage";
    gallery.className = "col-xl-1 col-lg-3 col-md-4 col-sm-12";
    nhair.className = "items";
    neyes.className = "items";
    nnose.className = "items";
    nmouth.className = "items";
    
    gallery.style.backgroundColor = currentColor;
    gallery.style.position = "relative";
    nhair.style.width = hairWidth + "%";
    neyes.style.width = eyeWidth + "%";
    neyes.style.top = "40%";
    nnose.style.width = noseWidth + "%";
    nnose.style.top = "55%";
    nmouth.style.width = mouthWidth + "%";
    nmouth.style.top = "75%";
    
    nhair.src = "img/hair"+hairCounter+".png";
    neyes.src = "img/eyes"+eyeCounter+".png";
    nnose.src = "img/nose"+noseCounter+".png";
    nmouth.src = "img/mouth"+mouthCounter+".png";
    
    display.appendChild(gallery);
    gallery.appendChild(nhair);
    gallery.appendChild(neyes);
    gallery.appendChild(nnose);
    gallery.appendChild(nmouth);
}

function randomFace(){
    var red = Math.floor((Math.random() * 255) + 0);
    var blue = Math.floor((Math.random() * 255) + 0);
    var green = Math.floor((Math.random() * 255) + 0);
    
    currentColor = "rgb("+red+","+blue+","+green+")";
    hairCounter = Math.floor((Math.random() * 3) + 1);
    eyeCounter = Math.floor((Math.random() * 3) + 1);
    noseCounter = Math.floor((Math.random() * 3) + 1);
    mouthCounter = Math.floor((Math.random() * 3) + 1);
    
    hairWidth = Math.floor((Math.random() * 70) + 0);
    eyeWidth = Math.floor((Math.random() * 40) + 0);
    noseWidth = Math.floor((Math.random() * 30) + 0);
    mouthWidth = Math.floor((Math.random() * 35) + 0);
    
    preview.style.backgroundColor = currentColor;
    hair.src = "img/hair"+hairCounter+".png";
    eyes.src = "img/eyes"+eyeCounter+".png";
    nose.src = "img/nose"+noseCounter+".png";
    mouth.src = "img/mouth"+mouthCounter+".png";
    
    hair.style.width = hairWidth + "%";
    eyes.style.width = eyeWidth + "%";
    nose.style.width = noseWidth + "%";
    mouth.style.width = mouthWidth + "%";
    
    hairRange.value = hairWidth;
    eyeRange.value = eyeWidth;
    noseRange.value = noseWidth;
    mouthRange.value = mouthWidth;
}

create.addEventListener("click", function(){
    mtimer = setInterval(function(){
        randomFace();
        createFace();
    }, 500);
});

document.getElementById("stop").addEventListener("click", function(){
        clearInterval(mtimer);
});









