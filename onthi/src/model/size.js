import mongoose from "mongoose";

const sizeSchema = new mongoose.Schema( {
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "product",
    },
    sizeName: {
        type: String,
    },
    quantity: {
        type: Number,
        default: 0,
    },
}, { timestamps: true, versionKey: false } );
export default mongoose.model( "size", sizeSchema )
