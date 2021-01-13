import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import Icon from "../assets/svg/logo_favicon.svg"

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [menuIndex, setMenuIndex] =useState(-1);
  
  return (
    <Nav>
      <NavLink to="/">
        <Logo src={Icon} alt="Logo"/>
      </NavLink>
      <Bars onClick={() => setNavbarOpen(true)} />
      <NavMenu onMouseLeave={e => {
                     setMenuIndex(-1);
                 }}>
        <NavMenuWrapper>
        {menuData.map((item, index) => (
          
            <NavLink to={item.link} key={index} onMouseEnter={e => {
                     item.subMenus === undefined
                     ?
                     setMenuIndex(-1)
                     :
                     setMenuIndex(index);
                 }}>
              {item.title}
            </NavLink>

        ))}
        </NavMenuWrapper>
        <NavMenuWrapper>
          {menuData.map((item, index) =>(
                item.subMenus ? 
              (<DropDownContent isDropped={index== menuIndex ? true : false}>
                {item.subMenus.map((subitem, index) => (
                  <DropDownLink to="/" key={index}>{subitem.title}</DropDownLink>
                ))}
              </DropDownContent>) 
              : 
              <DropDownContent />
              ))}
        </NavMenuWrapper>
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
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  position: relative; 
  opacity: 0.8;  
`

const NavLink = styled(Link)`
  color: #f7f5f5;
  filter: brightness(90%);
  display: flex;
  text-decoration: none;
  padding: 1rem 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  transition: filter 300ms;

  &:hover {
    filter: brightness(200%);
    color: white;
    text-decoration: underline;
    text-decoration-color: #0373FC;
    text-decoration-thickness: 4px;
    text-underline-offset: 0.5rem;
  }
  
  @media screen and (max-width: 768px) {
    color: white;
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
  color: white;
}
`

const NavMenu = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  
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
  background-color: rgba(0, 0, 0, 1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 20rem;
  width: 100%;
  position: absolute;
  top: 4rem;
  right: 0;
  transform: ${({navbarOpen}) => (navbarOpen ? "translateX(0)" : "translateX(100%)")};
  
  @media screen and (min-width: 768px) {
    display: none;
  }
`

const DropDownContent = styled.div `
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  opacity: ${({isDropped}) => (isDropped ? 1 : 0)};
  padding: 0 1rem;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: rem;

  li {
    color: white;
  }
`
const NavMenuWrapper = styled.div `
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0.5rem 0;
`

const DropDownLink = styled(Link)`
  color: #f7f5f5;
  filter: brightness(90%);
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 0.5rem;
  height: 100%;
  cursor: pointer;
  font-size: 1.2rem;
  transition: filter 300ms;
  margin-top: 1rem;

  &:hover {
    filter: brightness(200%);
    color: white;
    text-decoration: underline;
    text-decoration-color: #0373FC;
    text-decoration-thickness: 4px;
    text-underline-offset: 0.5rem;
  }
  
  @media screen and (max-width: 768px) {
    display: none;
  }

`
