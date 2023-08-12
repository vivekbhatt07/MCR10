import React, { useState } from "react";
import {
  ContainedActionBtn,
  Filter,
  ModalProvider,
  PageContainer,
  Form,
} from "../../Components";
import { useData } from "../../Context";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const Product = () => {
  const { state, filteredList } = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <PageContainer>
      <div className="flex flex-col gap-6 h-[98vh]">
        <div className="flex justify-between gap-3 w-full">
          <h1 className="text-3xl">Products</h1>
          <Filter />
          <ModalProvider
            modalTitle="ADD NEW PRODUCT"
            isOpen={isModalOpen}
            closeModal={closeModal}
            modalBtnVariant={
              <ContainedActionBtn handleClick={openModal}>
                New
              </ContainedActionBtn>
            }
          >
            <Form closeModal={closeModal} />
          </ModalProvider>
        </div>
        <TableContainer component={Paper} sx={{ height: "90vh" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Stock</TableCell>
                <TableCell align="center">Supplier</TableCell>
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
                  <TableCell align="center">
                    <Link to={`/products/${currentInventory.id}`}>
                      {currentInventory.name}
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    {currentInventory.description}
                  </TableCell>
                  <TableCell align="center">{currentInventory.price}</TableCell>
                  <TableCell align="center">{currentInventory.stock}</TableCell>
                  <TableCell align="center">
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
