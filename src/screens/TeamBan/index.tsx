import { fakeBanpickInfo } from "@utils/general";
import { ClientBanpickData } from "@utils/type";
import styled from "styled-components";
import PickBanHeader from "./components/PickBanHeader";
import PickBanLayout from "./components/PickBanLayout";
import SelectUI from "./components/SelectUI";

function TeamBan() {
  // TODO: 서버에서 받아온 BanpickInfo로 대체할 것
  const banpickInfo: ClientBanpickData = fakeBanpickInfo;

  return (
    <Container>
      <PickBanHeader
        blueName={banpickInfo.blueName}
        redName={banpickInfo.redName}
      />
      <PickBanLayout>
        <SelectUI />
      </PickBanLayout>
    </Container>
  );
}

export default TeamBan;

const Container = styled.div``;
