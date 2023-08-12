import { Link } from "react-router-dom";
import { useData } from "../../Context";

const SecondCard = ({ children, label }) => {
  const { dispatch } = useData();
  // console.log(children);
  return (
    <Link
      className="flex flex-col items-center border-2 p-4 gap-3"
      to="/products"
      onClick={(e) => {
        dispatch({ type: "FILTER_BY_CATEGORY", payload: children });
      }}
    >
      <span>{label}</span>
    </Link>
  );
};

export default SecondCard;
