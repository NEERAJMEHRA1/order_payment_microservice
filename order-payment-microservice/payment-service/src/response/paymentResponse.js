
class paymentResponse {
    constructor(instant) {
        this.paymentId = instant._id ? instant._id : '';
        this.orderId = instant.orderId ? instant.orderId : '';
        this.amount = instant.amount ? instant.amount : 0;
        this.createdAt = instant.createdAt ? instant.createdAt : '';
    }
};

export default paymentResponse;