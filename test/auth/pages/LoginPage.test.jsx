import { configureStore } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

import { LoginPage } from "../../../src/auth/pages/LoginPage";
import { authSlice } from "../../../src/store/auth";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer
  },
});

describe('should test <LoginPage />', () => {

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

});