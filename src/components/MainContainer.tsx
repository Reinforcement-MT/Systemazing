// import React from 'react'
import Flowchart from './Flowchart';
import Topbar from './Topbar';
import Btmbar from './Btmbar';

const MainContainer = () => {
  return (
    <div id='main' data-testid="main">
      <Topbar />
      <div id="chart" data-testid='chart'>
        <Flowchart />
      </div>
      <Btmbar />
    </div>
  );
};

export default MainContainer;
