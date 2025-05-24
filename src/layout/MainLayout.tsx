import { Outlet } from "react-router-dom";
import { NavBar } from "../components";

const MainLayout = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-auto fixed top-0 bg-white z-50">
        <NavBar />
      </div>
      <div className="w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
