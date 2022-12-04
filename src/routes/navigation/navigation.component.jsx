import { Fragment} from "react";
import   { Outlet} from "react-router-dom";

import { useSelector } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {ReactComponent as Logo} from "../../assets/crown.svg";
import { selectCurrentUser } from "../../store/user/user.selector";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { signOutUser } from "../../utils/firebase/firebase.utils"; 



import { NavigationContainer, NavLinksContainer, NavLink, LogoContainer } from './navigation.styles';


function Navigation() {
   const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);  
        

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