// import React from 'react'
import Flowchart from '../Flowchart';

const MainContainer = () => {
    /**
     * 
     */

    return (
        <div id='main'>
            <div id="left" data-testid='left'></div>
            <div id="chart">
            <Flowchart />
            </div>
        </div>
    )
}

export default MainContainer;