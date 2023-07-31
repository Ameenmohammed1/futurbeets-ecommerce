
import './App.css';
import {Fragment} from 'react'
import Home from './pages/Home';
import {Routes,Route} from 'react-router-dom'
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import Favourite from './pages/FavouritePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProfilePage from './pages/ProfilePage';
import SearchPage from './pages/SearchPage';
import Dashboard from './adminPages/DashboardPage';
import ProductPage from './adminPages/ProductsPage';
import AddProduct from './adminPages/AddProductPage';
import Orders from './adminPages/OrederPage';
import EditProductPge from './adminPages/EditProductPge';
import CheckOutPage from './pages/CheckOutPage';
import UsersPage from './adminPages/UsersPage';

function App() {

  return (
    
<Fragment>
<Routes>
  <Route exact path="/" element={<Home />}/>
  <Route path="/product" element={<ProductDetails />}/>
  <Route path="/cart" element={<Cart/>}/>
  <Route path="/order" element={<OrderPage/>}/>
  <Route path="/favourite" element={<Favourite/>}/>
  <Route path="/login" element={<LoginPage/>}/>
  <Route path="/signup" element={<SignUpPage/>}/>
  <Route path="/profile" element={<ProfilePage/>}/>
  <Route path="/search" element={<SearchPage/>}/>
  <Route path="/admin" element={<Dashboard/>}/>
  <Route path="/admin/products" element={<ProductPage/>}/>
  <Route path="/admin/addproducts" element={<AddProduct/>}/>
  <Route path="/admin/orders" element={<Orders/>}/>
  <Route path="/admin/users" element={<UsersPage/>}/>
  <Route path="/admin/editProduct" element={<EditProductPge/>}/>
  <Route path="/checkOut" element={<CheckOutPage/>}/>
</Routes>
</Fragment>


  );
}
//https://dribbble.com/shots/19614098-Shopcart-E-Commerce-Product-Page

export default App;
