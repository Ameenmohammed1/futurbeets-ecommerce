import React, { useRef, useState } from "react";
import "./dashboard.css";
import AdminNavbarOne from "../admin-header/navbar/navbar/Admin-navbar";
import AdminNavTwo from "../adminNavTwo/AdminNavTwo";
import BoxData from "../BoxAnalysis/BoxAnalysis";
import totalSale from "../../images/totalSale2.png";
import order from "../../images/order-delivery.png";
import customers from "../../images/customer.png";
import customers2 from "../../images/people.png";
import products from "../../images/cubes.png";
import LineChart from "../Chart/LineChart";
import PieChart from "../Chart/PieChart";
import BarChart from "../Chart/BarChart";
import TopProducts from '../datatable/TopProducts'
import Order from '../datatable/Order'
function Dashboard() {
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
    <div ref={dashboardRef} className="DashboardParent">
      {navbar()}
      <div className="dashborad" style={{ width: `${width}%` }}>
        <div className="filter">
          <select>
            <option value="volvo">Today</option>
            <option value="saab">Week</option>
            <option value="mercedes">Month</option>
            <option value="mercedes">Year</option>
            <option value="audi">Total</option>
          </select>
        </div>
        <div className="introAnalysisParent">
          <BoxData icon={totalSale} title={"Today Sale"} data={"$200000"} />
          <BoxData icon={order} title={"Today order"} data={200000} />
          <BoxData icon={customers} title={"Today Customers"} data={200000} />
          <BoxData icon={products} title={"Total Products"} data={200000} />
          <BoxData icon={customers2} title={"Total Customers"} data={200000} />
        </div>
        <div className="revenue">
          <h2>Revenu & sales Analaysis</h2>
          <LineChart />
        </div>
        <div className="subChart">
          <div className="productData">
            <h2>Products Analysis</h2>
            <PieChart />
          </div>
          <div className="users">
            <h2>Customer Analysis</h2>
            <BarChart/>
          </div>
        </div>
        <div className="topProducts">
          <div className="products">
          <TopProducts/>
          </div>
        </div>
        <div className="TodayOrders">
          <div className="orders">
          <Order/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
