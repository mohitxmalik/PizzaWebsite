import styled from "styled-components";
import Sweet1 from "../../images/sweet-2.jpg";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;
export const Payment = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  background-color: #fff;
  box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.2);
`;
export const PaymentProduct = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 40px;
  width: 40%;
  height: 100%;
  background-color: #f00;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.1),
      rgba(0, 0, 0, 0.95) 85%
    ),
    url(${Sweet1});
  color: white;
  background-size: cover;
  @media screen and (max-width: 460px) {
    display: none;
  }
`;
export const PaymentBill = styled.div`
  padding: 40px;
  width: 80%;
  height: 100%;
  background-color: #fff;
  @media screen and (max-width: 460px) {
    padding: 30px 10px;
  }
`;

export const ReceiptLabel = styled.h3`
  color: Black;
  font-weight: 400;
  font-size: 20px;
`;
export const Ul = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  line-height: 2;
  color: #666;
`;
export const Hr = styled.hr`
  border-color: #ebeaea;
  border-style: dashed;
`;
export const PaymentInfoLabel = styled.h3`
  color: Black;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const FormInput = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  @media screen and (max-width: 460px) {
    display: grid;
    padding: 2px;
  }
`;
export const SubmitBtn = styled.button`
  width: 100%;
  border: none;
  background-color: red;
  color: #fff;
  padding: 15px 0;
  font-size: 18px;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.4s ease-out;

  &:hover {
    background-color: #e31837;
    cursor: pointer;
    color: #fff;
  }
`;
export const CardInput = styled.input`
  border: none;
  background-color: #e9ecec;
  padding: 15px 10px;
  width: 32%;
  border-radius: 2px;
  @media screen and (max-width: 460px) {
    width: 70%;
  }
`;
export const Input = styled.input`
  border: none;
  background-color: #e9ecec;
  padding: 15px 10px;
  width: 32%;
  border-radius: 2px;
  margin-top: 2px;
`;
export const Select = styled.select`
  border: none;
  background-color: #e9ecec;
  padding: 15px 10px;
  width: 32%;
  border-radius: 2px;
  @media screen and (max-width: 460px) {
    width: 70%;
  }
`;
