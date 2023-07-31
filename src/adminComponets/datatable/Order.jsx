import React from 'react';
import './table.css'
import DataTable from 'react-data-table-component';
import data from '../data.json';



function TopProducts(prop) {
const columns = [
  {
    name: 'name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'phone',
    selector: 'phone',
    sortable: true,
  },
  {
    name: 'email',
    selector: 'email',
    sortable: true,
  },
  {
    name: 'dob',
    selector: (row)=>row.dob,
  }
];

  return (
    <div>
     
 <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
      />
    </div>
  )
}

export default TopProducts