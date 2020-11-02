



var i=0;
var txt = 'We think we are creating the system for our own purpose. We believe we are making it in our own image... But the computer is not really like us. It is a projection fo a very slim part of ourselves: the protion devoted to ligic, order, rule, and clarity.';
var speed=50;
function typewrite(){
    if(i<txt.length){
        document.getElementById("demo").innerHTML+=txt.charAt(i);
        i++
        setTimeout(typewrite,speed);
    }
}


function openNav(){
    document.getElementById("mySidepanel").style.width ="250px";
}
function closeNav(){
    document.getElementById("mySidepanel").style.width="0";
}

