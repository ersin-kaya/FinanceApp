import { Link } from "react-router-dom";
import "./Navbar.css";

interface Props { }

const Navbar = (props: Props) => {
    return (
        <nav className="relative container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-20">
                    <Link to={"/"}>
                        <img className="h-20" src='./stock.jpg' alt="" />
                    </Link>
                    <div className="hidden font-bold lg:flex">
                        <Link to={"/search"} className="text-black hover:text-darkBlue">
                            Search
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:flex items-center space-x-6 text-back">
                    <div className="hover:text-darkBlue">Login</div>
                    <a
                        href=""
                        className="px-8 py-3 font-bold rounded text-white bg-lightGreen hover:opacity-70"
                    >
                        Signup
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;