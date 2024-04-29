import React from 'react'
import { Button } from "react-bootstrap";


const NavHome = () => {
	
    return (
        <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">                
            </div>
            <ul className="navbar-nav header-right ">	
                <li>
                    <Button as="a" variant="primary" href="/chooseUser" className="mt-3">
                                        Se connecter
                    </Button>
                </li>
                </ul>

            </div>
          </nav>
        </div>
      </div>
     
  )
}

export default NavHome;
