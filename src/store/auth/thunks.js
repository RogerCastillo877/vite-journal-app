import { async } from "@firebase/util";
import { registerUserWhitEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./";

export const checkingAuthentication = ( email, password ) => {

  return async( dispatch ) => {
    
    dispatch( checkingCredentials() );
  };
};

export const startGoogleSignIn = () => {

  return async( dispatch ) => {
    
    dispatch( checkingCredentials() );
    
    const result = await singInWithGoogle();
    if (!result.ok) return dispatch( logout( result.errorMessage ) )

    dispatch( login( result ) )
  };
};

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  
  return async( dispatch ) => {

    dispatch( checkingCredentials() );
  
    const resp = await registerUserWhitEmailPassword({ email, password, displayName });
    console.log(resp);
    return {
      ok: true,
      uid, photoURL, email, displayName
    }
  }
}