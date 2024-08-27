const fs = require("fs");
const http = require("http");
const url =require('url')
const express=require('express')
const app= express();
/*
this is non-blocking operations
 fs.writeFile("log.txt", "this is the file which is created by sheryar amir",(err ,data)=>{
    if(err)throw err;
     console.log("file created successfully");
 })

this is a blocking operations
 fs.writeFileSync("./test.txt","hey this is synchrouns way to create files")
        console.log("this is the the synchronus")

const mYServer = http.createServer((req, res) => {
  //    console.log(req)
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()} : ${req.method} ${req.url} :new request recived on\n`;
  const myUrl=url.parse(req.url,true)
  console.log(myUrl)
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        res.end("homepage");
        break;
      case "/about":
        const username=myUrl.query.muname;
        res.end(`hi, ${username}`)
     
        break;
      case "/contact":
        res.end("this is contact page");
        break;
        
        case"/signup":
       if(req.method==='GET'){
         res.end("this is singup page")};
         break;

        default:
          res.end("404 not found");
    }
  });
});
*/

app.get('/', (req, res)=>{
 return res.send("this is homepage")
})

app.get('/about', (req ,res)=>{

return res.send(`hello from about page `)
})


app.listen(8000, () => console.log(`you server is runnig on the port 8000 `));


// const myServer=http.createServer(app)
// myServer.listen(8000, () =>
// console.log(`you server is runnig on the port 8000 `)
// );
