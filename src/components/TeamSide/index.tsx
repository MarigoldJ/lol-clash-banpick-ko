import colors from "@styles/colors";
import fonts from "@styles/fonts";
import { ReactNode } from "react";
import styled from "styled-components";

type IProps = {
  side: "blue" | "red" | "none";
  children: ReactNode;
};

export default function TeamSide({ side, children }: IProps) {
  let color = "none";
  switch (side) {
    case "blue":
      color = colors.blue;
      break;
    case "red":
      color = colors.red;
      break;
    default:
      color = "rgb(200,200,200)";
      break;
  }

  return <TeamTextContainer teamColor={color}>{children}</TeamTextContainer>;
}

// Style
const TeamTextContainer = styled.div<{ teamColor: string }>`
  ${fonts.Team}
  color: ${(props) => props.teamColor};
  text-align: center;
  text-shadow: 3px 3px 3px black;

  white-space: nowrap;
`;
