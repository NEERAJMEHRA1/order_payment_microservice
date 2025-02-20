
class orderResponse {
    constructor(instant) {
        console.log(instant)
        this.orderId = instant._id ? instant._id : '';
        this.order = instant.product ? instant.product : "";
        this.amount = instant.amount ? instant.amount : 0;
        this.createdAt = instant.createdAt ? instant.createdAt : '';
    }
};

export default orderResponse;