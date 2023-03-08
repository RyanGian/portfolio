import styled from "styled-components";

const Container = styled.footer`
  height: 60px;
   background-color: #999999;
  background-color: rgba(255, 255, 255, 0.25);
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

const Footer = () => {
  return (
    <Container>
      <div>Designed & Built by Ryan Gian | 2023 | ryan1gian@gmail.com</div>
    </Container>
  );
};

export default Footer;
