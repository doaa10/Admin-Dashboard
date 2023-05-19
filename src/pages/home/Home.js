import React from 'react'
import { Chart } from '../../components/chart/chart';
import { Feature } from '../../components/featured/feature';
import { Navbar } from '../../components/navbar/Navbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { List } from '../../components/Table/Table';
import { Widget } from '../../components/widgets/Widget';
import "./home.scss";
export const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='homeContainer'>
        <Navbar/>
        <div className='widgets'>
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <div className='charts'>
          <Feature/>
          <Chart aspect={2/1} title="Last 6 month (Revenue)"/>
        </div>
        <div className="listContainer">
          <div className='listTitle'>
            latest transactions 
          </div>
          <List/>
        </div>
      </div>
    </div>
  )
}
