import { singInWithGoogle } from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import { checkingAuthentication, startGoogleSignIn } from "../../../src/store/auth/thunks";
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
});