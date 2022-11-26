import { Fragment, useContext } from "react";
import   { Outlet, Link } from "react-router-dom";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {ReactComponent as Logo} from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils"; 

import { CartContext } from "../../contexts/cart.context";

import { NavigationContainer, NavLinksContainer, NavLink, LogoContainer } from './navigation.styles';


function Navigation() {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);  
        

    return (
      <Fragment> {/*Fragment - component to remove extra div we dont need. There will be no Fragment in dom*/} 
        <NavigationContainer>
          <LogoContainer to= "/">
            <Logo className="logo"/>
          </LogoContainer>            
          <NavLinksContainer>
            <NavLink to= "/shop"> SHOP
             </NavLink>
            {currentUser ? (
              <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
            ) : (
              <NavLink to= "/authentication"> SIGN IN </NavLink>
            )}
            <CartIcon />
            
          </NavLinksContainer>
          {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>    
    )
  }

export default Navigation;