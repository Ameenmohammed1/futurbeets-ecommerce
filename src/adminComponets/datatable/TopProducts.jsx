import React from 'react';
import './table.css'
import DataTable from 'react-data-table-component';
import data from '../data.json';

const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Price',
    selector: 'phone',
    sortable: true,
  },
  {
    name: 'Email',
    selector: 'email',
    sortable: true,
  },
  {
    name: 'DOB',
    selector: (row)=>row.dob,
  },
  {
    name: 'action',
    cell:(row)=>{
      return(
     <div className="CRUDbutton">
         <button onClick={()=>alert(row.name)}><i class="fa-solid fa-pen-to-square"></i></button>
        <button onClick={()=>alert(row.name)}><i class="fa-solid fa-eye"></i></button>
        <button onClick={()=>alert(row.name)}><i class="fa-solid fa-trash"></i></button>
     </div>
      )
    }
  }
];

function TopProducts() {
  return (
    <div>
 <DataTable
        title="Top Products"
        columns={columns}
        data={data}
        pagination
        highlightOnHover
      />
    </div>
  )
}

export default TopProducts