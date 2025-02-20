import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
    orderId: { type: mongoose.Schema.Types.ObjectId, "ref": "orders", default: "" },
    amount: { type: Number, default: "Paid" },
    status: { type: String, default: "Paid" }
},
    {
        timestamps: true,
        typeCast: true
    }
);

export default mongoose.model('Payment', PaymentSchema);
