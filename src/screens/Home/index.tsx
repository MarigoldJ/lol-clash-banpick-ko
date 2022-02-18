import styled from "styled-components";
import { mainBgImg } from "@assets/image";
import { TeamNameSubmitForm } from "./components";

function Home() {
  return (
    <Container bgImg={mainBgImg}>
      <div className="home-main">
        <BgOpacityBlack />
        <div className="home-contents">
          <TeamNameSubmitForm />
        </div>
      </div>
    </Container>
  );
}

export default Home;

// Style
const Container = styled.div<{ bgImg: string }>`
  position: relative;

  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${(props) => props.bgImg});
  background-size: cover;
  background-position: center;

  .home-main {
    width: 70%;
    height: 70%;
    max-height: 50vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .home-contents {
    z-index: 3;
  }
`;

const BgOpacityBlack = styled.div`
  position: absolute;

  width: inherit;
  height: inherit;

  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 10px;
`;
