import React from 'react'
import './widget.scss';
import * as Unicons from '@iconscout/react-unicons';

export const Widget = ({type}) => {

  let data;

  //temp
  const amount=100;
  const diff=10 ;

  switch(type){
    case 'user':
      data={
        title:"users",
        isMoney:false,
        link:"see all users",
        icon:<Unicons.UilUser size="13" className="icon" style={{
          color:"crimson",
          backgroundColor: "rgba(255,0,0,.2)"
        }}/>,

      };
      break;
      case 'order':
        data={
          title:"OEDERS",
          isMoney:false,
          link:"view all orders",
          icon:<Unicons.UilShoppingBag size="13" className="icon"
          style={{
            color:"goldernod",
            backgroundColor: "rgba(218,165,32,.2)"
          }}/>,
  
        };
        break;
        case 'earning':
          data={
            title:"EARNINGS",
            isMoney:true,
            link:"view net earnings",
            icon:<Unicons.UilUsdCircle  size="13" className="icon"
            style={{
              color:"green",
              backgroundColor: "rgba(0,128,0,.2)"
            }}/>,
    
          };
          break;
          case 'balance':
            data={
              title:"BALANCE",
              isMoney:true,
              link:"see details",
              icon:<Unicons.UilWallet size="13" className="icon" style={{
                color:"purple",
                backgroundColor: "rgba(128,0,128,.2)"
              }}/>,
      
            };
            break;
      default :
      break;
  }
  return (
    <div className='widget'>
        <div className='left'>
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.isMoney && "$"} {amount}</span>
            <span className='link'>{data.link}</span>

        </div>
        <div className='right'>
        <div className='top pos'>
            <Unicons.UilAngleDown size="20"/> {diff} % 
        </div>
        {data.icon}
        </div>
    </div>
  )
}
