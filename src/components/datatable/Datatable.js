import React, { useState } from 'react' ;
import "./datatable.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { userColumns,userRows} from '../../datatablesource';
import { Link } from 'react-router-dom';




export const Datatable = () => {
  const[data,setData]=useState(userRows);
  const handleDelete=(id)=>{

    setData(data.filter((item)=>item.id!==id));

  }

    const actionColumn=[{
        field: "action " , headerName: "Action", width:200 , renderCell:(params)=>{
            return (
               <div className='cellAction'>
            <Link to="/users/test" style={{textDecoration:"none"}}>

                    <div className='viewButton'>
                    view
                    </div>
                    </Link>
                    <div className='deleteButton' onClick={()=>handleDelete(params.row.id)}>
                    delete
                    </div>
               </div> 
            )
        }  }]
  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        Add new User 
        <Link to="/users/new" className='link'style={{textDecoration:"none"}}>
          Add new
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />

    </div>
  )
}
