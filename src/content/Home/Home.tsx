import {
  MainContent,
  MainImages,
  H2,
  Paragraph,
  Img,
} from "./styles"; 


import Button from "../../components/Button/Button";
import { ROUTES } from "../../constants/routes";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const goToFree = () => navigate(ROUTES.USERS);
  const goToDemo = () => navigate(ROUTES.DEMO);

  return (
    <>
      <MainContent>
        <H2>
          Manage your work time, invoices, and accounting all in one place!
        </H2>

        <Paragraph>
          “A modern system for employers: employee time tracking, automated
          invoicing, and transparent financial analytics. Less routine — more
          control.”
        </Paragraph>

        <Button isGradientBlue name="Try for free" onClick={goToFree} />
        <Button
          isReversGradientBlue
          name="View demo"
          onClick={goToDemo}
        />
      </MainContent>

      <MainImages>
        <Img src="/clock.jpg" />
        <Img src="/buchgalter.jpg" />
      </MainImages>

      <MainImages>
        <Img src="/organisation.jpeg" />
        <Img src="/graphik.webp" />
      </MainImages>
    </>
  );
}
