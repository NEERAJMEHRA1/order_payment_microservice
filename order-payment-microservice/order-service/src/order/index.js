import express from 'express';
import { createOrder, updateOrderStatus, getOrderDetail } from './order.controller.js';

const router = express.Router();

router.post('/createOrder', createOrder);
router.put('/:orderId', updateOrderStatus);
router.get("/getOrderDetail", getOrderDetail);

export default router;
