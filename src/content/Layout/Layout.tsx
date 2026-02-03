import { Outlet, useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import {
  Footer,
  Header,
  HeroWrapper,
  Logo,
  LogoImg,
  Main,
  FooterLink,
  FooterNavigation,
  Title,
} from "./styles";


export default function Layout() {
  const navigate = useNavigate();

  const goHome = () => navigate(ROUTES.HOME);
  const goToLogin = () => navigate(ROUTES.LOGIN);

  return (
    <HeroWrapper>
      <Header>
        <Title onClick={goHome}>Business Management</Title>

        <Logo onClick={goToLogin}>
          Login
          <LogoImg src="/logotip.png" />
        </Logo>
      </Header>

      <Main>
        <Outlet/>
      </Main>

      <Footer>
        <FooterNavigation>
          <FooterLink to={ROUTES.CONTACT_US}>Contact Us</FooterLink>
          <FooterLink to={ROUTES.LOGIN}>Login</FooterLink>
        </FooterNavigation>
      </Footer>
    </HeroWrapper>
  );
}
