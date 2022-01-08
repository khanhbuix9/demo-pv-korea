import React from "react";
// import { Menu } from "antd";
import "./style.scss";
// import {
//   RightOutlined,
//   CaretDownOutlined,
//   CaretUpOutlined,
// } from "@ant-design/icons";
// const { SubMenu, Item } = Menu;

const Header = ({ isLogin }) => {
  //   const history = useHistory();

  return (
    <header>
      <div
        id="_header"
        className="header-page flex-item-center header-height border-bottom-border-head"
      >
        <ul className="container-cst justify-between flex-item-center ">
          {/* <li className="nav-item">
                        <a href="/" className="logo">
                            <img src={require("resources/images/logo.png")} alt="lottery" aria-roledescription="logo" />
                        </a>
                    </li> */}
          <li>header</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
