import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  );
};

export default Main;
