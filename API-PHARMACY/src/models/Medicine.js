import { Schema, model } from "mongoose";

const medicinesSchemas = new Schema({
    barcode:{
        type:String,
        required : true,
        unique : true
    },
    description:String,
    brand:String,
    ingredient:String,
    price:Number,
    cost :Number,
    stock:Number,
    expiredDate:String
},{
  versionKey: false  
});

export default model ('medicine', medicinesSchemas)