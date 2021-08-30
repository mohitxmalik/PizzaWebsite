import React from "react";
import { PageLink } from "../Signin/SigninElements";
import {
  Container,
  FormButton,
  FormContent,
  FormInput,
  FormLabel,
  Formwrap,
  Icon,
  FormH1,
  Form,
  HR,
} from "./ForgotPasswordELements";

const ForgotPassword = () => {
  return (
    <>
      <Container>
        <Formwrap>
          <Icon to="/">PIZZA</Icon>
          <FormContent>
            <Form action="/">
              <FormH1>Trouble Logging In?</FormH1>

              <FormLabel>
                Enter your email, phone number and we'll send you a link to get
                back into your account.
              </FormLabel>
              <FormInput type="text" placeholder="Email, Phone " required />
              <FormButton type="submit">Send Login Link</FormButton>
              <HR />
              <PageLink to="/SigninPage">Back to Login</PageLink>
            </Form>
          </FormContent>
        </Formwrap>
      </Container>
    </>
  );
};

export default ForgotPassword;
