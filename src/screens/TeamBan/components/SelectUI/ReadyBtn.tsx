import GameContext from "@screens/TeamBan/contexts/GameContext";
import fonts from "@styles/fonts";
import { getParamFromQueryStr } from "@utils/general";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function ReadyBtn() {
  const {
    sockDispatch,
    banpickData: {
      banpickInfo: { isBlueReady, isRedReady },
    },
  } = useContext(GameContext);

  // url에서 어느 팀인지 따오기
  const { search } = useLocation();
  const teamSide = getParamFromQueryStr(search, "team");

  const clickBtn = () => {
    // 서버에 현재 팀 ready 됐다고 메시지 보내기
    sockDispatch({
      type: "ready",
      payload: {
        team: teamSide,
      },
    });
  };

  // 현재 팀이 ready인지 아닌지에 따라 다른 컴포넌트 반환
  switch (teamSide) {
    case "blue":
      return isBlueReady ? (
        <SDiv>상대편 기다리는 중...</SDiv>
      ) : (
        <SButton onClick={clickBtn}>Ready</SButton>
      );
    case "red":
      return isRedReady ? (
        <SDiv>상대편 기다리는 중...</SDiv>
      ) : (
        <SButton onClick={clickBtn}>Ready</SButton>
      );
    default:
      return <SDiv>Error: 링크가 잘못되었습니다.</SDiv>;
  }
}

export default ReadyBtn;

// Style
const SButton = styled.button`
  width: 200px;
  height: 50px;

  ${fonts.H3}
`;

const SDiv = styled.div`
  color: white;
`;
