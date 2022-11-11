import { Fragment } from "react";
import   { Outlet, Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import "./navigation.styles.scss";


function Navigation() {
    return (
      <Fragment> {/*Fragment - component to remove extra div we dont need. There will be no Fragment in dom*/} 
        <div className="navigation">
          <Link className="logo-container" to= "/">
            <Logo className="logo"/>
          </Link>            
          <div className="nav-links-container">
            <Link className="nav-link" to= "/shop"> SHOP </Link>
          </div>
        </div>
        <Outlet/>
      </Fragment>    
    )
  }

export default Navigation;