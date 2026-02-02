import { useContext, useState } from "react";
import { ROUTES } from "../../constants/routes";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Header,
  Main,
  UsersWrapper,
  Title,
  Logo,
  NavigationContainer,
  MenuButton,
} from "./styles";
import Button from "../../components/Button/Button";
import { UserContext } from "../../App";




export default function Users() {
  const { pathname } = useLocation();
  const isUsers = pathname === "/users";
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);
  const {userData} = useContext(UserContext)  

  return (
    
      <UsersWrapper>
        <Header>
          <Title
            onClick={() => {
              navigate(ROUTES.HOME);
            }}
          >
            Business Management
          </Title>
          <Logo>{userData.name}</Logo>
        </Header>
        {isUsers && <Main>
          <MenuButton onClick={() => setOpenMenu((prev) => !prev)}>
            ☰
            <NavigationContainer open={openMenu}>
              <Button isGradientBlue name={"Time-tracking"} />
              <Button isGradientBlue name={"Projects"} />
              <Button isGradientBlue name={"Clients"} />
              <Button isGradientBlue name={"Invoices"} />
              <Button isGradientBlue name={"Accounting"} />
              <Button isGradientBlue name={"Reports"} />
              <Button isGradientBlue name={"Users"} />
              <Button isGradientBlue name={"Users"} />
              <Button isGradientBlue name={"Users"} />
              <Button isGradientBlue name={"Users"} />
            </NavigationContainer>
          </MenuButton>
          {/* <Outlet /> */}
        </Main>}
      </UsersWrapper>
   
  );
}
