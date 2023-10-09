import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
 height: auto;
  background-color: #333;
  color: white;
  text-align: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }

`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 Crowdfunding WebApp. All rights reserved.</p>
      <p>
        Contact us at <a href="mailto:pragnesh78687@gmail.com">pragnesh78687@gmail.com</a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
