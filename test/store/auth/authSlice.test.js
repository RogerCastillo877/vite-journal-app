import { authSlice } from "../../../src/store/auth/authSlice"

describe('should test auhtSlice', () => {
  
  test('should return initial state and it be called "auth"', () => {

    expect( authSlice.name ).toBe('auth');
    const state = authSlice.reducer( initialState, {});

    expect( state ). toEqual( initialState )
  })
})