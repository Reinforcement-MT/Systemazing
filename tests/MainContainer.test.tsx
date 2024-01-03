import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/App'
import MainContainer from '../src/components/MainContainer'
import Flowchart from '../src/Flowchart';


describe('App', () => {

beforeEach(() =>{
    
})

  it('renders MainContainer', () => {
    render(<App />);
    expect(screen.queryByTestId('main')).toBeInTheDocument();
  });

  it('renders FlowChart', () => {
    render(<App />);
    // screen.debug();
    const chart = screen.queryByTestId('chart')

    expect(chart).toBeInTheDocument();

    const flowChart = chart?.firstChild;
    expect(flowChart).toHaveClass('dndflow')
    // screen.getByRole('')
  });


});

describe('FlowChart', () => {
    it('renders initial nodes', () =>{
        render(<Flowchart />)

        // screen.getByText('Client')

        screen.debug();
    })
});