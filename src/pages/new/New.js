import React, { useState } from 'react';
import {Sidebar} from "../../components/sidebar/Sidebar";
import {Navbar} from "../../components/navbar/Navbar";
import "./new.scss";
import * as Unicons from '@iconscout/react-unicons';

export const New = ({inputs,title}) => {
  const[file,setFile]=useState("");
  return (
    <div className='new'>
      <Sidebar/>
      <div className='newContainer'>
        <Navbar/>
      <div className='top'>
        <h1>{title}</h1>
      </div>
        <div className='bottom'>
          <div className='left'>
              <img src={file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt=''/>
          </div>
          <div className='right'>
              <form>
              <div className='formInput'>
                 image: <label htmlFor='file'><Unicons.UilCameraPlus sixe="20" className="icon"/></label>
                  <input type='file' id='file' style={{display:"none"}} onChange={e=>setFile(e.target.files[0])} ></input>
                </div>
              {
                inputs.map((input)=>(
                <div className='formInput' key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder}></input>
                </div>
                ))
              }
                
                
                

           
                <button>Send</button>
              </form>
          </div>
        </div>
      </div>
    </div>
  )
}
