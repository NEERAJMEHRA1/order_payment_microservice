import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({
    product: { type: String, default: "" },
    amount: { type: Number, default: 0 },
    status: { type: String, default: "Pending" }
},
    {
        timestamps: true,
        typeCast: true
    }
);

export default mongoose.model('Order', OrderSchema);
