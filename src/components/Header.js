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
  
  useEffect(() => {
    const alibabaScript = document.createElement('script');
    const alibabaScript2 = document.createElement('script');
  
    alibabaScript.src = "https://g.alicdn.com/aes/??tracker/1.0.34/index.js,tracker-plugin-pv/2.4.5/index.js,tracker-plugin-event/1.2.5/index.js";
    alibabaScript2.src = "https://g.alicdn.com/??alidocs/we-logger/1.0.1/index.js,code/lib/react/17.0.1/umd/react.production.min.js,code/lib/react-dom/17.0.1/umd/react-dom.production.min.js,code/lib/react-router-dom/5.2.0/react-router-dom.min.js,code/lib/classnames/2.2.6/index.min.js,code/lib/react-is/17.0.1/umd/react-is.production.min.js,code/lib/mobx/6.3.2/mobx.umd.production.min.js,code/lib/mobx-react-lite/3.2.0/mobxreactlite.umd.production.min.js";

    alibabaScript.async = true;
    alibabaScript2.async = true;
    alibabaScript2.crossorigin = 'anonymous';
  
    document.body.appendChild(alibabaScript);
    document.body.appendChild(alibabaScript2);
  
    return () => {
      document.body.removeChild(alibabaScript);
      document.body.removeChild(alibabaScript2);
    }
  }, []);
  
  return (
    <Nav>
      <NavLink to="/">
        <Logo src={Icon} alt="Logo"/>
      </NavLink>
      <Bars onClick={() => setNavbarOpen(!navbarOpen)} />
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
                {item.subMenus.map((subitem, subIndex) => (
                  <DropDownLink 
                  to={subitem.subLink} 
                  key={subIndex}
                  isDropped={index== menuIndex ? true : false}
                  >{subitem.title} </DropDownLink>
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
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 100;
  position: fixed; 
  top: 0;
  width: 100%;
  background: rgba(39, 48, 59, 1);
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

  width: 3.5rem;
  height: 3.5rem;
  margin: 0 3rem 0 0;

  @media screen and (max-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`

const Bars = styled(FaBars)`
display: none;


@media screen and (max-width: 768px) {
  display: flex;
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
  margin: 1rem 2rem 0 0;
  
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

  display: ${({navbarOpen}) => (navbarOpen ? "flex" : "none" )};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30rem;
  width: 100%;
  position: absolute;
  top: 4rem;
  right: 0;
  opacity:${({navbarOpen}) => (navbarOpen ? 1 : 0 )};
  
  
`

const DropDownContent = styled.div `
  background-color: rgba(0, 0, 0, 1);
  display: flex;
  opacity: ${({isDropped}) => (isDropped ? 1 : 0)};
  padding: 0.1rem 0.2rem;
  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: rem;

  li {
    color: white;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavMenuWrapper = styled.div `
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 2rem 0 0;
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
  margin: 0.5rem 0;
  
  pointer-events: ${({isDropped}) => (isDropped ? "default" : "none")};

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
