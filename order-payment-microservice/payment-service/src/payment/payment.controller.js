import Payment from '../models/payment.js';
import axios from 'axios';

/**
 * @Method method used tp process payment
 * @param {*} req 
 * @param {*} res 
 * @date 20-FEB-2025
 */
const processPayment = async (req, res) => {
    try {
        const { orderId, amount } = req.body;

        const newPayment = new Payment({ orderId, amount });
        await newPayment.save();
        console.log("innnn")
        // Update Order Status
        await fetch(`http://order-service:3000/orders/${orderId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: "Paid" })
        });

        return res.status(200).send({
            status: true,
            message: "Payment successful",
            payment: newPayment
        });
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: error.message,
        });
    }
};

export default processPayment