import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const FooterContainer = styled.footer`
  background-color: #0d0909;
  width: 100vw;
`;

export const FooterWrap = styled.div`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
`;

export const SocialMedia = styled.section`
  max-width: 1300px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 16px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const FacebookIcon = styled(FaFacebook)`
  &:hover {
    border-radius: 50%;
    border: 1px solid #3b5998;
    transform: scale(1.6);
    box-shadow: 0 0 15px #3b5998;
    transition: all 0.5s ease;
  }
`;
export const TwitterIcon = styled(FaTwitter)`
  &:hover {
    border-radius: 50%;
    border: 1px solid #00aced;
    transform: scale(1.6);
    box-shadow: 0 0 15px #00aced;
    transition: all 0.5s ease;
  }
`;
export const InstagramIcon = styled(FaInstagram)`
  &:hover {
    border-radius: 50%;
    border: 1px solid #bc2a8d;
    transform: scale(1.6);
    box-shadow: 0 0 15px #bc2a8d;
    transition: all 0.5s ease;
  }
`;
