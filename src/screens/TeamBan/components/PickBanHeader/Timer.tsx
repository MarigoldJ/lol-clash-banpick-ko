import fonts from "@styles/fonts";
import { useEffect, useState } from "react";
import styled from "styled-components";

type IProps = {
  startTime: number;
};

function Timer({ startTime }: IProps) {
  const [seconds, setSeconds] = useState<number>(startTime);
  const filterOnlyNonNegative = (num: number) => (num < 0 ? 0 : num);

  useEffect(() => {
    // 1000 ms마다 카운트다운
    const countdown = setInterval(() => {
      setSeconds(filterOnlyNonNegative(seconds - 1));
    }, 1000);
    return () => clearInterval(countdown);
  }, [seconds]);
  return <Container>{`:${seconds}`}</Container>;
}

export default Timer;

// Style
const Container = styled.div`
  color: white;
  ${fonts.H1}
`;
