import styled from "styled-components";
import { TeamForm } from "@components/Team";

function Home() {
  return (
    <Container>
      <div className="home-main">
        <h1>Home</h1>
        <h1>Home</h1>
        <TeamForm teamColor={"blue"} />
        <TeamForm teamColor={"red"} />
      </div>
    </Container>
  );
}

export default Home;

// Style
const Container = styled.div`
  .home-main {
    position: absolute;
    left: 25%;
    top: 25%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 50%;
    height: 50%;

    width: 50%;
  }
`;
