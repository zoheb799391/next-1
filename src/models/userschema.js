import mongoose from "mongoose";

const UserShema =  new mongoose.Schema({
name: {
    type:String,
    
}

})


const User = mongoose.models.User || mongoose.model("users",UserShema)

export default User