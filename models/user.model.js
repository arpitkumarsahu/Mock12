const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:String,
    description:String,
    category:String,
    image:String,
    location:String,
    date:Number,
    price:Number
})

const UserModel = mongoose.model("user",userSchema)


module.exports={
    UserModel,
    userSchema
}