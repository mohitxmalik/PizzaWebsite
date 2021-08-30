import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/"> Pizzas</SidebarLink>
        <SidebarLink to="/"> Offers</SidebarLink>
        <SidebarLink to="/SigninPage"> Sign In</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to="/SignupPage">Create Account</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
