import mongoose from "mongoose";
const categorySchema = new mongoose.Schema( {
    name: {
        type: String,
    },
    products: [ {
        type: mongoose.Types.ObjectId, ref: "product"
    } ]
}, { timestamps: true, versionKey: false } )
export default mongoose.model( "category", categorySchema )