import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [user, setUser] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <div className="flex items-center lg:justify-around justify-between p-4 text-lg">
      <div>
        <img src={logo} className="w-[70px]" />
      </div>

      <div className="lg:flex gap-4 font-bold text-gray-500 hidden">
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
              {user ? (
                <div className="flex flex-col bg-gray-300 p-2 rounded-md">
                  <NavLink
                    className="hover:text-black cursor-pointer"
                    to="/login"
                  >
                    Profile
                  </NavLink>
                  <NavLink
                    className="hover:text-black cursor-pointer"
                    to="/signup"
                  >
                    Logout
                  </NavLink>
                </div>
              ) : (
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
              )}
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

        <div className="lg:hidden">
          <TiThMenu
            className="text-xl cursor-pointer"
            onClick={() => setVisible(true)}
          />
        </div>

        <div
          className={`absolute top-0 right-0 bg-white flex flex-col gap-1 items-center overflow-hidden ${
            visible ? "w-full" : "w-0"
          }`}
        >
          <IoClose
            className="cursor-pointer"
            onClick={() => setVisible(false)}
          />
          <NavLink to="/" onClick={() => setVisible(false)}>
            <p className="hover:text-gray-600">Home</p>
          </NavLink>
          <NavLink to="/men" onClick={() => setVisible(false)}>
            <p className="hover:text-gray-600">Men</p>
          </NavLink>
          <NavLink to="/women" onClick={() => setVisible(false)}>
            <p className="hover:text-gray-600">Women</p>
          </NavLink>
          <NavLink to="/kids" onClick={() => setVisible(false)}>
            <p className="hover:text-gray-600">Kids</p>
          </NavLink>
          <NavLink to="/about" onClick={() => setVisible(false)}>
            <p className="hover:text-gray-600">About Us</p>
          </NavLink>
          <NavLink to="/contact" onClick={() => setVisible(false)}>
            <p className="hover:text-gray-600">Contact Us</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
