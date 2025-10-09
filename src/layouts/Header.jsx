import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaAppStore } from "react-icons/fa";
import { MdInstallDesktop } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";

import logo from "../assets/images/logo.png";

import { Link, NavLink } from "react-router-dom";
import Container from "./Container";

const Header = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "inline-flex items-center gap-1 text-blue-400 border-b-2 border-blue-400 pb-1 rounded-none"
              : "inline-flex items-center gap-1 text-gray-700 hover:text-blue-400"
          }
        >
          <IoHomeOutline />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            isActive
              ? "inline-flex items-center gap-1 text-blue-400 border-b-2 border-blue-400 pb-1 rounded-none"
              : "inline-flex items-center gap-1 text-gray-700 hover:text-blue-400"
          }
        >
          <FaAppStore />
          Apps
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/installation"
          className={({ isActive }) =>
            isActive
              ? "inline-flex items-center gap-1 text-blue-400 border-b-2 border-blue-400 pb-1 rounded-none"
              : "inline-flex items-center gap-1 text-gray-700 hover:text-blue-400"
          }
        >
          <MdInstallDesktop />
          Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="bg-base-100 shadow-sm">
      <Container className="">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold text-gray-500"
              >
                {links}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl">
              <img className="w-10 h-10" src={logo} alt="" />
              <span className="text-[#632ee3]">HERO.IO</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <a
              href="https://github.com/rmahfuj-dev/" target="blank"
              className="shine-button text-white btn bg-[linear-gradient(to_bottom_right,_#632EE3_0%,_#9F62F2_100%)]"
            >
              <span className="text-xl">
                <FaGithubSquare />
              </span>
              Contribute
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
