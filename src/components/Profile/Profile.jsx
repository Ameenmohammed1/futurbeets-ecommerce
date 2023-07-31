import React,{useEffect,useState} from "react";
import "./profile.css";

function Profile() {
 
  return (
    <div className="ProfileParent">
      <h1>Your Profile</h1>

      <div className="acdtl">
        <p>Username </p>
        <input type="text" defaultValue={'kk'} />
      </div>
      <div className="acdtl">
        <p>Mobile No </p>
        <input type="text" defaultValue={'kk'} />
      </div>
      <div className="acdtl">
        <p>Pincode </p>
        <input type="text" defaultValue={'kk'} />
      </div>
      <div className="acdtl">
        <p>Address </p>
        <input type="text" defaultValue={'kk'} />
      </div>
      <div className="acdtl">
        <p> Area,Street </p>
        <input type="text"  defaultValue={'kk'}/>
      </div>
      <div className="acdtl">
        <p>Land Mark</p>
        <input type="text" defaultValue={'kk'} />
      </div>
      <div className="acdtl">
        <p>Town/City </p>
        <input type="text" defaultValue={'kk'}/>
      </div>
      <div className="acdtl">
        <p>State </p>
        <input type="text" defaultValue={'kk'} />
      </div>
      <button>Save</button>
    </div>
  );
}

export default Profile;
