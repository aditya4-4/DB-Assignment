import mongoose from "mongoose";

const discountSchema = mongoose.Schema({
    name: { type: String, required: true },
    desc: { type: String },
    discount_percent: { type: Number, required: true },
    active: { type: Boolean, default: true },
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: { type: Date }
})


const discount = mongoose.model("discount",discountSchema);

export {discount};