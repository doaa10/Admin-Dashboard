import React, { useContext } from 'react'
import * as Unicons from '@iconscout/react-unicons';
import "./navbar.scss";
import { DarkModeContext } from '../../context/darkmodecontext';
export  const Navbar = () => {
  const{dispatch}=useContext(DarkModeContext);

  return (
    <div className='navbar'>
        <div className='wrapeer'>
          <div className='search'>
           <input type="text" placeholder='Search...'></input>
          <Unicons.UilSearch size="20"/>
          </div>

          <div className='items'>
            <div className='item'>
              <Unicons.UilGlobe   size="20"/>EN 
            </div>
            <div className='item'>
              <Unicons.UilMoon   onClick={()=>dispatch({type:"TOGGLE"})}  size="20"/> 
            </div>
            <div className='item'>
              <Unicons.UilExpandArrows   size="20"/> 
            </div> 
            <div className='item'>
              <Unicons.UilBell   size="20"/> 
              <div className='counter'>1</div>
            </div> 
            <div className='item'>
              <Unicons.UilCommentAlt   size="20"/> 
              <div className='counter'>2</div>

            </div>
            <div className='item'>
              <Unicons.UilListUl   size="20"/> 
            </div>
            <div className='item'>
              <img src='https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt="" className='avatar'></img>
            </div>
          </div>
          
        </div>
    </div>
  )
}
