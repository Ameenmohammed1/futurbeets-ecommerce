import React,{} from 'react'
import './navbar.css'
import products from '../../../../images/produts.png';
import users from '../../../../images/users.png';
import orders from '../../../../images/orders.png';
import customize from '../../../../images/customize.png';
import {useNavigate} from 'react-router-dom'

function AdminNavbar() {

const navigate = useNavigate()
  return (
    <div className='adminNavbarParent'>

        <div className="sideMenu">
          <h1>Admin Pannel</h1>
          <div className="menus">

            <div onClick={()=>navigate('/admin')} className="menu">
            <i class="fa-solid fa-house"></i>
            <p>Dashboard</p>
            </div>
            <div onClick={()=>navigate('/admin/products')} className="menu">
            <img src={products} alt="" />
            <p>Products</p>
            </div>
            <div onClick={()=>navigate('/admin/users')} className="menu">
            <img src={users} alt="" />
            <p>Users</p>
            </div>
            <div onClick={()=>navigate('/admin/orders')} className="menu">
            <img src={orders} alt="" />
            <p>Orders</p>
            </div>
            <div className="menu">
            <img src={customize} alt="" />
            <p>Customize</p>
            </div>
          </div>
        </div>
       
    </div>
  )
}

export default AdminNavbar