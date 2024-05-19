import React from 'react'
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import logoFull from "../../assets/images/logo-full.png";



const NavHome = () => {
	
    return (
        <div className="home-header  justify-content-between">
          <nav className="navbar">
            <div className='navbar-nav header-left'>
                  <Link to={"/"}>
                    <img src={logoFull} alt='logo journaly'/>
                  </Link></div>
            <ul className="navbar-nav header-right ">	
                <li>
                    <Button as="a" variant="primary" href="/chooseUser" className="mt-3">
                      Se connecter
                    </Button>
                </li>
                </ul>
          </nav>
      </div>
     
  )
}

export default NavHome;
