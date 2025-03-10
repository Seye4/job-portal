import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   const { user } = "Ekerin Oluseye";
  const user = {
    firstName: "Oluseye",
    lastName: "Ekerin",
  };

  return (
    <div className="shadow py-4">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <img src={assets.logo} alt="" />
        {user ? (
          <div className="flex items-center gap-3">
            <Link to={"/applications"}> Applied jobs</Link>
            <p>|</p>
            <p>Hi, {user.firstName + " " + user.lastName}</p>
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-sx">
            <button className="text-gray-600">Recruiter Login</button>
            <button onClick={(e) => openSignIn()}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
