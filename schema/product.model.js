import mongoose from "mongoose";


const productSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        desc: { type: String },
        SKU: { type: String, required: true },
        category_id: { type: Schema.Types.ObjectId, ref: 'product_category', required : true },
        inventory_id: { type: Schema.Types.ObjectId, ref: 'product_inventory' },
        price: { type: Number, required: true },
        discount_id: { type: Schema.Types.ObjectId, ref: 'discount' },
        created_at: { type: Date, default: Date.now },
        modified_at: { type: Date, default: Date.now },
        deleted_at: { type: Date }
    }
)

const product = mongoose.model("product", productSchema);
export default {product};