import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">AI-Square-Connect</NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/contact">
        Contact Us
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  position: relative; 
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0px 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
display: none;
color: #fff;

@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 1rem;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
}
`

const NavMenu = styled.div `
  display: flex;
  align-items: center;
  

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div `
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
