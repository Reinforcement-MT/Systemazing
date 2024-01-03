// import React from 'react'
import Flowchart from '../Flowchart';

const MainContainer = () => {
    /**
     * 
     */

    return (
        <div id='main' data-testid='main'>
            {/* <div id="left" data-testid='left'></div> */}
            <div id="chart" data-testid='chart'>
            <Flowchart />
            </div>
        </div>
    )
}

export default MainContainer;