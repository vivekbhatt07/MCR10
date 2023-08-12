import React from "react";
import { PageContainer, SecondCard } from "../../Components";

const Department = () => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "16px",
  };
  return (
    <PageContainer className="">
      <ul style={gridStyle}>
        <SecondCard label="Kitchen">Kitchen</SecondCard>
        <SecondCard label="Clothing">Clothing</SecondCard>
        <SecondCard label="Toys">Toys</SecondCard>
      </ul>
    </PageContainer>
  );
};

export default Department;
