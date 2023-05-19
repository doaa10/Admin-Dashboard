import React from 'react'
import "./single.scss";
import {Sidebar} from "../../components/sidebar/Sidebar";
import {Navbar} from "../../components/navbar/Navbar";
import {Chart} from "../../components/chart/chart";
import {List} from "../../components/Table/Table";



export const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className='singlecontainer'>
        <Navbar/>
        <div className='top'>
        <div className='left'>
        <div className='editbutton'>Edit</div>

              <h1 className='title'>Information</h1>
              <div className='item'>
                <img src='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                 alt='' className='itemimg'></img>
      <div className='details'>
        <h1 className='itemTitle'>Jane doe</h1>
        <div className='detailItem'>
          <span className='itemKey'>Email :</span>
          <span className='itemvalue'>janndoe@gmail.com</span>

        </div>
        <div className='detailItem'>
          <span className='itemKey'>phone :</span>
          <span className='itemvalue'>+20 5898 8655 </span>

        </div>
        <div className='detailItem'>
          <span className='itemKey'>Address :</span>
          <span className='itemvalue'>elton st 234 newyork</span>

        </div>
        <div className='detailItem'>
          <span className='itemKey'>country :</span>
          <span className='itemvalue'>usa</span>

        </div>

      </div>

              </div>
        </div>
        <div className='right'>
          <Chart aspect={3/1} title="user Spending (last 6 month)"/>
        </div>
        </div>

        <div className='bottom'>
          <List/>
        </div>
       

      </div>
    </div>
  )
}
