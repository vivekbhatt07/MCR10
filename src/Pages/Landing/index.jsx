import React from "react";
import { PageContainer, Card } from "../../Components";
import { useData } from "../../Context";

const Landing = () => {
  const { state } = useData();

  const totalStock = state.inventoryList.reduce((total, currentInventory) => {
    return total + currentInventory.stock;
  }, 0);
  const totalDelivered = state.inventoryList.reduce(
    (total, currentInventory) => {
      return total + currentInventory.delivered;
    },
    0
  );

  const lowStockItems = state.inventoryList.filter((currentInventory) => {
    return currentInventory.stock <= 10;
  }).length;

  return (
    <PageContainer>
      <Card label="Total Stock">{totalStock}</Card>
      <Card label="Total Delivered">{totalDelivered}</Card>
      <Card label="Low Stock Items">{lowStockItems}</Card>
    </PageContainer>
  );
};

export default Landing;
