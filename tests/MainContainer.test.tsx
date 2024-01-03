import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/App'
import MainContainer from '../src/components/MainContainer'


describe('App', () => {

beforeEach(() =>{
    
})

  it('renders MainContainer', () => {
    render(<App />);
    screen.debug();
    expect(screen.queryByTestId('left')).toBeInTheDocument();


    // check if App components renders headline
  });
});