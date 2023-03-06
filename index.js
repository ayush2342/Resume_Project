// const http= require('http')
// const port=8090;
// const fs= require('fs');


// function loadPages(request,response)
// {
//    response.writeHead(200,{'content-type':'text/html'});
//    let fetchURL;
//     switch(request.url)
//     {
//         case '/':
//             fetchURL='./Resume.html'
//             break;
//         case '/Resume':
//             fetchURL='./Resume.html'
//             break;
//         default:
//             fetchURL='./404.html'
//     }

//     fs.readFile(fetchURL,function(error,data)
//     {
//         if(error)
//         {
//             console.log(error);
//             response.end("Oops Error Occured");
//             return;
//         }
        
//         return response.end(data);
//     })
// }
// const server=http.createServer(loadPages);

// server.listen(port,function(error)
// {
//     if(error)
//     {
//         console.log(error);
//         return;
//     }
    
//     console.log("Server is up and Running")
// })

const express = require('express');
const { dirname } = require('path');
const path = require('path');

const port = 8090;
const app= express();

app.set('view engine','ejs');
app.set('views',__dirname)


app.use(express.static('assets'));
app.use(function(req,res,next)
{
    if(req.url!='/')
    {
        res.render('404')
    }
     next();
})

app.get('/',function(req,res)
{
    res.render('Resume');
})

app.listen(port,function(error)
{
    if(error)
    {
        console.log("Error occured :",error);
        return;
    }

    console.log("Server is up and Running");
})