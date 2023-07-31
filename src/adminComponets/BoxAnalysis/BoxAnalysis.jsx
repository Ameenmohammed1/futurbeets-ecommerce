import React from "react";
import "./boxAnalysis.css";
function BoxAnalysis(props) {
  const {
    icon,
    title,
    data
  } =props;
  return (
    <div className="BoxAnalysis">
      <div className="title">
        <img src={icon ? icon :''} alt="" />
        <p>{title ? title : 'Title'}</p>
      </div>
      <h2>{data ? data : 'Loading...'}</h2>
    </div>
  );
}

export default BoxAnalysis;
