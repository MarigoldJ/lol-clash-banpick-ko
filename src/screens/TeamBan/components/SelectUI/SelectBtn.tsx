import GameContext from "@screens/TeamBan/contexts/GameContext";
import fonts from "@styles/fonts";
import { useContext } from "react";
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

  return (
    <SButton onClick={clickBtn} disabled={!selectedChampId}>
      선택 완료
    </SButton>
  );
}

export default SelectBtn;

// Style
const SButton = styled.button`
  width: 200px;
  height: 50px;

  ${fonts.H3}
`;
