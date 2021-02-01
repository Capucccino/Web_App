var colors = ["white", "grey", "black"];
var colorIndex = 0;
function changeColor() {
    var col = document.getElementById("body");
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
    col.style.backgroundColor = colors[colorIndex];
    colorIndex++;
}

function Remove() {
    var myobj = document.getElementById("demo");
    myobj.remove();
}

function ToUpper() {
    var str = document.getElementById("body").innerHTML;
    var res = str.toUpperCase();
    document.getElementById("body").innerHTML = res;
}

function ToLower() {
    var str = document.getElementById("body").innerHTML;
    var res = str.toLowerCase();
    document.getElementById("body").innerHTML = res;
}

function HelloWorld() {
    document.getElementById("World").innerHTML = "HELLO WORLD!";
}

function playAudio() {
    var x = document.getElementById("myAudio"); 
    x.play();
} 