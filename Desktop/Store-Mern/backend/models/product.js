import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true

    },
    price:{
        type: Number,
        required: true

    },
    image:{
        type: String,
        required: true

    },
    sellerName:{
        type: String,
        required: true

    },
    sellerContact:{
        type: String,
        required: true

    },

}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;