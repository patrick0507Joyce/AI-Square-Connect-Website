import React, { useState } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import Icon from "../assets/svg/logo_favicon.svg"

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  //TODO: navigate to our page subcomponent
  
  return (
    <Nav>
      <NavLink to="/">
        <Logo src={Icon} alt="Logo"/>
      </NavLink>
      <Bars onClick={() => setNavbarOpen(!navbarOpen)}>
      </Bars>
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavContent navbarOpen={navbarOpen}>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavContent>
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
  background: grey;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  position: relative; 
  opacity: 0.8;

  @media screen and (max-width: 768px) {
    background: transparent;

  }
`

const NavLink = styled(Link)`
  color: #f7f5f5;
  filter: brightness(90%);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0px 1rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.2rem;
  transition: filter 300ms;

  &:hover {
    filter: brightness(200%);
    color: white;
  }
  
  @media screen and (max-width: 768px) {
    color: black;
    font-weight: 450;
  }

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


@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 0.5rem;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  color: black;
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

const NavContent = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 50vh;
  width: 100%;
  position: absolute;
  top: 4rem;
  right: 0;
  transform: ${({navbarOpen}) => (navbarOpen ? "translateX(0)" : "translateX(100%)")};
  color: black;
  background-color: rgba(255, 255, 255, .9);


  @media screen and (min-width: 768px) {
    display: none;
  }
`
