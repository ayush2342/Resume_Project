"use script";

// NavbarLink Clicked Scroll
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

// Skill Scroll
var progressContainer=document.getElementById("skills-container");
var skillBars=document.querySelectorAll(".skill-progress > div");

window.addEventListener("scroll",checkScroll);
var animationsDone=false;



function initialWidth()
{
    for(let bar of skillBars)
    {
           bar.style.width=0+"%";
    }
    
}

initialWidth();

function fillbars()
{
    for(let bar of skillBars)
    {
        let maxWidth=bar.getAttribute("data-bar-width");
        let currWidth=0;
        let interval=setInterval(function()
        {
            if(currWidth>maxWidth)
            {
                clearInterval(interval);
            }
            currWidth++;
            bar.style.width=currWidth+"%";

        },15);
           
    }
}




function checkScroll()
{
    var cord=progressContainer.getBoundingClientRect();
    if(!animationsDone&&cord.top<=window.innerHeight)
    {
        animationsDone=true;
        fillbars();
    }
    else if(cord.top>window.innerHeight)
    {
        animationsDone=false;
        initialWidth();
    }
   
}




