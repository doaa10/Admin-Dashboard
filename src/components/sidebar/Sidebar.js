import React, { useContext } from 'react';
import "./sidebar.scss";
import * as Unicons from '@iconscout/react-unicons';
import {Link} from "react-router-dom";
import { DarkModeContext } from "../../context/darkmodecontext";


export const Sidebar = () => {
    const{dispatch}=useContext(DarkModeContext);

  return (
    <div className='sidebar'>
        <div className='top'>
            <Link to="/" style={{textDecoration:"none"}}>
            <span className='logo'>DeroAdmin</span>

            </Link>
        </div>
        <hr/>
        <div className='center'>

            <ul>
                <p className='title'>MAIN</p>
                <li>
                <Unicons.UilDashboard size="20" color="#7541f8" />
                    <span>Dashboard</span>
                    </li>
                <p className='title'>LISTS</p>
                <Link to="/users" style={{textDecoration:"none"}}>
                <li>

                <Unicons.UilUser size="20" color="#7541f8" />

                    <span>users</span>

                    </li>
                    </Link>


                    <Link to="/products" style={{textDecoration:"none"}}>

                <li>
                    <Unicons.UilStore size="20" color="#7541f8"/>
                    <span>products</span>
                    </li> 
                    </Link>
                <li>      
                <Unicons.UilCreditCard  size="20" color="#7541f8"/>
            <span>orders</span>
            </li>
                <li>
                <Unicons.UilTruck  size="20" color="#7541f8"/>
                <span>Delivery</span></li>

                <p className='title'>USEFUL</p>

                <li>
                <Unicons.UilChart  size="20" color="#7541f8"/>
                    <span>Stats</span>
                    </li>
                <li> <Unicons.UilBell  size="20" color="#7541f8"/>
                    <span>Notifications</span>
                    </li>

                <p className='title'>SERVICE</p>

                <li>
                <Unicons.UilCloudCheck size="20" color="#7541f8"/>
                    <span>system Health</span>
                    </li>
                <li><Unicons.UilBrain  size="20" color="#7541f8"/>
                    <span>logs</span>
                    </li>
                <li>
                <Unicons.UilSetting size="20" color="#7541f8"/>
                    <span>settings</span>
                    </li>
                <p className='title'>USER</p>
                <li>
                <Unicons.UilUserCircle size="20" color="#7541f8"/>
                    <span>profile</span>
                    </li>
                <li>
                <Unicons.UilSignout size="20" color="#7541f8"/>
                    <span>logout</span>
                    </li>



            </ul>
        </div>
    
        <div className='bottom'>
            <div className='colorOption' onClick={()=>{dispatch({type:"LIGHT"})}}></div>
            <div className='colorOption' onClick={()=>{dispatch({type:"DARK"})}}></div>
        </div>

    </div>
  )
}
