const mongooese=require('mongoose')

async function connectMongoDb(url){
 return  mongooese.connect(url)
}



module.exports= {
    connectMongoDb
}