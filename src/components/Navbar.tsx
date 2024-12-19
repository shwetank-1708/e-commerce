import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around p-4 text-lg">
      <div>
        <img src={logo} className="w-[70px]" />
      </div>

      <div className="flex gap-4 font-bold text-gray-500">
        <NavLink to="/">
          <p className="hover:text-gray-600">Home</p>
        </NavLink>
        <NavLink to="/men">
          <p className="hover:text-gray-600">Men</p>
        </NavLink>
        <NavLink to="/women">
          <p className="hover:text-gray-600">Women</p>
        </NavLink>
        <NavLink to="/kids">
          <p className="hover:text-gray-600">Kids</p>
        </NavLink>
        <NavLink to="/about">
          <p className="hover:text-gray-600">About Us</p>
        </NavLink>
        <NavLink to="/contact">
          <p className="hover:text-gray-600">Contact Us</p>
        </NavLink>
      </div>

      <div className="flex items-center gap-2 text-gray-500">
        <div className="flex items-center bg-gray-200 px-2 py-1 rounded-md gap-2">
          <FaSearch className="text-xl cursor-pointer" />
          <input
            type="text"
            placeholder="Search Here"
            className="border-none bg-gray-200 focus:outline-none"
          />
        </div>

        <div className="group relative py-2">
          <div className="cursor-pointer">
            <CgProfile className="text-xl" />
          </div>

          <div>
            <div className="group-hover:block hidden absolute dropdown-menu right-[-60px] mt-2 w-[150px]">
              <div className="flex flex-col bg-gray-300 p-2 rounded-md">
                <NavLink
                  className="hover:text-black cursor-pointer"
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className="hover:text-black cursor-pointer"
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <NavLink to="/wishlist">
          {" "}
          <FaRegHeart className="text-xl" />
        </NavLink>

        <NavLink to="/cart">
          {" "}
          <LuShoppingCart className="text-xl" />
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
