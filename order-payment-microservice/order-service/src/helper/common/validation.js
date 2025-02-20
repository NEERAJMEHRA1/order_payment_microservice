import { body } from "express-validator";

export const validator = (method) => {
    switch (method) {
        case "createOrder": {
            return [
                body("orderName", "Order name is required").not().notEmpty(),
                body("orderPrice", "Order price is required").not().notEmpty(),
                body("orderDescription", "Order description is required").not().notEmpty(),
            ]
        }

        default:
            return "Somethong wan't wrong."
            break;
    }
}