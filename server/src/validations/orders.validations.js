import { body } from "express-validator";

export const createOrderValidation = [
  body("coffee")
    .isString()
    .withMessage("Coffee must be a string")
    .notEmpty()
    .withMessage("Coffee is required")
    .isIn(["Espresso", "Americano", "Cappuccino"])
    .withMessage(
      "Coffee must be one of the following: Espresso, Americano, Cappuccino"
    ),
];
