import React from 'react'
import "./list.scss";
import {Sidebar} from "../../components/sidebar/Sidebar";
import {Navbar} from "../../components/navbar/Navbar";
import { Datatable } from '../../components/datatable/Datatable';


export const List = () => {
  return (
    <div className='list'>
      <Sidebar/>
      <div className='listContainer'>
        <Navbar/>
        <Datatable/>
        </div> 

    </div>
  )
}
