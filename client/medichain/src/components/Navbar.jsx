import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  let Links = [
    
    { name: "Manufacturer", path: "/manufacturer" },
    { name: "Retailer", path: "/retailer" },
    { name: "Customer", path: "/customer" },
    { name: "View All Transactions", path: "/transactions" },
    {name:"Landing",path:'/'},
  ];
  
  return (
    <>
      <div>Navbar</div>
      <div>
        {Links.map((link) => (
          <li key={link.name}>
            <button onClick={navigate(link.path)}>{link.name}</button>
          </li>
        ))}
      </div>
    </>
  );
}

export default Navbar;
