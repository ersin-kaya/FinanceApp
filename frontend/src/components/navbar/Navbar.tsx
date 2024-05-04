import { Link } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "../../context/useAuth";

interface Props {}

const Navbar = (props: Props) => {
  const { isLoggedIn, user, logout } = useAuth();

  return (
    <nav className="relative container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-20">
          <Link to={"/"}>
            <img className="h-20" src="./stock.jpg" alt="" />
          </Link>
          <div className="hidden font-bold lg:flex">
            <Link to={"/search"} className="text-black hover:text-darkBlue">
              Search
            </Link>
          </div>
        </div>
        {isLoggedIn() ? (
          <div className="flex flex-col md:flex-row items-center space-x-6">
            <div className="py-3 ms-5 max-w-64 truncate hover:text-darkBlue">
              Welcome, {user?.userName}
            </div>
            <a
              onClick={logout}
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Logout
            </a>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center space-x-6">
            <Link to="/login" className="py-3 ms-5 hover:text-darkBlue">
              Login
            </Link>
            <Link
              to="/register"
              className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
