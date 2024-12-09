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

      <div className="flex gap-4 font-bold">
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

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search Here"
          className="border-2 rounded-lg"
        />
        <FaSearch className="text-xl" />
        <CgProfile className="text-xl" />
        <FaRegHeart className="text-xl" />
        <LuShoppingCart className="text-xl" />
      </div>
    </div>
  );
};

export default Navbar;
