import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menuService from "../services/menu";

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
        const menus = await menuService.getAll();
        if (menus && menus.length > 0 && menus[0].items && menus[0].items.length > 0) {
          const menuItems = menus[0].items.map(item => ({
            id: item.ID,
            title: item.title,
            url: item.url
          }));
          setMenuItems(menuItems);
        } else {
          setMenuItems([]);
        }
      };
     
    fetchMenuItems();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to="/">
          Start Bootstrap
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ms-auto py-4 py-lg-0">
            {menuItems && (
              <ul>
                {menuItems.map((menuItem) => (
                  <li key={menuItem.id}>
                    <a href={menuItem.url}>{menuItem.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
