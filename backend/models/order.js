const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
    _id:String,
    productId:String,
    userId:String,
    price:Number,
    quantity:Number,
    createdDate:Date,
});

const Order=mongoose.model("Order",orderSchema);
module.exports=Order;