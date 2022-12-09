
import {useState} from 'react';
import { useDispatch } from 'react-redux';

import { signUpStart} from '../../store/user/user.action';
import FormInput from '../form-input/form-input.component';

import Button from '../button/button.component';

import {SignUpContainer} from './sign-up-form.style.jsx';

 const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
 }

const SingUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;
    const dispatch = useDispatch();
   

    const  handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    };

    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password !== confirmPassword) {
            alert('passwords do not match');
            return;
        };
        try {
            dispatch(signUpStart(email, password, displayName));                  
            
            resetFormFields();

        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('cannot create user, already exists')
            }else{
            console.log('error while  user creation with email and password', error)
            }
        }
        
    };

    return(
        <SignUpContainer>
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit = {handleSubmit}>                
                <FormInput
                    label= 'Display Name'
                    type='text'
                    required
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                />
                
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
                
                <FormInput
                    label='Confirm Password'
                    type='password'
                    required 
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                />
                <Button  type='submit'>Sign Up</Button>
            </form>
        </SignUpContainer>
    )
}

export default SingUpForm;