var myindex=0;
slideshow();

function slideshow() {
    var i;
    var x= document.getElementsByClassName("slideshow");
    for(i=0;i<x.length;i++) {
        x[i].style.display="none";
    }
    myindex++;
    if(myindex > x.length){myindex=1;}
    x[myindex-1].style.display="block";
    setTimeout(slideshow,1000);
    window.onload="slideshow()";
}