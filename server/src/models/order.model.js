import crypto from "crypto";

let ordersCollection = [];

// Crear una orden
export const createOrder = (coffee, userId) => {
  const newOrder = {
    id: crypto.randomUUID().toString(),
    coffee,
    userId,
  };

  ordersCollection.push(newOrder);

  return newOrder;
};

export const getOrders = (userId) => {
  return ordersCollection.filter((coffee) => coffee.userId === userId);
};

export const getOrderById = (id, userId) => {
  return (
    ordersCollection.find(
      (order) => order.id === id && order.userId === userId
    ) || null
  );
};

export const deleteOrderById = (id, userId) => {
  const orderIndex = ordersCollection.findIndex(
    (order) => order.id === id && order.userId === userId
  );
  if (orderIndex !== -1) {
    const [deletedOrder] = ordersCollection.splice(orderIndex, 1);
    return deletedOrder;
  }
  return null;
};
