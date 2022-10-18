import { authSlice, checkingCredentials, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState, notAuthenticatedState } from "../../fixtures/authFixtures";


describe('should test auhtSlice', () => {
  
  test('should return initial state and it be called "auth"', () => {

    expect( authSlice.name ).toBe('auth');
    const state = authSlice.reducer( initialState, {});

    expect( state ). toEqual( initialState )
  });

  test('should do the authentication', () => {

    const state = authSlice.reducer( initialState, login(demoUser) );

    expect( state ).toEqual({
      status: 'authenticated',
      uid: demoUser.uid,
      email: demoUser.email,
      displayName: demoUser.displayName,
      photoURL: demoUser.photoURL,
      errorMessage: null
    })
  });

  test('should do the logout without arguments', () => {
    
    const state = authSlice.reducer( authenticatedState, logout());

    expect( state ).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: undefined
    });
  });

  test('should do the logout and display error message', () => {
    
    const errorMessage = 'Credenciales no son correctas'
    const state = authSlice.reducer( notAuthenticatedState, logout({ errorMessage }) )

    expect( state ).toEqual({
      status: 'not-authenticated',
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: errorMessage
    });
  });
  
  test('should change state to "checking', () => {

    const state = authSlice.reducer( authenticatedState, checkingCredentials() );

    expect( state.status ).toBe('checking');
  });
});