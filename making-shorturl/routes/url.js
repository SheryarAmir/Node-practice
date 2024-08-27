
const express=require('express')

const { handlerGenerateNewShortURL}=require('../controllers/url')

const router=express.Router()

router.post("/" ,  handlerGenerateNewShortURL)

router .get('/analytics', j)
module.exports=router