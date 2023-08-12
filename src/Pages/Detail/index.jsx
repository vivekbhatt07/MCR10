import { useParams } from "react-router-dom";
import { PageContainer } from "../../Components";
import { useData } from "../../Context";

const Detail = () => {
  const { productId } = useParams();
  const { state, dispatch } = useData();

  const getProduct = state.inventoryList.find((currentInventory) => {
    return currentInventory.id == productId;
  });
  console.log(getProduct);
  return (
    <PageContainer>
      <div>
        <h1 className="text-3xl">{getProduct.name}</h1>
        <div>
          <img
            src={getProduct.imageUrl}
            alt={getProduct.name}
            className="w-[200px] h-[200px] object-cover"
          />
        </div>
        <div className="flex flex-col gap-3">
          <p className="flex gap-2">
            <strong>Department:</strong>
            <span>{getProduct.department}</span>
          </p>
          <p className="flex gap-2">
            <strong>Price:</strong>
            <span>{getProduct.price}</span>
          </p>
          <p className="flex gap-2">
            <strong>Stock:</strong>
            <span>{getProduct.stock}</span>
          </p>
          <p className="flex gap-2">
            <strong>SKU:</strong>
            <span>{getProduct.sku}</span>
          </p>
          <p className="flex gap-2">
            <strong>SKU:</strong>
            <span>{getProduct.sku}</span>
          </p>
          <p className="flex gap-2">
            <strong>Supplier:</strong>
            <span>{getProduct.supplier}</span>
          </p>
          <p className="flex gap-2">
            <strong>Delivered:</strong>
            <span>{getProduct.delivered}</span>
          </p>
        </div>
      </div>
    </PageContainer>
  );
};

export default Detail;
