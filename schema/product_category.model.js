import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String },
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: { type: Date }
})

const product_category = mongoose.model("product_category",categorySchema);

export {product_category};