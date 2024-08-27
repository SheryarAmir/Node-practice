const mongooese=require('mongoose')

const userSchema=new mongooese.Schema({
    firstName:{
      type:String,
      require:true,
    },
    LastName:{
      type:String,
  
    },
    email:{
      type:String,
      require:true,
      unique:true,
    },
    jobTitle:{
      type:String,
     
    },
    gender:{
      type:String,
  
    }
  },{timestamps:true})
  const User=mongooese.model('User', userSchema)
module.exports=User