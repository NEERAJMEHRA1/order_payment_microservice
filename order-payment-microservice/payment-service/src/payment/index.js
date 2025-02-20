import express from 'express';
import processPayment from './payment.controller.js';

const router = express.Router();

router.post('/processPayment', processPayment);
export default router;
