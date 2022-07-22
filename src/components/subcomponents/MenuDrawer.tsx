import { AlignCenterOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDrawerContent = styled.div`
  color: black;
`;

const MenuDrawer = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <AlignCenterOutlined
        onClick={showDrawer}
        style={{ fontSize: "32px", color: "#E21221" }}
      />
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <StyledDrawerContent>
          <Link to="/">
            <p>Home</p>
          </Link>
          <a href="https://www.nosis.com/es" target='_blank' >
            <p>Nosis</p>
          </a>
          <a href="https://facuariasla.vercel.app/" target='_blank' >
            <p>Portfolio</p>
          </a>
        </StyledDrawerContent>
      </Drawer>
    </>
  );
};

export default MenuDrawer;
