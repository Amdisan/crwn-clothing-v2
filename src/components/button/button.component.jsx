
import {BaseButton, GoogleSignInButton, InvertedButton} from './button.style.jsx';
import { ButtonSpinner } from './button.style.jsx';
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


const Button = ({children, btnType, isLoading, ...otherProps}) => {
    
    const  CustomButton = getButton(btnType);    
    return (            
        <CustomButton disabled={isLoading} {...otherProps}>
           {isLoading ? <ButtonSpinner/> : children}
        </CustomButton>
    )      
};

export default Button;

