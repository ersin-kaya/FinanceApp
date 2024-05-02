import { Outlet } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/useAuth";

function App() {
  return (
    <UserProvider>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </UserProvider>
  );
}

export default App;
