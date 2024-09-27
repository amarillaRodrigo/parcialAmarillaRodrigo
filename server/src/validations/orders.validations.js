import { body } from "express-validator";

export const createOrderValidation = [
  body("coffee")
    .isString()
    .withMessage("Coffee must be a string")
    .notEmpty()
    .withMessage("Coffee is required"),
];
