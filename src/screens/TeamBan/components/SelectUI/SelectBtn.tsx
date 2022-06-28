import GameContext from "@screens/TeamBan/contexts/GameContext";
import fonts from "@styles/fonts";
import { getParamFromQueryStr, isMyTurn } from "@utils/general";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function SelectBtn() {
  const {
    banpickData: { banpickInfo },
    selectData: { selectedChampId },
    sockDispatch,
  } = useContext(GameContext);

  const clickBtn = () => {
    // 서버에 밴픽 done 메시지 보내기
    sockDispatch({
      type: "done",
      payload: {
        phase: banpickInfo.phase,
        champion: selectedChampId,
      },
    });
  };

  // url에서 어느 팀인지 따오기
  const { search } = useLocation();
  const teamSide = getParamFromQueryStr(search, "team");

  // 자신의 차례일때만 선택완료 버튼 반환
  if (isMyTurn(banpickInfo.phase, teamSide)) {
    return (
      <SButton onClick={clickBtn} disabled={!selectedChampId}>
        선택 완료
      </SButton>
    );
  } else {
    return null;
  }
}

export default SelectBtn;

// Style
const SButton = styled.button`
  width: 200px;
  height: 50px;

  ${fonts.H3}
`;
