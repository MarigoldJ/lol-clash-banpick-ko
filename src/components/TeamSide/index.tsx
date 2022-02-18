import colors from "@styles/colors";
import fonts from "@styles/fonts";
import { ReactNode } from "react";
import styled from "styled-components";

type IProps = {
  side: "blue" | "red";
  children: ReactNode;
};

export default function TeamSide({ side, children }: IProps) {
  const isBlue = side === "blue";

  const color = isBlue ? colors.blue : colors.red;

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
