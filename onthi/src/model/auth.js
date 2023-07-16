import mongoose from "mongoose";
const authSchema = new mongoose.Schema( {
    name: {
        type: String,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    role: {
        type: String,
        default: "user"
    },

}, { timestamps: true, versionKey: false } )
export default mongoose.model( "Auth", authSchema )