import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Typewriter from "typewriter-effect";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from "react-reveal/Fade";

const about = () => {
  return (
 <AboutContainer>
    <div className="container home-content">
          <Fade right>
          <TitleH2>CrowdFunding Web3</TitleH2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Innovate..",
                    "Support..", 
                    "Succeed.."
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Fade>
          <h3>Empowering Dreams, One Backer at a Time.</h3>
          
           <p>
         We believe in the power of the crowd to fuel innovative ideas and bring them to life. </p>
         <p>  Join our community of backers and creators to make a difference together.  </p>
          {/* <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=+918780036665"
                rel="noreferrer"
                target="_blank"
              > 
WhatsApp Me 
              </a>
              <a className="btn btn-cv" href="https://drive.google.com/file/d/1cc_x9CWlI9R_Cy2FdnFuWEH_v88pMJnE/view?usp=sharing" download="Pragnesh_makwana.pdf">
                My Resume
              </a>
            </div>
          </Fade> */}
        </div>
       
       </AboutContainer>
      
       )
};

const TitleH2 = styled.h2`
  font-size: 2rem;
  color: #32cd32 ;
  /* Add other styles as needed */
`;

const AboutContainer = styled.div`
  text-align: center;
  padding: 20px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;



export default about;






























// const AboutPage = () => {
//   return (
//     <AboutContainer>
//       <Logo src='https://lh3.googleusercontent.com/pw/ADCreHc15cXAlN7PFiAMKmme0epFK0G_4L7ZEFdgfSDHsqgCvU_6jkDqN-WmeYWCShHXiNLH7vCZSKbStZ1En5_opcZeDUoGTidxd1lrpjQPA3DNOmsYb7rBwvDYOAxauU5JQV-HVcws00EL6GrZjA7feUvV=w718-h790-s-no?authuser=0' alt="Crowdfunding Logo" />
//       <h1>About Us</h1>
     
//       <Quote>Empowering Dreams, One Backer at a Time.</Quote>
     
//       <p>
//         We believe in the power of the crowd to fuel innovative ideas and bring them to life.
//         Join our community of backers and creators to make a difference together.
//       </p>
//     </AboutContainer>
//   );
// };

// const AboutContainer = styled.div`
//   text-align: center;
//   padding: 20px;
// `;

// const Logo = styled.img`
//   width: 200px; /* Adjust the size as needed */
//   height: 200px; /* Adjust the size as needed */
// `;

// const Quote = styled.div`
//   font-style: italic;
//   margin-bottom: 10px;
// `;

// export default AboutPage;
