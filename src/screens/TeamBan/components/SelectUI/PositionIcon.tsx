import { Position } from "@utils/type";
import styled, { css } from "styled-components";
import { useContext } from "react";
import GameContext from "@screens/TeamBan/contexts/GameContext";

type IProps = {
  pos: Position;
};

export default function PositionIcon({ pos }: IProps) {
  const imgUrl = `https://raw.githubusercontent.com/esports-bits/lol_images/master/role_lane_icons/${pos}.png`;

  const {
    positionData: { position, changePosition },
  } = useContext(GameContext);
  const clickPosition = () => {
    changePosition(pos);
  };

  return (
    <StyledImg
      src={imgUrl}
      alt={pos}
      onClick={clickPosition}
      isSelected={position === pos}
    />
  );
}

// Style
const StyledImg = styled.img<{ isSelected: boolean }>`
  height: 50px;
  ${(props) =>
    props.isSelected
      ? css`
          opacity: 1;
          border-bottom: 5px solid rgba(200, 170, 110, 0.7);
        `
      : css`
          opacity: 0.4;
        `}

  :hover {
    cursor: pointer;
    opacity: 1;
  }
  :active {
    cursor: pointer;
    filter: brightness(150%);
  }
`;
