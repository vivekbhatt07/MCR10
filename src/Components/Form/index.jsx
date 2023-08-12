import { ContainedActionBtn } from "../Actions";
import TextInput from "../TextInput";
import TextInputLabel from "../TextInputLabel";

const Form = () => {
  return (
    <form className="p-4 flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <TextInputLabel labelText="Department:">
          <select
            defaultValue=""
            //   value={state.category}
            className="border px-2 py-1"
            //   onChange={(e) => {
            //     dispatch({ type: "FILTER_BY_CATEGORY", payload: e.target.value });
            //   }}
          >
            <option value="">All Departments</option>
            <option value="Clothing">Clothing</option>
            <option value="Toys">Toys</option>
            <option value="Kitchen">Kitchen</option>
          </select>
        </TextInputLabel>

        <TextInputLabel labelText="Name:">
          <TextInput />
        </TextInputLabel>

        <TextInputLabel labelText="Description:">
          <textarea />
        </TextInputLabel>
        <div className="flex gap-2">
          <TextInputLabel labelText="Price:">
            <TextInput />
          </TextInputLabel>
          <TextInputLabel labelText="Stock:">
            <TextInput />
          </TextInputLabel>
          <TextInputLabel labelText="SKU:">
            <TextInput />
          </TextInputLabel>
        </div>

        <TextInputLabel labelText="Supplier:">
          <TextInput />
        </TextInputLabel>
        <TextInputLabel labelText="Delivered:">
          <TextInput />
        </TextInputLabel>
        <TextInputLabel labelText="Image URL:">
          <TextInput />
        </TextInputLabel>
      </div>
      <ContainedActionBtn>ADD PRODUCT</ContainedActionBtn>
    </form>
  );
};

export default Form;
