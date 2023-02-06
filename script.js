"use script";

var anchorTags=document.querySelectorAll(".nav-menu a");

var currPosition=0;
var destiPosition;
var ScrollInterval;

for(var i=0;i<anchorTags.length;i++)
{

anchorTags[i].addEventListener("click",function Scroll(event){
event.preventDefault();
var targetSection = this.innerHTML.trim().toLowerCase();


var targetElement=document.getElementById(targetSection);
destiPosition=targetElement.getBoundingClientRect().y;
ScrollInterval= setInterval(IntervalHandler,50,destiPosition);

// Another way
//  ScrollInterval= setInterval(function()
//  {
//     IntervalHandler(destiPosition);
//  },50);

})
}

function IntervalHandler()
{
    if(currPosition>=destiPosition)
    {
        currPosition=0;
        clearInterval(ScrollInterval);
    }
   window.scrollBy(0,100);
   currPosition+=100;
}




