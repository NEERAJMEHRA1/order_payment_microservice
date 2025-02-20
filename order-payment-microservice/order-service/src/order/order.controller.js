import Order from '../models/order.js';
import axios from 'axios';
import orderResponse from "../response/orderResponse.js";
import { getOrderById } from './service.js';

/**
 * @Method method used to create order
 * @param {*} req 
 * @param {*} res 
 * @date 20-FEB-2025
 */
export const createOrder = async (req, res) => {
    try {
        const { product, amount } = req.body;

        if (amount <= 0) {
            return res.status(200).send({
                status: true,
                message: "Invalid amount",

            });
        }

        //save order
        const newOrder = new Order({ product, amount });
        const saveOrder = await newOrder.save();

        if (saveOrder) {
            // Call Payment Service
            const response = await fetch('http://payment-service:3001/payments/processPayment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    orderId: newOrder._id,
                    amount
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Payment Response:", data);

            return res.status(200).send({
                status: true,
                message: "Order created successfully",
                order: new orderResponse(newOrder),
                paymentResponse: data
            });
        } else {

            return res.status(500).send({
                status: false,
                error: "Failed to create order"
            });

        };

    } catch (error) {

        console.log("Error in order create==>> ", error)
        return res.status(500).send({
            status: false,
            error: error.message
        });
    }
};

/**
 * @Method method used to update user order
 * @param {*} req 
 * @param {*} res 
 * @date 20-FEB-2025
 */
export const updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        const updatedOrder = await Order.findByIdAndUpdate(
            orderId,
            { status },
            { new: true }
        );

        if (!updatedOrder) {
            return res.status(404).json({
                status: false,
                message: 'Order not found',
            });
        }

        return res.status(200).json({
            status: true,
            message: 'Order status updated',
            order: new orderResponse(updatedOrder),
        });

    } catch (error) {
        console.error("Error in updateOrderStatus: ", error);
        return res.status(500).json({
            status: false,
            message: error.message,
        });
    }
};

/**
 * @Method Method used to get order details
 * @param {*} req 
 * @param {*} res 
 * @date 20-FEB-2025
 */
export const getOrderDetail = async (req, res) => {
    try {

        const orderId = req.query.orderId;

        console.log("Order id===>>> ", orderId);

        //get order data by id
        const getOrderData = await getOrderById(orderId);

        if (getOrderData) {
            return res.send({
                status: true,
                message: "Order detail fetched successfully",
                data: new orderResponse(getOrderData),
            })
        }

        return res.send({
            status: false,
            message: "Data not found",
        });

    } catch (error) {
        return res.send({
            status: false,
            message: error.message
        })
    }
};
