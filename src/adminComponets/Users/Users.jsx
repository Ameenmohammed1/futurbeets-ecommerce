import React, { useRef, useState } from "react";
import AdminNavbarOne from "../admin-header/navbar/navbar/Admin-navbar";
import AdminNavTwo from "../adminNavTwo/AdminNavTwo";
import UsersTable from "../datatable/Users";
import "./users.css";

function Users() {
  

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
    <div className="usersParentDiv" ref={dashboardRef}>
      {navbar()}
      <div className="users" style={{ width: `${width}%` }}>
        <h1>Users</h1>
        <UsersTable />
      </div>
    </div>
  );
}

export default Users;
