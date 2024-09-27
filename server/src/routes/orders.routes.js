import { Router } from "express";
import {
  createOrderCtrl,
  getOrdersCtrl,
} from "../controllers/order.controller.js";
import { validateJwt } from "../middlewares/validateJwt.js";
import { createOrderValidation } from "../validations/orders.validations.js";
import { applyValidations } from "../validations/apply.validations.js";

const ordersRouter = Router();

ordersRouter.post(
  "/orders",
  validateJwt,
  createOrderValidation,
  applyValidations,
  createOrderCtrl
);
ordersRouter.get("/orders", validateJwt, getOrdersCtrl);

export { ordersRouter };
