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

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "16px",
  };

  return (
    <PageContainer>
      <ul style={gridStyle} className="w-full">
        <Card label="Total Stock" color="green">
          {totalStock}
        </Card>
        <Card label="Total Delivered" color="orange">
          {totalDelivered}
        </Card>
        <Card label="Low Stock Items" color="red">
          {lowStockItems}
        </Card>
      </ul>
    </PageContainer>
  );
};

export default Landing;
