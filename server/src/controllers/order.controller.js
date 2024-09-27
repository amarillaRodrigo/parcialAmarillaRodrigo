import { createOrder, getOrders } from "../models/order.model.js";

export const createOrderCtrl = (req, res) => {
  const userId = req.user.id;
  const { coffee } = req.body;

  if (!coffee) {
    return res.status(400).json({ message: "Coffee is required" });
  }

  const order = createOrder(coffee, userId);

  res.status(201).json(order);
};

export const getOrdersCtrl = (_req, res) => {
  const orders = getOrders();

  res.status(200).json(orders);
};

export const getOrderCtrl = (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  const order = getOrderById(id, userId);
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.status(200).json(order);
};

export const deleteOrderCtrl = (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  const deletedOrder = deleteOrderById(id, userId);
  if (!deletedOrder) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.status(200).json({ message: "Order deleted successfully", deletedOrder });
};
