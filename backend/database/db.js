const mongoose=require("mongoose");
const uri="mongodb+srv://mongodb:1@ecommerce.f7gvi.mongodb.net/?retryWrites=true&w=majority&appName=ECommerce";

const connection=()=>{
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("MongoDb connection successfull"))
    .catch((err)=>console.log("Connection Failed: "+err.message));
}

module.exports=connection;