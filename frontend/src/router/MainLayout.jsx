// MainLayout.jsx
import React, { useContext } from "react";
import { useSelector, connect} from "react-redux";
import { ThemeContext } from "../assets/context/ThemeContext";
import NavDash from '../layout/nav/NavDash';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { getUserRole } from "../store/selectors/AuthSelectors";


function MainLayout(props) {  
  const { sideBarIconHover } = useContext(ThemeContext);
  const sideMenu = useSelector(state => state.sideMenu);
  const selectedRole = props.userRole;
  console.log("🚀 ~ MainLayout ~ selectedRole:", selectedRole)

  return (
    <>
      <div id="main-wrapper" className={`show  ${sideBarIconHover ? "iconhover-toggle": ""} ${ sideMenu ? "menu-toggle" : ""}`}>  
          <NavDash userRole={selectedRole} />
          <div className="content-body">          
            <div className="container-fluid" style={{ minHeight: window.screen.height - 45 }}>
              <Outlet />   
            </div>
          </div>
          <Footer />        
      </div>          
    </>
  )
}
const mapStateToProps = (state) => ({
  userRole: getUserRole(state), 
});

export default connect(mapStateToProps)(MainLayout);
