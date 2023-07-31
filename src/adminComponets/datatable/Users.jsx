import React,{useState,useEffect} from "react";
import "./table.css";
import DataTable from "react-data-table-component";
import data from '../data.json'



function TopProducts(prop) {
 
  const [search, setSearch] = useState('')
  const [orders, setOrders] = useState([])
  const [filterData, setFilterData] = useState([])
  async function getData(){

    setOrders(data)
          setFilterData(data)
   
   }

  
  const columns = [

    {
      name: "username",
      selector: "name",
      sortable: true,
    },
    {
      name: "mobileNo",
      selector: "phone",
      sortable: true,
    },
    {
      name: "email",
      selector: "email",
      sortable: true,
    },
    {
      name: "dob",
      selector: (row) => row.dob,
      sortable: true,
    },
    
  ];
  useEffect(()=>{
     getData().then(()=>getData())
  },[])
  useEffect(() => {
    const result = orders.filter(orders=>{
      return orders.name.toLowerCase().match(search.toLowerCase())
    })
setFilterData(result)
  }, [search]);

  return (
    <div>
      <div className="filterDiv">
        <input
          type="text"
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
          placeholder="Search Product"
          className="searchFilter"
        />
      </div>
      <DataTable
        columns={columns}
        data={filterData}
        pagination
        highlightOnHover
        fixedHeaderScrollHeight="80vh"
      />
    
    </div>
  );
}

export default TopProducts;
