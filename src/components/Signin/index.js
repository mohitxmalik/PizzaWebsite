import React from "react";

import {
  Container,
  FormButton,
  FormContent,
  FormInput,
  FormLabel,
  Formwrap,
  PageLink,
  Icon,
  FormH1,
  Form,
  HR,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <Formwrap>
          <Icon to="/">PIZZA</Icon>
          <FormContent>
            <Form>
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="Email">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="Password">Password</FormLabel>
              <FormInput type="password" id="password" required />
              <FormButton
                type="submit"
                onClick={() => {
                  var password = String(
                    document.getElementById("password").value
                  );
                  if (password === "admin") {
                    alert("Login Successful");
                  } else {
                    alert("Incorrect Username or Password");
                  }
                }}
              >
                Continue
              </FormButton>
              <PageLink to="/ForgotPassword">Trouble Logging In?</PageLink>
              <HR />
              <PageLink to="/SignupPage">Create Account</PageLink>
            </Form>
          </FormContent>
        </Formwrap>
      </Container>
    </>
  );
};

export default SignIn;
