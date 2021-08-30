import React from "react";
import {
  Li,
  Payment,
  PaymentBill,
  PaymentInfoLabel,
  PaymentProduct,
  ReceiptLabel,
  Ul,
  Wrapper,
  FormInput,
  SubmitBtn,
  Input,
  CardInput,
  Select,
  Hr,
} from "./Checkout3Elements";

const Checkout3 = () => {
  return (
    <Wrapper>
      <Payment>
        <PaymentProduct>
          <div>
            <h2>Veggie Overload</h2>
          </div>
        </PaymentProduct>

        <PaymentBill>
          <ReceiptLabel>Receipt Summary</ReceiptLabel>
          <Ul>
            <Li>
              <span>Veggie Overload</span>
              <span>₹ 499.00</span>
            </Li>
            <Li>
              <span>Discount</span>
              <span>₹ 35.00</span>
            </Li>
            <Li>
              <span>Subtotal</span>
              <span>₹ 464.00</span>
            </Li>
            <Li>
              <span>Tax</span>
              <span>₹ 72.53</span>
            </Li>
            <Li>
              <span>Total</span>
              <span>₹ 536.53</span>
            </Li>
          </Ul>
          <Hr />
          <PaymentInfoLabel>Payment Information</PaymentInfoLabel>
          <form action="/">
            <FormInput>
              <CardInput
                type="number"
                maxLength="16"
                placeholder="Card Number"
                required
              />
            </FormInput>
            <FormInput>
              <Select>
                <option disabled selected>
                  Month
                </option>
                <option>Jan.</option>
                <option>Feb.</option>
                <option>Mar.</option>
                <option>Apr.</option>
                <option>May</option>
                <option>Jun.</option>
                <option>Jul.</option>
                <option>Aug.</option>
                <option>Sep.</option>
                <option>Oct.</option>
                <option>Nov.</option>
                <option>Dec.</option>
              </Select>
              <Select>
                <option disabled selected>
                  Year
                </option>
                <option>2021</option>
                <option>2022.</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
                <option>2026</option>
                <option>2027</option>
                <option>2028</option>
                <option>2029</option>
                <option>2030</option>
                <option>2031</option>
                <option>2032</option>
              </Select>

              <Input type="number" maxLength="3" placeholder="CVV" required />
            </FormInput>
            <SubmitBtn>Order Now</SubmitBtn>
          </form>
        </PaymentBill>
      </Payment>
    </Wrapper>
  );
};

export default Checkout3;
