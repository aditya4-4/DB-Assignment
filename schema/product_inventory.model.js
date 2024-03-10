import mongoose from "mongoose";

const inventorySchema = mongoose.Schema({
    quantity : {type : Number, required : true},
    created_at: { type: Date, default: Date.now },
    modified_at: { type: Date, default: Date.now },
    deleted_at: { type: Date }
})

const product_inventory = mongoose.model("product_inventory", inventorySchema);

export {product_inventory}