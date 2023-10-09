import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import styled from 'styled-components';
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  margin: 0 130px 60px 130px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  box-shadow: 0px 4px 8px 0px #757575;
  border-radius: 0px;
  width: 100%;
  @media (max-width: 576px) {
    /* CSS styles for mobile devices */
  
    /* Reduce the width of the card container */
    .card-container {
      width: 90%;
    }}
`;

const CardImage = styled.div`
  padding: 30px;
  height: 75%;
  width: 75%;
 
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;
`;

const CardContentRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const BorderLine = styled.div`
  border-right: 1px solid #e0e0e0;
`;

const Line = styled.div`
  height: 1px;
  width: 45%;
  background-color: #e0e0e0;
  margin-top: 10px;
`;

const Or = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid lightgray;
  border-radius: 2px;
  margin-top: 5px;
  width: 100%;
  color: #138781;
  font-size: 1rem;
  letter-spacing: 1px;

  &:focus {
    box-shadow: none !important;
    outline: 1px solid #138781 !important;
    outline-width: 0px;
  }
`;

const TextArea = styled.textarea`
  padding: 10px 12px;
  border: 1px solid lightgray;
  border-radius: 2px;
  margin-top: 5px;
  width: 100%;
  color: #138781;
  font-size: 1rem;
  letter-spacing: 1px;

  &:focus {
    box-shadow: none !important;
    outline: 1px solid #138781 !important;
    outline-width: 0px;
  }
`;

const Button = styled.button`
  background-color: #1e1e2c;
  color: white;
  border-radius: 2px;
  margin-top: 15px;
  padding: 10px;

  &:hover {
    background-color: #000;
    color: white;
  }
`;

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please Provide all fields");
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });

      if (res.data.success) {
        toast.success(res.data.message);
        setname("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContactContainer className="contact" id="contact">
      <CardContainer className="card card0 border-0">
        <CardImage>
          <LightSpeed>
            <img
              src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.6232676.1690028639&semt=sph"
              alt="contact"
              className="image"
            />
          </LightSpeed>
        </CardImage>
        <CardContent>
          <CardContentRow>
            <h6>
              Contact With&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://www.linkedin.com/in/pragnesh-makwana-6812651b4/" target="_blank" rel="noopener noreferrer">
            <BsLinkedin color="blue" size={30} className="ms-2" />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://github.com/pragnesh21" target="_blank" rel="noopener noreferrer">
            <BsGithub color="white" size={30} className="ms-2" />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.instagram.com/21_2_pragnesh/" target="_blank" rel="noopener noreferrer">
            <BsInstagram color="purple" size={30} className="ms-2" />
          </a>
            </h6>
          </CardContentRow>

          <CardContentRow>
            <BorderLine />
            <Or className="or text-center">OR</Or>
            <BorderLine />
          </CardContentRow>

          <CardContentRow>
            <Input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="mb-3"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </CardContentRow>

          <CardContentRow>
            <Input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              className="mb-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </CardContentRow>

          <CardContentRow>
            <TextArea
              type="text"
              name="msg"
              placeholder="Write your message"
              className="mb-3"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </CardContentRow>

          <CardContentRow>
            <Button className="button" onClick={handleSubmit}>
              SEND MESSAGE
            </Button>
          </CardContentRow>
        </CardContent>
      </CardContainer>
    </ContactContainer>
  );
};

export default Contact;
