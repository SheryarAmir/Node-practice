// const users = require("./MOCK_DATA (1).json");
const express = require("express");
const app = express();
const PORT = 8000;
const fs=require('fs')
// const mongooese=require('mongoose')
const userRouter=require("./Routes/user")

const {connectMongoDb}=require("./connection")
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1")
.then(()=>console.log("mongoDB is Connected"))

const {LogResRes}=require("./Middlewares/index")


//middleware-plugin
app.use(express.urlencoded({extended:false}))
app.use(LogResRes("log.txt"))
  
 

/* 
//Connection
mongooese.connect('mongodb://127.0.0.1:27017/youtube-app-1')
.then(()=>console.log("mongoDB is Connected"))
.catch((err)=>console.log("mongoDB Error" ,err))


//SCHEMA
// const userSchema=new mongooese.Schema({
//   firstName:{
//     type:String,
//     require:true,
//   },
//   LastName:{
//     type:String,

//   },
//   email:{
//     type:String,
//     require:true,
//     unique:true,
//   },
//   jobTitle:{
//     type:String,
   
//   },
//   gender:{
//     type:String,

//   }
// },{timestamps:true})
// const User=mongooese.model('user', userSchema)
//middleware-plugin
app.use(express.urlencoded({extended:false}))

app.use((req, res , next)=>{
  
  fs.appendFile("log.txt", `\n${Date.now()}:${req.ip} :${req.method}: ${req.path} `,(err, data)=>{
    next();
  })
  // req.myUsername=sheryar.dev;
  // console.log("hello from middleware 1")
 // return res.json({msg:"hello from middleware 1"});

});

// app.use((req, res , next)=>{
  // console.log("hello from middleware 2", req.myUsername)
  // return res.json({msg:"hello from middleware 1"});
  // next();
  // });
  





//Routes

//this is server side rendering and the is returen the json format data also we can say that this is a rest API.
app.get("/api/users", async (req, res) => {

  const allDbusers=await User.find({}) //this is how to fetch  data from database of mongodb
  // res.setHeader("myname", "sheryar Amir") 
  // console.log(req.headers)
  return res.json(allDbusers);
});
//this is server side rendering and the is returen the HTML format data .
app.get("/users", async (req, res) => {
  const allDbusers=await User.find({})
  const html = ` <ul>  ${allDbusers
    .map((user) => `<li> \n${user.firstName}-${user.email}</li>`)
    .join("")}  </ul> `;
  res.send(html);
});



//  we can change the path with out the use of the app.route but can do this in line 50.

//to get dynamic path/users from the data we can user :id .
// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     return res.json(user);
//   });

//   app.post("/api/users", (req,res)=>{
// //TOOD:create new users
// res.json({status:"pending"})
//   })

//   app.patch("/api/users/:id", (req,res)=>{
//     //TOOD:edit the user with usng the id
//     res.json({status:"pending"})
//       })
//       app.delete("/api/users/:id", (req,res)=>{
//         //TOOD:delete the user from the data
//         res.json({status:"pending"})
//           })

// in the blow code there we use app.route because the path is using in for every route like get, post, delete ,and path.that why we can use the app.route
app.route("/api/users/:id", )
.get(async (req, res) => {

  const user=await User.findById(req.params.id)//this is the way you can acess by ID directly.
    // const id = Number(req.params.id);
    // const user = allDbusers.find((user) => user.id === id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json(user);
  })

  .patch(async(req, res) => {

    await User.findByIdAndUpdate(req.params.id ,{LastName:'kailbi'})
    //TOOD:edit the user with usng the id
    res.json({ status: "success The id which you give us > we change the user last name is update" });
  })
  .delete(async(req, res) => {
    await User.findByIdAndDelete(req.params.id)
    //TOOD:delete the user with usng the id
    res.json({ status: "success the id which you give us is delete from the database" });
  });


//in this post request we set a user into the data using the middleware-plugin.
  app.post ("/api/users",async (req, res) => {
   
    const body = req.body;
    // console.log("body", body)
    if(!body ||!body.first_name ||!body.last_name ||!body.email ||!body.gender ||!body.job_title){
      return  res.status(400).json({msg:"all fields are require"})
     }
    // users.push({...body, id:users.length+1})
    // fs.writeFile('./MOCK_DATA (1).json',JSON.stringify(users),(err ,data)=>{
    //     return res.status(201).send({ status: "success", id:users.length });
    // })

const result= await User.create({
firstName:body.first_name,
LastName:body.last_name,
email:body.email,
gender:body.gender,
jobTitle:body.job_title,

})

// console.log("result", result)
 
return res.status(201).json({msg:"success"})
});


*/



//Routes for other folder
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`server is running on port :${PORT}`);
});
