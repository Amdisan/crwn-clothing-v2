
import {useState} from 'react';

import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';

import Button from '../button/button.component';

import './sign-in-form.style.scss';

 const defaultFormFields = {
    email: '',
    password: '',
   
 }

const SingInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;
    

    const  handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    };

    //console.log(formFields);

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async function(){
         await signInWithGooglePopup();         
    }
    

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            await signInUserWithEmailAndPassword(email, password);
            
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
                    console.log(error);
            }            
        }        
    };

    return(
        <div className='sign-up-container'>
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
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' btnType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>       
            </form>
        </div>
    )
}

export default SingInForm;