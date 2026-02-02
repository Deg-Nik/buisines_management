import styled from "@emotion/styled";
import { NavLink, Link, type NavLinkRenderProps } from "react-router-dom";

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
  background: linear-gradient(to right, blue, rgba(0, 10, 66, 0.9));
  padding: 20px 40px;
  color: white;
`;

export const Title = styled.h1`
  display: flex;
  cursor: pointer;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
  width: 80px;
  cursor: pointer;
`;

export const LogoImg = styled.img`
  width: 70%;
  height: 80%;
  border-radius: 50%;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  align-items: center;
`;

export const HeaderLink = styled(NavLink)`
  color: white;
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 40px;
  gap: 40px;
  background-color: #c4e2f2ff;
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 150px;
  border-top: 1px solid black;
  background: linear-gradient(to left, blue, rgba(0, 10, 66, 0.9));
  padding: 20px 40px;
  color: white;
`;

export const FooterNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FooterLink = styled(Link)`
  display: flex;
  color: white;
  font-size: 14px;
  font-weight: bold;
`;

export const getActiveStyles = ({ isActive }: NavLinkRenderProps) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
});
