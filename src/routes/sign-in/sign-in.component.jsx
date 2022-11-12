import {signInWithGooglePopup, createUserDocumentFromAuth} from '../../utils/firebase/firebase.utils';

function SignIn(){
    const logGoogleUser = async function(){
        const response = await signInWithGooglePopup();        
        const userDocRef = await createUserDocumentFromAuth(response.user);
    }

    return(
        <div>
            <h1>Sign In page</h1>
            <button onClick = {logGoogleUser}>
                Sign in with Google Popup
            </button>
        </div>
    )
}

export default SignIn