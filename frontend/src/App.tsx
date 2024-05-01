import { Outlet } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
