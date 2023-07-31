import React,{useState,useEffect} from "react";
import "./table.css";
import DataTable from "react-data-table-component";
import {useNavigate}  from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import data from '../../adminComponets/data.json'
import 'react-toastify/dist/ReactToastify.css';

import image from '../../images/all-india-delivery.jpg'
function TopProducts(prop) {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [products, setProducts] = useState([])
  const [filterData, setFilterData] = useState([])
  async function getData(){
    
    
          setProducts(data)
          setFilterData(data)
   
   }
  function deleteProduct(productID,name){
   alert('hello world')
  }
  
  function viewProduct(productID){
    alert('hello world')
  }
  function editProduct(productID){
    alert('hello world')
  }
  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <img
          src={image}
          width={50}
          height={50}
          alt=""
        />
      ),
    },
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "phone",
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
    {
      name: "action",
      cell: (row) => {
        return (
          <div className="CRUDbutton">
            <button onClick={() => editProduct()}>
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button onClick={() => viewProduct()}>
              <i class="fa-solid fa-eye"></i>
            </button>
            <button onClick={() =>deleteProduct()}>
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        );
      },
    },
  ];
  useEffect(()=>{
     getData().then(()=>getData())
  },[])
  useEffect(() => {
    const result = products.filter(product=>{
      return product.name.toLowerCase().match(search.toLowerCase())
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
        title="Products"
        columns={columns}
        data={filterData}
        pagination
        highlightOnHover
        fixedHeaderScrollHeight="80vh"
      />
       <ToastContainer />
    </div>
  );
}

export default TopProducts;
