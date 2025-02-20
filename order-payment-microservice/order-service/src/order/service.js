import orderModel from "../models/order.js";

/**
 * @Method Method used for get order data by id
 * @author Neeraj-Mehra
 * @param {*} orderId 
 * @date 20-FEB-2025
 */
export const getOrderById = async (orderId) => {
    try {

        //get order data
        const orderData = await orderModel.findOne({ _id: orderId }).lean();

        return orderData;

    } catch (error) {
        throw new Error(error.message);
    }
};

