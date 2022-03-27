import styled from "styled-components";

type IProps = {
  position: "TOP" | "JUNGLE" | "MIDDLE" | "ADC" | "SUPPORT";
};

export default function PositionIcon({ position }: IProps) {
  const imgUrl = `https://raw.githubusercontent.com/esports-bits/lol_images/master/role_lane_icons/${position}.png`;
  return <StyledImg src={imgUrl} alt={position} />;
}

// Style
const StyledImg = styled.img`
  height: 50px;
  opacity: 0.4;

  :hover {
    cursor: pointer;
    opacity: 1;
  }
  :active {
    cursor: pointer;
    filter: brightness(150%);
  }
`;
