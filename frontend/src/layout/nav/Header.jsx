import React,{ useContext, useEffect, useState} from "react";

import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import userImg from '../../assets/images/user.jpg'
import headmaster from '../../assets/images/headmaster.jpg'


import { ThemeContext } from "../../assets/context/ThemeContext";
import  Logout  from "../nav/Logout";


const Header = ({ onNote, userRole }) => {
  const [profileImg, setProfileImg]= useState('')
  const[profileLink, setProfileLink]=useState ('')

  useEffect(() => {
    switch (userRole) {
        case 'teacher':
            setProfileImg();
            setProfileLink('/teacherProfile');
            break;
        case 'assistant':
            setProfileImg();
            setProfileLink('/assistantProfile');
            break;
        case 'headmaster':
            setProfileImg(headmaster);
            setProfileLink('/headmasterProfile');
            break;
        case 'inspector':
            setProfileImg();
            setProfileLink('/inspectorProfile');
            break;
        default:
            setProfileImg(userImg);
            setProfileLink('/Profile');
    }
}, [userRole]);


  const {background, changeBackground } = useContext(ThemeContext);
	const handleThemeMode = () => {
		if(background.value === 'dark'){
			changeBackground({ value: "light", label: "Light" });
		}else{
			changeBackground({ value: "dark", label: "Dark" });
		}
	}
  
  return (
    <>
      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">                
                <div className="search_bar dropdown">
                    <span className="search_icon p-3 c-pointer" data-bs-toggle="dropdown">
                        <i className="mdi mdi-magnify"></i>
                    </span>
                    <div className="dropdown-menu p-0 m-0">
                        <form>
                            <input className="form-control" type="search" placeholder="Chercher" aria-label="Search" />
                        </form>
                    </div>
                </div>
              </div>
              <ul className="navbar-nav header-right ">	
                  <li className="nav-item dropdown notification_dropdown">
                      <Link to={"#"} 
                        className={`nav-link bell dlab-theme-mode p-0 ${background.value === "dark" ? "active" : ""}`}
                        onClick={()=>handleThemeMode()}
                      >
                        <i id="icon-light" className="fas fa-sun" ></i>
                        <i id="icon-dark" className="fas fa-moon"></i>									
                      </Link>
                  </li>			
                    <Dropdown as="li" className="nav-item header-profile">              
                  <Dropdown.Toggle to={"#"} className="nav-link i-false" as="div">
                    <img src={profileImg} width="20" alt=""/>
                  </Dropdown.Toggle>
                  <Dropdown.Menu align="end" className="mt-3 dropdown-menu dropdown-menu-right ">
                      <Link to={profileLink} className="dropdown-item ai-icon icon-bell-effect">
                          <svg id="icon-user1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                          <span className="ms-2">Profil </span>
                      </Link>                  
                      <Logout />
                  </Dropdown.Menu>
                </Dropdown>
              </ul>
            </div>
          </nav>
        </div>
      </div>
     
    </>    
  );
};

export default Header;
