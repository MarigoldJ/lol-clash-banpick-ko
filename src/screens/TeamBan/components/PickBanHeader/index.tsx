import TeamSide from "@components/TeamSide";
import GameContext from "@screens/TeamBan/contexts/GameContext";
import { useContext } from "react";
import styled from "styled-components";
import Timer from "./Timer";

function PickBanHeader() {
  const {
    banpickData: {
      banpickInfo: { blueName, redName },
    },
  } = useContext(GameContext);

  return (
    <Container>
      <TeamSide side="blue">{blueName}</TeamSide>
      <Timer />
      <TeamSide side="red">{redName}</TeamSide>
    </Container>
  );
}

export default PickBanHeader;

// Style
const Container = styled.div`
  padding: 10px 30px;

  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
