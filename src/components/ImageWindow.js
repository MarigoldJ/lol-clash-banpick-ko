import styled from "styled-components";

const ImageWindow = styled.img`
  margin: 5px;
  border: ${(props) =>
    props.isCurrentPhase
      ? `3px solid ${props.activationColor}`
      : "1px solid gray"};
  animation: ${(props) =>
    props.isCurrentPhase ? "blink 2s ease-in-out infinite" : null};
  @keyframes blink {
    50% {
      opacity: 0.45;
    }
  }
`;

export default ImageWindow;
