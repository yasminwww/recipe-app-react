import React from "react";
import styled from "styled-components";
import spices from "../images/spices.jpg";

const Wrapper = styled.div`
  min-height: calc(100vh - 56px);
  background: url(${spices}) no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  h2 {
    font-family: "Questrial", sans-serif;
    font-weight: bold;
  }
  p {
  }
`;

const About = () => {
  return (
    <Wrapper>
      <h2>For those who are passionate about cooking.</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </Wrapper>
  );
};

export default About;
