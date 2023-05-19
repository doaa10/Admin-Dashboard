import React from 'react'
import './feature.scss' ;
import * as Unicons from '@iconscout/react-unicons';
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css" ;
export const Feature = () => {
  return (
    <div className='feature'>
        <div className='top'>
            <div className='title'>Total Revtenue</div>
            <Unicons.UilEllipsisV  sixe="10" color="#8b8989"/>
            
        </div>
        <div className='bottom'>
            <div className='progress'>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
          
          </div>
          <p className='title'> total sales made today</p>
          <p className='amount'>$420</p>
          <p className='desc'> previous transactions processing .Last payments may not be included</p>
              <div className='summary'>
                <div className='target'>
                  <div className='title'>Target</div>
                  <div className='amo'> 
                  <Unicons.UilAngleDown size="20" color="red"/>
                    $12.4k</div>
                </div>
                <div className='target'>
                  <div className='title'>Last Week</div>
                  <div className=' amo green'>
                  <Unicons.UilAngleUp size="20" color="green"/>
                    $12.4k</div>
                </div>
                <div className='target'>
                  <div className='title'>Last Month</div>
                  <div className='amo'>
                  <Unicons.UilAngleDown size="20" color="red"/>
                    $12.4k</div>

                </div>
              </div>
        </div>
    </div>
  )
}
