import TeamSide from "@components/TeamSide";
import styled from "styled-components";
import Timer from "./Timer";

type IProps = {
  blueName: string;
  redName: string;
};

function PickBanHeader({ blueName, redName }: IProps) {
  return (
    <Container>
      <TeamSide side="blue">{blueName}</TeamSide>
      <Timer startTime={26} />
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
