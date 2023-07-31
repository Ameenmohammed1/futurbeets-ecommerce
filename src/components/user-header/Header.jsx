import React, { useState } from "react";
import "./header.css";
import cartImg from "../../images/shopping-cart.png";
import menuImg from "../../images/menu.png";
import searchImg from "../../images/search.png";
import {useNavigate} from 'react-router-dom'
function Header() {
 const navigate = useNavigate()
  const [menu, setMenu] = useState(false);
  const [account, setAccount] = useState(false);
  const [search, setSearch] = useState(false);
  function handilMenu() {
    menu ? setMenu(false) : setMenu(true);
    console.log(menu);
  }

  function handilSearch() {
    search ? setSearch(false) : setSearch(true);
    console.log(search);
  }
  return (
    <div className="headerParent">
      <div className="navbarParent">
        <h1 onClick={()=>navigate('/')}>E-commerce</h1>
        <div className="search">
          <input type="text" />
          <button className="srchBtn">Search</button>
        </div>
        <div className="sideDiv">
        <div className="user" onClick={() => navigate("/login")}>
          <i className="fa-regular fa-user"></i> <p>Log In</p>
        </div>
          <div className="cart" >
            <img src={cartImg} className="cartImage" alt="" />
            <span className="count">2</span>
          </div>
        </div>

        <div onClick={() => handilSearch()} className="cart2">
          <img src={searchImg} className="searchImage" alt="" />
        </div>
        <img
          src={menuImg}
          onClick={() => handilMenu()}
          className="menu"
          alt=""
        />
      </div>

      <div className={`menuDivParent ${menu ? "menuActive" : ""}`}>
        <div className="menus">
          <i onClick={()=>navigate('/profile')}  class="fa-regular fa-user"></i> <p>Hello Ameen Mohammed</p>
        </div>
        <div className="menus"  onClick={()=>navigate('/cart')}>
          <img src={cartImg}  className="cartImage2" alt="" /> <p>Your Cart</p>
        </div>
        <div onClick={()=>navigate('/favourite')} className="menus">
          <i className="fa-regular fa-heart"></i> <p>Your Favoirite</p>
        </div>
        <div onClick={()=>navigate('/order')} className="menus">
          <img src={cartImg} className="cartImage2" alt="" /> <p>Your Orders</p>
        </div>
      </div>

      <div className={`accoutParent ${account ? "accountActive" : ""}`}>
        <div onClick={()=>navigate('/profile')} className="menus">
          <i class="fa-regular fa-user"></i> <p>Hello Ameen Mohammed</p>
        </div>
        <div className="menus"  onClick={()=>navigate('/cart')}>
          <img src={cartImg} className="cartImage2" alt="" /> <p>Your Cart</p>
        </div>
        <div onClick={()=>navigate('/favourite')} className="menus">
          <i className="fa-regular fa-heart"></i> <p>Your Favoirite</p>
        </div>
        <div onClick={()=>navigate('/order')} className="menus">
          <img src={cartImg} className="cartImage2" alt="" /> <p>Your Orders</p>
        </div>
      </div>

      <div className={`searchBarParen ${search ? "searchActive" : ""}`}>
        <div className="searchBar">
          <input type="text" />
          <button className="srchBtn">Search</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
