import React,{useRef,useState} from 'react'
import AdminNavbarOne from "../admin-header/navbar/navbar/Admin-navbar";
import AdminNavTwo from "../adminNavTwo/AdminNavTwo";
import './orders.css'
import OrdersTable from '../datatable/Order'

function Orders() {
  const [orders,setOrders] = useState([])
    let dashboardRef = useRef();
    const [width, setWidth] = useState(0);
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
  return (
    <div className='OrdersParent' ref={dashboardRef}>
        {navbar()}
<div className="orders" style={{ width: `${width}%`}}>
  <p className='title'>Orders</p>
  <div className="btns">
   <button>Today Orders</button>
    <button>All orders</button>
    <button>Shiped Orders</button>
  </div>
<OrdersTable/>
</div>
    </div>
  )
}

export default Orders