import colors from "@styles/colors";
import { CSSProperties, MouseEventHandler } from "react";
import styled, { css } from "styled-components";

type IProps = {
  position: "TOP" | "JUNGLE" | "MIDDLE" | "ADC" | "SUPPORT";
  selected: boolean;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLImageElement> | undefined;
};

export default function PositionIcon({
  position,
  selected,
  style,
  onClick,
}: IProps) {
  const imgUrl = `https://raw.githubusercontent.com/esports-bits/lol_images/master/role_lane_icons/${position}.png`;
  return (
    <StyledImg
      src={imgUrl}
      alt={position}
      style={style}
      selected={selected}
      onClick={onClick}
    />
  );
}

// Style
const StyledImg = styled.img<{ selected: boolean }>`
  height: 50px;

  :hover {
    cursor: pointer;
    opacity: 1;
  }

  ${(props) =>
    props.selected
      ? css`
          opacity: 1;
          border-bottom: 3px solid ${colors.plainGold};
        `
      : css`
          opacity: 0.5;
        `}
`;
