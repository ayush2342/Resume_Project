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

// function initialWidth()
// {
//     for(let bar of skillBars)
//     {
//            bar.style.width=0+"%";
//     }
    
// }

// initialWidth();

// function fillbars()
// {
//     for(let bar of skillBars)
//     {
//         let maxWidth=bar.getAttribute("data-bar-width");
//         let currWidth=0;
//         let interval=setInterval(function()
//         {
//             if(currWidth>maxWidth)
//             {
//                 clearInterval(interval);
//             }
//             currWidth++;
//             bar.style.width=currWidth+"%";

//         },15);
           
//     }
// }

function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of skillBars) {
    initialiseBar(bar);
}

function fillBar(bar)
{

    let maxWidth=bar.getAttribute("data-bar-width");
        let currWidth=0;
        let interval=setInterval(function()
        {
            if(currWidth>=maxWidth)
            {
                clearInterval(interval);
                return;
            }
            currWidth++;
            bar.style.width=currWidth+"%";

        },5);
}


function checkScroll()
{
    for(let i of skillBars)
    {
        let cord=i.getBoundingClientRect();

        if(i.getAttribute("data-visited") == "false"&&cord.top<=window.innerHeight)
        {
            i.setAttribute("data-visited", true);
            fillBar(i);
        }
        else if(cord.top>window.innerHeight)
        {
            i.setAttribute("data-visited", false);
            initialiseBar(i);
        }
    }
    
   
   
}




