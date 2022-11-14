
import {useState, useContext} from 'react';

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

import Button from '../button/button.component';

import { UserContext } from '../../contexts/user.context';

import './sign-up-form.style.scss';

 const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
 }

const SingUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const {setCurrentUser} = useContext(UserContext);  

    const  handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    };

    //console.log(formFields);

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
            const {user} = await createAuthUserWithEmailAndPassword(email, password);
            
            
            await createUserDocumentFromAuth(user, {displayName});
            
            setCurrentUser(user);      
            
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
        <div className='sign-up-container'>
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
        </div>
    )
}

export default SingUpForm;