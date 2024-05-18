import React, { Fragment, useContext, useState } from "react";
/// React router dom
import { Link } from "react-router-dom";
import { ThemeContext } from "../../assets/context/ThemeContext";
import logoTextWhite from '../../assets/images/logo-text-white.png';
import logoWhite from '../../assets/images/logo-white.png';

export function  NavMenuToggle(){
	setTimeout(()=>{	
		let mainwrapper = document.querySelector("#main-wrapper");
		if(mainwrapper.classList.contains('menu-toggle')){
			mainwrapper.classList.remove("menu-toggle");
		}else{
			mainwrapper.classList.add("menu-toggle");
		}
	},200);
}

const NavHeader = ({ userRole }) => {
  const [toggle, setToggle] = useState(false);
  const { navigationHader, openMenuToggle, background } = useContext(
    ThemeContext
  );
  return (
    <div className="nav-header">
      <Link to="/dashboard" className="brand-logo">
        {background.value === "dark" || navigationHader !== "color_1" ? (
			<Fragment>
				<img className="logo-abbr" src={logoWhite} width="57" height="57" alt="logo icon journaly"/>			
				<img className="brand-title" src={logoTextWhite} alt="logo journaly" />
			</Fragment>
        ) : (
			<Fragment>
				<img className="logo-abbr" src={logoWhite} width="57" height="57" alt="logo icon journaly"/>			
				<img className="brand-title" src={logoTextWhite} alt="logo journaly" />
			</Fragment>
        )}
      </Link>

      <div
        className="nav-control"
        onClick={() => {
          setToggle(!toggle);
		  openMenuToggle();
          NavMenuToggle()
        }}
      >
        <div className={`hamburger ${toggle ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
