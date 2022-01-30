import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import CoinbaseLogo from "../assets/cb-logo.png";
import { navItems } from "../static/navItems";

const SideBar = () => {
  const [active, setActive] = useState(navItems[0].title);
  return (
    <Wrapper>
      <LogoConatiner>
        <Logo>
          <Image src={CoinbaseLogo} alt="Coinbase Logo" />
        </Logo>
      </LogoConatiner>
      <NavItemContainer>
        {navItems.map((item, index) => (
          <NavItem key={index} onClick={() => setActive(item.title)}>
            <NavIcon style={{ color: item.title === active && "#3773f5" }}>
              {item.icon}
            </NavIcon>
            <NavTitle>{item.title}</NavTitle>
          </NavItem>
        ))}
      </NavItemContainer>
    </Wrapper>
  );
};
export default SideBar;

const Wrapper = styled.div`
  height: calc(100vh);
  border-right: 1px solid #282b2f;
  width: calc(22rem - 16px - 16px);
  padding: 0 1rem;
`;

const LogoConatiner = styled.div`
  margin: 1.5rem 0;
`;

const Logo = styled.div`
  width: 44%;
  object-fit: contain;
  margin-left: 1.5rem;
`;

const NavItemContainer = styled.div`
  margin-top: 3rem;

  &:hover {
    cursor: pointer;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  height: 4rem;
  transition: 0.3s all ease-in-out;
  &:hover {
    background-color: #141519;
  }
`;

const NavIcon = styled.div`
  background-color: #141519;
  padding: 0.7rem;
  border-radius: 50%;
  margin: 0 1rem;
  display: grid;
  place-items: center;
`;

const NavTitle = styled.div``;
