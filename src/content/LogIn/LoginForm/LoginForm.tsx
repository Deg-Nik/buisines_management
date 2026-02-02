import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { LOGIN_FORM_VALUES } from "./types";
import { LoginFormContainer, InputsContainer, Title } from "./styles";
import { ROUTES } from "../../../constants/routes";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { UserContext } from "../../Users/UsersContext/UserContext";
import { USER } from "content/Users/types";



const validationSchema = Yup.object().shape({
  [LOGIN_FORM_VALUES.NAME]: Yup.string()
    .required("Name field is required")
    .min(2, "min 2 symbols")
    .max(10, "max 10 symbols"),

  [LOGIN_FORM_VALUES.EMAIL]: Yup.string()
    .required("Email field is required")
    .email("Invalid email format"),

  [LOGIN_FORM_VALUES.PASSWORD]: Yup.string()
    .required("Password field is required")
    .min(5, "min 5 symbols")
    .max(10, "max 10 symbols"),
});

function detectRole(values: any): USER["role"] {
  if (
    values.name === "admin" &&
    values.email === "admin@gmail.com" &&
    values.password === "admin"
  ) {
    return "ADMIN";
  }

  if (
    values.name === "Degtiarev" &&
    values.email === "degnik@gmail.com" &&
    values.password === "123456"
  ) {
    return "EMPLOYEE";
  }

  return "GUEST";
}

export default function LoginForm() {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext is missing provider");
  }

  const { setUserData } = userContext;

  const formik = useFormik({
    initialValues: {
      [LOGIN_FORM_VALUES.NAME]: "",
      [LOGIN_FORM_VALUES.EMAIL]: "",
      [LOGIN_FORM_VALUES.PASSWORD]: "",
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: true,

    onSubmit: (values, helpers) => {
      const role = detectRole(values);

      setUserData({
        name: values[LOGIN_FORM_VALUES.NAME],
        email: values[LOGIN_FORM_VALUES.EMAIL],
        password: values[LOGIN_FORM_VALUES.PASSWORD],
        role,
      });

      navigate(ROUTES.USERS);
      helpers.resetForm();
    },
  });

  return (
    <LoginFormContainer onSubmit={formik.handleSubmit}>
      <Title>Login form</Title>

      <InputsContainer>
        <Input
          id="name-id"
          name={LOGIN_FORM_VALUES.NAME}
          placeholder="Enter your name"
          label="Name*"
          value={formik.values[LOGIN_FORM_VALUES.NAME]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.NAME]}
        />

        <Input
          id="email-id"
          name={LOGIN_FORM_VALUES.EMAIL}
          placeholder="Enter your email"
          label="Email*"
          value={formik.values[LOGIN_FORM_VALUES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.EMAIL]}
        />

        <Input
          id="password-id"
          name={LOGIN_FORM_VALUES.PASSWORD}
          type="password"
          placeholder="Enter your password"
          label="Password*"
          value={formik.values[LOGIN_FORM_VALUES.PASSWORD]}
          onChange={formik.handleChange}
          error={formik.errors[LOGIN_FORM_VALUES.PASSWORD]}
        />
      </InputsContainer>

      <Button name="Login" type="submit" />
    </LoginFormContainer>
  );
}
