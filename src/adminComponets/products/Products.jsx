import React,{useRef,useState,useEffect} from 'react'
import AdminNavbarOne from "../admin-header/navbar/navbar/Admin-navbar";
import AdminNavTwo from "../adminNavTwo/AdminNavTwo";
import './Products.css'
import AllProducts from '../datatable/Products'
import {useNavigate} from 'react-router-dom'
function Products() {
  let dashboardRef = useRef();
  const [width, setWidth] = useState(0);
  const [product, setProduct] = useState([]);
  function navbar() {
    if (660 > window.innerWidth) {
      setTimeout(() => {
        setWidth(100);
      }, 100);
      return <AdminNavTwo />;
    } else if (window.innerWidth > 670) {
      setTimeout(() => {
        setWidth(80);
        let b = dashboardRef.current
          ? (dashboardRef.current.style.display = "flex")
          : "";
      }, 100);
      return <AdminNavbarOne />;
    }
  }

  const navigation = useNavigate();
  return (
    <div className="productParentmain" ref={dashboardRef}>
      {navbar()}
  <div className='adminProducts' style={{ width: `${width}%`}}>
      <button className='addProduct' onClick={()=>{navigation('/admin/addProducts')}}>Add Product</button>
<AllProducts/>
    </div>
    </div>
  )
}

export default Products