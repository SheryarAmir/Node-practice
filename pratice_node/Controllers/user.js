const User=require('../Modles/user')


async function hanlerGetAllUsers(req,res){

   
    const allDbusers= await User.find({});
    return res.json(allDbusers);
}

async function hanlerGetUsersById(req,res){
    const user=await User.findById(req.params.id)
    if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      return res.json(user);
}

async function hanlerUpdateUsersById(req,res){
    await User.findByIdAndUpdate(req.params.id ,{LastName:'rastogi'})
    res.json({ status: "success The id which you give us > we change the user last name is update" });
}

async function hanlerDeleteUsersById(req,res){
    await User.findByIdAndDelete(req.params.id)

    res.json({ status: "success the id which you give us is delete from the database" });
}



async function hanlerCreateNewUser(req,res){
    const body = req.body;
    if(!body ||!body.first_name ||!body.last_name ||!body.email ||!body.gender ||!body.job_title){
        return  res.status(400).json({msg:"all fields are require"})
       }
       const result= await User.create({
        firstName:body.first_name,
        LastName:body.last_name,
        email:body.email,
        gender:body.gender,
        jobTitle:body.job_title,
        
        })

        
return res.status(201).json({msg:"success", id:result._id})
}

module.exports={
        hanlerGetAllUsers,
        hanlerGetUsersById,
        hanlerUpdateUsersById,
        hanlerDeleteUsersById,
        hanlerCreateNewUser
}