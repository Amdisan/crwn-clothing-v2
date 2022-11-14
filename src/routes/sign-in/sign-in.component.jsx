//import {useEffect} from 'react';
//import {getRedirectResult} from 'firebase/auth';

import {
 //   auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
  //  signInWithGoogleRedirect,    
} from '../../utils/firebase/firebase.utils';

import SingUpForm from '../../components/sign-up-form/sign-up-form.component';


function SignIn(){
 /*   useEffect(async () => {
        const response = await getRedirectResult(auth);
        //console.log(response);
        if(response){
            const userDocRef = await createUserDocumentFromAuth(response.user);
        }

    }, [])// empty array means run this function once when this component mounts for the first time
*/
    const logGooglePopupUser = async function(){
        const response = await signInWithGooglePopup();        
        const userDocRef = await createUserDocumentFromAuth(response.user);
    }
    

    return(
        <div>
            <h1>Sign In page</h1>
            <button onClick = {logGooglePopupUser}>Sign in with Google Popup</button>
            {/*  <button onClick = {signInWithGoogleRedirect}>Sign in with Google Redirect</button> */ }
            <SingUpForm/>
        </div>
    )
}

export default SignIn