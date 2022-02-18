import colors from "@styles/colors";
import fonts from "@styles/fonts";
import styled from "styled-components";

type ISide = "blue" | "red";

export default function TeamSide({ side }: { side: ISide }) {
  const isBlue = side === "blue";

  const color = isBlue ? colors.blue : colors.red;
  const sideName = isBlue ? "블루" : "레드";

  return (
    <TeamTextContainer teamColor={color}>{`${sideName} 팀`}</TeamTextContainer>
  );
}

// Style
const TeamTextContainer = styled.div<{ teamColor: string }>`
  ${fonts.Team}
  color: ${(props) => props.teamColor};
  text-align: center;
  text-shadow: 3px 3px 3px black;

  white-space: nowrap;
`;
