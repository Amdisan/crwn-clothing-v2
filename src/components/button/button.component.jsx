
import {BaseButton, GoogleSignInButton, InvertedButton} from './button.style.jsx';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
};

const getButton = (btnType = BUTTON_TYPE_CLASSES.base) => 
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,

    }[btnType]);


const Button = ({children, btnType, ...otherProps}) => {
    const  CustomButton = getButton(btnType);    
    return (            
        <CustomButton  {...otherProps}>{children}</CustomButton>
    )      
};

export default Button;

