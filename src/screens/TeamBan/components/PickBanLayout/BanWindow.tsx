import colors from "@styles/colors";
import styled, { css } from "styled-components";

type IProps = {
  currentPhase: boolean;
  imgUrl: string;
  teamColor: "red" | "blue";
};

function BanWindow(props: IProps) {
  return (
    <Container {...props}>
      <div className="banwindow-content" />
    </Container>
  );
}

export default BanWindow;

// Style
const Container = styled.div<IProps>`
  position: relative;
  width: 20%;
  padding-top: 20%;

  border: 2px solid black;

  ${(props) =>
    props.imgUrl &&
    css`
      background-image: ${`url(${props.imgUrl})`};
      background-position: center;
      background-size: cover;
    `}
  ${(props) =>
    props.teamColor === "blue" &&
    css`
      transform: scaleX(-1);
    `}

  .banwindow-content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    font-size: 20px;

    background: linear-gradient(
      to top,
      ${(props) => (props.teamColor === "blue" ? colors.blue : colors.red)} 0%,
      rgba(0, 0, 0, 0) 80%
    );
    opacity: 0;

    ${(props) =>
      props.currentPhase &&
      css`
        animation: blink 2s ease-in-out infinite;
      `}

    @keyframes blink {
      50% {
        opacity: 0.75;
      }
    }
  }
`;
