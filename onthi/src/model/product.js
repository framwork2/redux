import mongoose from "mongoose";
const productSchema = new mongoose.Schema( {
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    chitiet: {
        type: String,

    },

    img: {
        type: String,
    },


    categoryId: {
        type: mongoose.Types.ObjectId, ref: "category"
    }
}, { timestamps: true, versionKey: false } )
export default mongoose.model( "product", productSchema )