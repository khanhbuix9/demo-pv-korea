import React from "react";
import "./style.scss";

const Box1 = () => {
  return (
    <div className="box-container box-1">
      <h4 className="title txt">전체 자산 밸런스</h4>
      <div className="content-box-1 d-flex justify-between align-center">
        <span className="txt_top txt">총 예치 자산</span>
        <div className="d-flex">
          <span className="price">0</span>
          <span className="_unit pl-2">$</span>
        </div>
      </div>
    </div>
  );
};

export default Box1;
