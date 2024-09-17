import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="fixed bg-orange-200 mt-2 p-4 rounded w-[1500px] flex items-center justify-around ml-2">
        <ul className="flex justify-items-center gap-12">
          <li>
            <Link to={"/"} className="text-2xl hover:text-slate-200">
              Post
            </Link>
          </li>
          <li>
            <Link to={"/newpost"} className="text-2xl hover:text-slate-200">
              New Post
            </Link>
          </li>
          <li>
            <Link to={"/Login"} className="text-2xl hover:text-slate-200">
              Sign In
            </Link>
          </li>
          <li>
            <Link to={"/Register"} className="text-2xl hover:text-slate-200">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
