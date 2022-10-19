import { loginWithEmailPassword, logoutFirebase, singInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal/journalSlice";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/providers');

describe('should test AuthThunks', () => {
  
  const dispatch = jest.fn();
  beforeEach( () => jest.clearAllMocks() );
  
  test('should invoque checkingCredentials', async() => {
    
    await checkingAuthentication()( dispatch );
    
    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
  });

  test('startGoogleSignIn should call checkingCredentials an login - Success', async() => {

    const loginData = { ok: true, ...demoUser };
    await singInWithGoogle.mockResolvedValue( loginData );

    await startGoogleSignIn()(dispatch);

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
  });

  test('startGoogleSignIn should call checkingCredentials an logout - Error', async() => {

    const loginData = { ok: false, errorMessage: 'Un error en Google' };
    await singInWithGoogle.mockResolvedValue( loginData );

    await startGoogleSignIn()(dispatch);

    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect( dispatch ).toHaveBeenCalledWith( logout( loginData.errorMessage ) );
  });
  
  test('startLoginWhitEmailPassword should call checkingCredentials and login - Success', async() => {
    
    const loginData = { ok: true, ...demoUser };
    const formData = { email: demoUser.email, password: '1234'};
    
    await loginWithEmailPassword.mockResolvedValue( loginData );
    
    await startLoginWithEmailPassword( formData )( dispatch );
    
    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect( dispatch ).toHaveBeenCalledWith( login( loginData ) );
  });

  test('startLoginWhitEmailPassword should call checkingCredentials and login - Error', async() => {
  
    const loginData = { ok: false, errorMessage: 'Un error en Google' };
    const formData = { email: demoUser.email, password: '1234'};
    await loginWithEmailPassword.mockResolvedValue( loginData );
  
    await startLoginWithEmailPassword( formData )( dispatch );
  
    expect( dispatch ).toHaveBeenCalledWith( checkingCredentials() );
    expect( dispatch ).toHaveBeenCalledWith( logout( loginData ) );
  });

  test('startLogout should call logoutFirebase, clearNotes and logout', async() => {

    await startLogout()( dispatch );

    expect( logoutFirebase ).toHaveBeenCalled();
    expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout() );
    expect( dispatch ).toHaveBeenCalledWith( logout() );
  });
});