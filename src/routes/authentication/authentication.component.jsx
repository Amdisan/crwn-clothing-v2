

import SingUpForm from '../../components/sign-up-form/sign-up-form.component';
import SingInForm from '../../components/sign-in-form/sign-in-form.component';

import {AuthenticationContainer} from './authentication.style.jsx';


function Authentication(){
 
    return(
        <AuthenticationContainer>           
            <SingInForm/>           
            <SingUpForm/>
        </AuthenticationContainer>
    )
}

export default Authentication;