import { useState } from "react";
import { ContainedActionBtn } from "../Actions";
import TextInput from "../TextInput";
import TextInputLabel from "../TextInputLabel";
import { useData } from "../../Context";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const { dispatch } = useData();
  const [formData, setFormData] = useState({
    productId: uuidv4(),
    departmentType: "",
    productName: "",
    productDescription: "",
    productPrice: "",
    productStock: "",
    productStockingUnit: "",
    productSupplier: "",
    productDelivered: "",
    productImg: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id: formData.productId,
        department: formData.departmentType,
        name: formData.productName,
        description: formData.productDescription,
        price: formData.productPrice,
        stock: formData.productStock,
        sku: formData.productStockingUnit,
        supplier: formData.productSupplier,
        delivered: formData.delivered,
        imageUrl: formData.productImg,
      },
    });
    props.closeModal();
  };

  return (
    <form className="p-4 flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2">
        <TextInputLabel labelText="Department:">
          <select
            defaultValue=""
            className="border px-2 py-1"
            name="departmentType"
            onChange={handleInputChange}
          >
            <option value="">Select Department</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
            <option value="Kitchen">Kitchen</option>
          </select>
        </TextInputLabel>

        <TextInputLabel labelText="Name:">
          <TextInput
            inputType="text"
            inputName="productName"
            inputHandle={handleInputChange}
          />
        </TextInputLabel>

        <TextInputLabel labelText="Description:">
          <textarea
            className="border-1 border-[#ddd]"
            name="productDescription"
            onChange={handleInputChange}
          />
        </TextInputLabel>
        <div className="flex gap-2">
          <TextInputLabel labelText="Price:">
            <TextInput
              inputType="number"
              inputName="productPrice"
              inputHandle={handleInputChange}
            />
          </TextInputLabel>
          <TextInputLabel labelText="Stock:">
            <TextInput
              inputType="number"
              inputName="productStock"
              inputHandle={handleInputChange}
            />
          </TextInputLabel>
          <TextInputLabel labelText="SKU:">
            <TextInput
              inputType="text"
              inputName="productStockingUnit"
              inputHandle={handleInputChange}
            />
          </TextInputLabel>
        </div>

        <TextInputLabel labelText="Supplier:">
          <TextInput
            inputType="text"
            inputName="productSupplier"
            inputHandle={handleInputChange}
          />
        </TextInputLabel>
        <TextInputLabel labelText="Delivered:">
          <TextInput
            inputType="number"
            inputName="productDelivered"
            inputHandle={handleInputChange}
          />
        </TextInputLabel>
        <TextInputLabel labelText="Image URL:">
          <TextInput
            inputType="url"
            inputName="productImg"
            inputHandle={handleInputChange}
          />
        </TextInputLabel>
      </div>
      <ContainedActionBtn>ADD PRODUCT</ContainedActionBtn>
    </form>
  );
};

export default Form;
