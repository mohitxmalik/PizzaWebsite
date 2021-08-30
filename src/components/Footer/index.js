import React from "react";

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
} from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.instagram.com/"
                target="_blank"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.Twitter.com/"
                target="_blank"
                aria-label="Twitter"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
