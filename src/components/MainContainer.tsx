// import React from 'react'
import Flowchart from '../Flowchart';
import Topbar from '../Topbar';
import Btmbar from '../Btmbar';

const MainContainer = () => {
  return (
    <div id="main">
      <div id="top">
        <Topbar />
      </div>
      <div id="chart">
        <Flowchart />
      </div>
      <div id="btm">
        <Btmbar />
      </div>
    </div>
  );
};

export default MainContainer;
