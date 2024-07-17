import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const Links = [
    { name: "Manufacturer", path: "/manufacturer" },
    { name: "Retailer", path: "/retailer" },
    { name: "Customer", path: "/customer" },
    { name: "View All Transactions", path: "/transactions" },
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" onClick={() => navigate("/")}>MediChain</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {Links.map((link) => (
            <li key={link.name}>
              <a onClick={() => navigate(link.path)}>{link.name}</a>
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
