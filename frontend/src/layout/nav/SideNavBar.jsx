import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MenuList } from "./MenuList";

const SideNavBar = ({ userRole }) => {
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState("");

  const toggleMenu = (title) => {
    setActiveMenu((prevMenu) => (prevMenu === title ? "" : title));
  };

  const toggleSubMenu = (title) => {
    setActiveSubMenu((prevSubMenu) => (prevSubMenu === title ? "" : title));
  };

  const getMenuItems = () => {
    return MenuList[userRole] || [];
};

  return (
    <div className="dlabnav">
      <ul className="metismenu" id="menu">
        {getMenuItems().map((menuItem, index) => {
          const isActive = activeMenu === menuItem.title;
          const hasSubMenu = menuItem.content && menuItem.content.length > 0;

          return (
            <li key={index} className={isActive ? "mm-active" : ""}>
              {hasSubMenu ? (
                <Link
                  to="#"
                  className="has-arrow"
                  onClick={() => toggleMenu(menuItem.title)}
                >
                  {menuItem.iconStyle}
                  <span className="nav-text">{menuItem.title}</span>
                </Link>
              ) : (
                <Link
                  to={menuItem.to}
                  className={
                    menuItem.to === window.location.pathname ? "mm-active" : ""
                  }
                >
                  {menuItem.iconStyle}
                  <span className="nav-text">{menuItem.title}</span>
                </Link>
              )}

              {hasSubMenu && (
                <Collapse in={isActive}>
                  <ul
                    className="dlabnav-sub"
                    onClick={() => toggleSubMenu(menuItem.title)}
                  >
                    {menuItem.content.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className={activeSubMenu === menuItem.title ? "mm-active" : ""}
                      >
                        <Link
                          to={subItem.to}
                          className={
                            subItem.to === window.location.pathname ? "mm-active" : ""
                          }
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Collapse>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};



export default (SideNavBar);