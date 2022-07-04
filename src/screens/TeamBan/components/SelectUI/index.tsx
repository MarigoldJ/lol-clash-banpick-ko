import GameContext from "@screens/TeamBan/contexts/GameContext";
import { useContext } from "react";
import styled from "styled-components";
import ChampListContainer from "./ChampListContainer";
import ChampSearchBox from "./ChampSearchBox";
import PositionIcon from "./PositionIcon";
import ReadyBtn from "./ReadyBtn";
import SelectBtn from "./SelectBtn";

function SelectUI() {
  // banpickInfo에서 ready 정보 가져오기
  const {
    banpickData: {
      banpickInfo: { isBlueReady, isRedReady },
    },
  } = useContext(GameContext);

  return (
    <Container>
      <div className="ui-navigation">
        <div className="ui-navigation-pos">
          <PositionIcon pos="TOP" />
          <PositionIcon pos="JUNGLE" />
          <PositionIcon pos="MIDDLE" />
          <PositionIcon pos="ADC" />
          <PositionIcon pos="SUPPORT" />
        </div>
        <div className="ui-navigation-search">
          <ChampSearchBox />
        </div>
      </div>
      <div className="ui-champlist">
        <ChampListContainer />
      </div>
      <div className="ui-button">
        {isBlueReady && isRedReady ? <SelectBtn /> : <ReadyBtn />}
      </div>
    </Container>
  );
}

export default SelectUI;

// Style
const Container = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  div.ui-navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
  }
  div.ui-champlist {
    margin-top: 30px;
    width: 100%;
  }
  div.ui-button {
    margin-top: 30px;
    width: 100%;

    display: flex;
    justify-content: center;
  }
`;
