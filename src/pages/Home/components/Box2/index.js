import React from "react";
import { Input, Button } from "antd";

import "./style.scss";

const InputLable = ({ lable = "", icLeft, styleLab, placeholder }) => {
  return (
    <div className="inp_box2 flex-center pb-2 mb-3">
      {(lable && (
        <lable className="lable_ipt" style={styleLab}>
          {lable}
        </lable>
      )) ||
        null}
      <Input allowClear placeholder={placeholder} />
      <div>{(icLeft && icLeft) || null}</div>
    </div>
  );
};

const Box2 = () => {
  return (
    <div className="box-container box-2">
      <h4 className="title txt">HUB 대시 보드</h4>

      <div className="content-box-2">
        <InputLable
          lable="현재가"
          styleLab={{ width: 80 }}
          placeholder="Price"
          icLeft={
            <>
              <span className="ic_1 pl-2">$</span>
              <span className="ic_2 pl-2">?</span>
            </>
          }
        />

        <InputLable
          lable="시가총액"
          styleLab={{ width: 100 }}
          placeholder="Market Cap"
          icLeft={
            <>
              <span className="ic_1 pl-2">$</span>
              <span className="ic_2 pl-2">?</span>
            </>
          }
        />

        <InputLable
          lable="유통량"
          styleLab={{ width: 70 }}
          placeholder="Circulating Supply"
          icLeft={
            <>
              <span className="ic_2 pl-2">0</span>
            </>
          }
        />
      </div>

      <div className="group-bnt d-flex ">
        <Button className="bnt-buy" color="#ec5b37" size={"large"}>
          Buy HUB
        </Button>

        <Button className="bnt-stake ml-2" color="#ec5b37" size={"large"}>
          Stake HUB
        </Button>
      </div>
    </div>
  );
};

export default Box2;
