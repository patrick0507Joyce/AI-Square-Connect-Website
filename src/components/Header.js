import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import Icon from "../assets/svg/logo_favicon.svg"

const Header = () => {
  //TODO: navigate to our team subcomponent
  
  return (
    <Nav>
      <NavLink to="/">
        <Logo src={Icon} alt="Logo"/>
      </NavLink>
      <Bars />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/company">
        Contact Us
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  opacity: 0.8;
  background: grey;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  position: relative; 

  @media screen and (max-width: 768px) {
    background: transparent;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0px 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.2rem;
`

const Logo = styled.img `

  width: 4rem;
  height: 4rem;
  margin: 1rem;

  @media screen and (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
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
  opacity: 1;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
