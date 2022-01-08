import React from "react";
import "./style.scss";
export default function() {
  return (
    <div className="admin-loading">
      <div className="lds-dual-ring"></div>
      <div>로딩중</div>
    </div>
  );
}
