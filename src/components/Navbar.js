import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menuService from "../services/menu";

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const menu = await menuService.getByName('primary');
      const menuItems = menu.items.map((item) => ({
        id: item.ID,
        title: item.title,
        slug: item.slug,
        url: item.url,
      }));
      setMenuItems(menuItems);
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
              <>
                {menuItems.map((menuItem) => (
                  <li className="nav-item" key={menuItem.id}>
                    <Link
                      to={menuItem.url}
                      className="nav-link px-lg-3 py-3 py-lg-4"
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
