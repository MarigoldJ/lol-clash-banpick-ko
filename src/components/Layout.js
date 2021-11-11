import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: nowrap; */
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 100vh;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  width: 50%;
  border: 1px solid white;
`;

function Layout({ children }) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

export default Layout;
