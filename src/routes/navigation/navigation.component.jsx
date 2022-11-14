import { Fragment, useContext } from "react";
import   { Outlet, Link } from "react-router-dom";
import {ReactComponent as Logo} from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils"; 
import "./navigation.styles.scss";


function Navigation() {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    //console.log(currentUser);
    const signOutHandler = async () => {
      await signOutUser();//undefined if success
      setCurrentUser(null);    
    };

    return (
      <Fragment> {/*Fragment - component to remove extra div we dont need. There will be no Fragment in dom*/} 
        <div className="navigation">
          <Link className="logo-container" to= "/">
            <Logo className="logo"/>
          </Link>            
          <div className="nav-links-container">
            <Link className="nav-link" to= "/shop"> SHOP </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutHandler}>SIGN OUT</span>
            ) : (
              <Link className="nav-link" to= "/authentication"> SIGN IN </Link>
            )}
            
          </div>
        </div>
        <Outlet/>
      </Fragment>    
    )
  }

export default Navigation;