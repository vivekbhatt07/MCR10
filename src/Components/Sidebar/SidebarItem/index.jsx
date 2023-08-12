import { NavLink, useLocation } from "react-router-dom";
import { useData } from "../../../Context";

const SidebarItem = (props) => {
  const { label, icon, reach } = props;
  const { state, dispatch } = useData();

  const location = useLocation();
  // console.log(location.pathname);
  return (
    <div className="">
      <NavLink
        to={reach}
        className="flex items-center gap-4 py-3 px-4 transition-all duration-500"
        style={({ isActive }) => {
          return {
            color: isActive ? "#fff" : "#000",
            backgroundColor: isActive ? "#292524" : "#d6d3d1",
          };
        }}
        onClick={(e) => {
          dispatch({ type: "RESET_FILTER" });
        }}
      >
        <div>{icon}</div>
        <div className="capitalize">{label}</div>
      </NavLink>
    </div>
  );
};

export default SidebarItem;
