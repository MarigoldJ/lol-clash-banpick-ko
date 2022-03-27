import styled from "styled-components";
import PickBanHeader from "./components/PickBanHeader";
import PickBanLayout from "./components/PickBanLayout";
import SelectUI from "./components/SelectUI";

function TeamBan() {
  return (
    <Container>
      <PickBanHeader />
      <PickBanLayout>
        <SelectUI />
      </PickBanLayout>
    </Container>
  );
}

export default TeamBan;

const Container = styled.div``;
