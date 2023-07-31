import React, { useState} from "react";
import "./checkOut.css";

function CheckOut() {
  const [username, setUsername] = useState("");
  const [mobileNO, setMobileNo] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [town, setTown] = useState("");
  const [state, setState] = useState("");
  const cookies = JSON.parse(localStorage.getItem("user"));
  var formData = {
    username: username ? username : "",
    mobileNO: mobileNO ? mobileNO : "",
    pincode: pincode ? pincode : "",
    address: address ? address : "",
    area: area ? area : "",
    landmark: landmark ? landmark : "",
    town: town ? town : "",
    state: state ? state : "",
    userData: cookies.userData ? cookies.userData : "",
  };

  return (
    <div className="ProfileParent">
      <h1>Check Out</h1>

      <div className="acdtl">
        <p>Full Name </p>
        <input
          key={''}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          defaultValue={'jjjj'}
        />
      </div>
      <div className="acdtl">
        <p>Mobile No </p>
        <input
          key={''}
          type="text"
          value={mobileNO}
          onChange={(e) => setMobileNo(e.target.value)}
          defaultValue={'jj'}
        />
      </div>
      <div className="acdtl">
        <p>Pincode </p>
        <input
          key={''}
          type="text"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          defaultValue={'jj'}
        />
      </div>
      <div className="acdtl">
        <p>Address </p>
        <input
          key={''}
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          defaultValue={'gg'}
        />
      </div>
      <div className="acdtl">
        <p> Area,Street,Sector,Village </p>
        <input
          key={''}
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          defaultValue={'jj'}
        />
      </div>
      <div className="acdtl">
        <p>Land Mark</p>
        <input
          key={''}
          type="text"
          value={landmark}
          onChange={(e) => setLandmark(e.target.value)}
          defaultValue={'jj'}
        />
      </div>
      <div className="acdtl">
        <p>Town/City </p>
        <input
          key={'jj'}
          type="text"
          value={town}
          onChange={(e) => setTown(e.target.value)}
          defaultValue={'jj'}
        />
      </div>
      <div className="acdtl">
        <p>State </p>
        <input
          key={'jj'}
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
          defaultValue={'jj'}
        />
      </div>
      <div className="chekBOx">
        <p>Payment Method Online</p>
        <input id="checkInput" type="checkbox"/>
      </div>
      <button>Place Order</button>
    </div>
  );
}

export default CheckOut;
