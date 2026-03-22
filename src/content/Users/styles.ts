import styled from "@emotion/styled";
import { NavLink, type NavLinkRenderProps } from "react-router-dom";

export const UsersWrapper = styled.div`
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
  font-size: 24px;
  color: white;
`;

export const MenuButton = styled.div`
  display: flex;
  gap: 20px;
  font-size: 24px;
  width: 300px;
  padding: 8px 12px;
  background: #f0f4f402;
  color: blue;
  border: none;
  cursor: pointer;
`;


export const NavigationContainer = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: flex-start;
  align-items: flex-start;
  padding-right: 40px;
  /* padding: 0 20px 40px 0; */
  

  max-height: ${({ open }) => (open ? "750px" : "0")};
  overflow-y: auto;
  transition: max-height 0.3s ease;

  button {
    padding: 10px 10px;
    border-radius: 5%;
  }

  &::-webkit-scrollbar {
  width: 8px;
}

&::-webkit-scrollbar-track {
  background: blue;
}

&::-webkit-scrollbar-thumb {
  background: green;
  border-radius: 4px;
}

`;


export const HeaderLink = styled(NavLink)`
  font-size: 28px;
  font-weight: 400;
  text-decoration: none;
  color: black;
`;

export const Main = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  padding: 10px;
  gap: 40px;
  background-image: url("/public/wellcome.jpg");
  background-size: cover;
  background-position: center;
`;

export const getActiveStyles = ({ isActive }: NavLinkRenderProps) => ({
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: isActive ? "underline" : "none",
});
