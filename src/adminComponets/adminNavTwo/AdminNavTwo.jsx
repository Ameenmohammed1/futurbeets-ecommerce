import React,{useState} from 'react'
import './adminNavTwo.css'
import menuImg from '../../images/menu.png';
function AdminNavTwo() {
    const [menu, setMenu] = useState(false);

    function handilMenue(){
        menu ? setMenu(false): setMenu(true);
        console.log(menu);
    }
  return (
    <div className='AdminNavTwoParent' >
   <div className="adminNav">
            <h1>Admin Panel</h1>
            <ul id={`${menu?'menuActive': '' }`}>
                <li>Dashboard</li>
                <li>Products</li>
                <li>Users</li>
                <li>Orders</li>
                <li>Customize</li>

            </ul>
            <img
          src={menuImg}
          onClick={()=>handilMenue()}
          className="menu"
          alt=""
        />
        </div>
    </div>
  )
}

export default AdminNavTwo