import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import { authSlice, startLoginWithEmailPassword, } from '../../../src/store/auth';
import { LoginPage } from '../../../src/auth/pages/LoginPage';
import { notAuthenticatedState } from '../../fixtures/authFixtures';

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks', () => ({
  startGoogleSignIn: () => mockStartGoogleSignIn,
  startLoginWithEmailPassword: ({ email, password }) => {
    return () => mockStartLoginWithEmailPassword({ email, password });
  },
}));

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => (fn) => fn(),
}));

const store = configureStore({
  reducer: {
      auth: authSlice.reducer
  },
  preloadedState: {
      auth: notAuthenticatedState
  }
});

describe('should test <LoginPage />', () => {

  beforeEach( () => jest.clearAllMocks() );

  test('should render the component properly', () => {

    render(
      <Provider store={ store } >
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    // screen.debug();
    expect( screen.getAllByText('Login').length ).toBeGreaterThanOrEqual(1);
  });

  test('Google button should call dispatch with startGoogleSignIn', () => {
    
    render(
      <Provider store={ store } >
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const googleBtn = screen.getByLabelText('google-button');
    fireEvent.click( googleBtn );
    
    expect( mockStartGoogleSignIn ).toHaveBeenCalled();
  });

  test('submit should call startLoginWithEmailPassword', () => {

    const email = 'email@gmail.com';
    const password = '123456';

    render(
      <Provider store={ store } >
        <MemoryRouter>
          <LoginPage />
        </MemoryRouter>
      </Provider>
    );

    const emailField = screen.getByRole('textbox', { name: 'Correo' });
    fireEvent.change( emailField, { target: { name: 'email', value: email } });
    
    const passwordField = screen.getByTestId('password');
    fireEvent.change( passwordField, { target: { name: 'password', value: password } });

    const loginForm = screen.getByLabelText('submit-form');
    fireEvent.submit( loginForm );

    expect( mockStartLoginWithEmailPassword ).toHaveBeenLastCalledWith({
      email: email,
      password: password
    });
  });
});