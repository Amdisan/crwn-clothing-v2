
import {useState} from 'react';

import { useDispatch } from 'react-redux';

import FormInput from '../form-input/form-input.component';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';

import {SignUpContainer, ButtonsContainer} from './sign-in-form.style.jsx';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';


 const defaultFormFields = {
    email: '',
    password: '',
   
 }

const SingInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const dispatch = useDispatch();
    

    const  handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    };

   
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async function(){
         dispatch(googleSignInStart());         
    }
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
           dispatch(emailSignInStart(email, password));
            
            resetFormFields();

        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                    alert('wrong password or email');
                    break;
                case 'auth/user-not-found':
                    alert('no such user');
                    break;
                default:
                    console.log('User login with email and password error: ', error);
            }            
        }        
    };

    return(
        <SignUpContainer>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit = {handleSubmit}>              
                           
                <FormInput
                    label='Email'
                    type='email'
                    required
                    name='email'
                    value={email}
                    onChange={handleChange}
                />

                <FormInput
                    label='Password'
                    type='password'
                    required
                    name='password'
                    value={password}
                    onChange={handleChange}
                />
                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' btnType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </ButtonsContainer>       
            </form>
        </SignUpContainer>
    )
}

export default SingInForm;