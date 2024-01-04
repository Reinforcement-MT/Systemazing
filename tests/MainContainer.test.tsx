import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/App';
import Flowchart from '../src/Flowchart';

describe('MainContainer', () => {
  it('renders MainContainer', () => {
    render(<App />);
    screen.debug();
  });
});

describe('App', () => {
  beforeEach(() => {});

  it('renders MainContainer', () => {
    render(<App />);
    expect(screen.queryByTestId('main')).toBeInTheDocument();
  });

  it('renders Topbar', () => {
    render(<App />);
    const top = screen.queryByTestId('main');
    expect(top).toBeInTheDocument();

    const topbar = top?.firstChild;
    expect(topbar).toHaveAttribute('id', 'top');

  });

  it('renders FlowChart', () => {
    render(<App />);
    // screen.debug();
    const chart = screen.queryByTestId('chart');
    expect(chart).toBeInTheDocument();

    const flowChart = chart?.firstChild;
    expect(flowChart).toHaveClass('dndflow');
    // screen.getByRole('')
  });

  it('renders Btmbar', () => {
    render(<App />);
    const btm = screen.queryByTestId('btm')!;
    expect(btm).toBeInTheDocument();

    const btmbar = btm.firstChild!;
    const chatbox = btmbar.firstChild!;

    // TODO: Test btmbar if we add anything besides the chatbox
    expect(chatbox).toHaveAttribute('id', 'chatbox');
  });
});

describe('FlowChart', () => {
  beforeEach(() => {});
  it('xrenders initial nodes', () => {
    render(<Flowchart />);
  });
});
