// JavaScript Code By Mahmmoud Qasim

window.onload = function () {


    var divnav = document.getElementsByClassName("title-div");
    var div = document.getElementsByClassName("div");
    var x, v;
    x = 0;
    v = NaN;
    while(x < div.length)
    {
        div[x].setAttribute("role", x);
        div[x].addEventListener("mousedown", function (event) {
            v = this.getAttribute("role");
            XX = event.clientX;
            YY = event.clientY;
            div[v].style.cursor = "move";
        });
        div[x].addEventListener("mouseup", function () {
            div[v].style.cursor = "default";
            v = NaN;
            
        });
        x += 1;
    }
    
    window.onmousemove = function(event)
    {
        if (v != NaN)
        {
            div[v].style.position = "absolute";
            div[v].style.zIndex = "500000";
            div[v].style.top = event.clientY - 50;
            div[v].style.left = event.clientX - 120;
        }
    }




}