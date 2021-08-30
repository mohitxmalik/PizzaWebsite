import React from "react";
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
  PageLink,
  HR,
} from "./SignupElements";

const SignUp = () => {
  return (
    <>
      <Container>
        <Formwrap>
          <Icon to="/">PIZZA</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Create your account</FormH1>
              {
                //Firstname
              }
              <FormLabel htmlFor="FirstName">First Name</FormLabel>
              <FormInput type="text" required />
              {
                //Lastname
              }
              <FormLabel htmlFor="LastName">Last Name</FormLabel>
              <FormInput type="text" required />
              {
                //Email
              }
              <FormLabel htmlFor="Email">Email</FormLabel>
              <FormInput type="email" required />
              {
                //Password
              }
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput type="password" id="password" required />
              {
                //Confirm-Password
              }
              <FormLabel htmlFor="ConfirmPassword">Confirm Password</FormLabel>
              <FormInput type="password" id="cnfrmPassword" required />
              {
                //Submit-Button
              }
              <FormButton
                type="submit"
                onClick={() => {
                  var password = String(
                    document.getElementById("password").value
                  );
                  var password2 = String(
                    document.getElementById("cnfrmPassword").value
                  );
                  if (password !== password2) {
                    alert("Password doesn't match. Try again!");
                  }
                }}
              >
                Continue
              </FormButton>
              <HR />
              <PageLink to="/SigninPage">Already have an account?</PageLink>
            </Form>
          </FormContent>
        </Formwrap>
      </Container>
    </>
  );
};

export default SignUp;
