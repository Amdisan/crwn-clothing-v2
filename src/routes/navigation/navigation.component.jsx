import { Fragment, useContext } from "react";
import   { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {ReactComponent as Logo} from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils"; 

import { CartContext } from "../../contexts/cart.context";

import "./navigation.styles.scss";


function Navigation() {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);  
        

    return (
      <Fragment> {/*Fragment - component to remove extra div we dont need. There will be no Fragment in dom*/} 
        <div className="navigation">
          <Link className="logo-container" to= "/">
            <Logo className="logo"/>
          </Link>            
          <div className="nav-links-container">
            <Link className="nav-link" to= "/shop"> SHOP
             </Link>
            {currentUser ? (
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
            ) : (
              <Link className="nav-link" to= "/authentication"> SIGN IN </Link>
            )}
            <CartIcon />
            
          </div>
          {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
      </Fragment>    
    )
  }

export default Navigation;