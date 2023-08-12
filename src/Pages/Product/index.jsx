import React from "react";
import { ContainedActionBtn, Filter, PageContainer } from "../../Components";
import { useData } from "../../Context";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Product = () => {
  const { state, filteredList } = useData();
  return (
    <PageContainer>
      <div className="flex justify-between gap-3 w-full">
        <h1>Product</h1>
        <Filter />
        <ContainedActionBtn>New</ContainedActionBtn>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Image</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Description</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Stock</TableCell>
                <TableCell align="right">Supplier</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredList.map((currentInventory) => (
                <TableRow key={currentInventory.id}>
                  <TableCell component="th" scope="row">
                    <img
                      src={currentInventory.imageUrl}
                      alt={currentInventory.name}
                      className="w-[100px] h-[100px] object-cover"
                    />
                  </TableCell>
                  <TableCell align="right">{currentInventory.name}</TableCell>
                  <TableCell align="right">
                    {currentInventory.description}
                  </TableCell>
                  <TableCell align="right">{currentInventory.price}</TableCell>
                  <TableCell align="right">{currentInventory.stock}</TableCell>
                  <TableCell align="right">
                    {currentInventory.supplier}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </PageContainer>
  );
};

export default Product;