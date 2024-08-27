const express = require("express");
const router = express.Router();
const {
  hanlerGetAllUsers,
  hanlerGetUsersById,
  hanlerUpdateUsersById,
  hanlerDeleteUsersById,
  hanlerCreateNewUser,
} = require('../Controllers/user');

router.route("/").get(hanlerGetAllUsers).post(hanlerCreateNewUser);

// router.get("/", async (req, res) => {

// const allDbusers=await User.find({}) //this is how to fetch  data from database of mongodb
// res.setHeader("myname", "sheryar Amir")
// console.log(req.headers)
// return res.json(allDbusers);
//   });
//   //this is server side rendering and the is returen the HTML format data .
//   router.get("/users", async (req, res) => {
//     const allDbusers=await User.find({})
//     const html = ` <ul>  ${allDbusers
//       .map((user) => `<li> \n${user.firstName}-${user.email}</li>`)
//       .join("")}  </ul> `;
//     res.send(html);
//   });

///////////////////////////////////////////////////THIS IS APP.ROUTER//////////////////////////////////////////////

router
  .route("/:id")
  .get(hanlerGetUsersById)
  // async (req, res) => {

  //   const user=await User.findById(req.params.id)//this is the way you can acess by ID directly.
  //     // const id = Number(req.params.id);
  //     // const user = allDbusers.find((user) => user.id === id);
  //     if (!user) {
  //       return res.status(404).json({ error: "User not found" });
  //     }
  //     return res.json(user);
  //   })

  .patch(hanlerUpdateUsersById)

  // async(req, res) => {

  // await User.findByIdAndUpdate(req.params.id ,{LastName:'kailbi'})
  //TOOD:edit the user with usng the id
  // res.json({ status: "success The id which you give us > we change the user last name is update" });
  //   })
  .delete(hanlerDeleteUsersById);
// async(req, res) => {
// await User.findByIdAndDelete(req.params.id)
//TOOD:delete the user with usng the id
//     res.json({ status: "success the id which you give us is delete from the database" });
//   });

//////////////////////////////////////THIS IS POST WHITOUT USING ROUTER/////////////////////////////

//in this post request we set a user into the data using the middleware-plugin.
// router.post ("/" ,hanlerCreateNewUser)

// ,async (req, res) => {

// const body = req.body;
// console.log("body", body)

// users.push({...body, id:users.length+1})
// fs.writeFile('./MOCK_DATA (1).json',JSON.stringify(users),(err ,data)=>{
//     return res.status(201).send({ status: "success", id:users.length });
// })

// const result= await User.create({
// firstName:body.first_name,
// LastName:body.last_name,
// email:body.email,
// gender:body.gender,
// jobTitle:body.job_title,

// })

// console.log("result", result)

// return res.status(201).json({msg:"success"})
// });

module.exports = router;
