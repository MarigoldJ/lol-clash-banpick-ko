import GameContext from "@screens/TeamBan/contexts/GameContext";
import fonts from "@styles/fonts";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

function Timer() {
  // gameContext에서 banpick의 startTime 값 불러오기
  const {
    banpickData: {
      banpickInfo: { startTime },
    },
  } = useContext(GameContext);

  // function: startTime과 현재 시간을 비교하여 남은 second 확인
  const getSecondLeft = (startTime: number) => {
    const now = Date.now();
    const retTimeLeft = Math.floor((startTime + 30 * 1000 - now) / 1000);

    return retTimeLeft < 0 ? 0 : retTimeLeft;
  };

  const [seconds, setSeconds] = useState<number>(getSecondLeft(startTime));

  useEffect(() => {
    // 1000 ms마다 카운트다운
    const countdown = setInterval(() => {
      setSeconds(getSecondLeft(startTime));
    }, 1000);
    return () => clearInterval(countdown);
  }, [startTime]);

  return <Container>{`:${seconds}`}</Container>;
}

export default Timer;

// Style
const Container = styled.div`
  color: white;
  ${fonts.H1}
`;
