import { fakeBanpickInfo } from "@utils/general";
import { ChampData, ClientBanpickData } from "@utils/type";
import styled from "styled-components";
import PickBanHeader from "./components/PickBanHeader";
import PickBanLayout from "./components/PickBanLayout";
import SelectUI from "./components/SelectUI";
import GameContext from "./contexts/GameContext";

function TeamBan() {
  // TODO: 서버에서 받아온 BanpickInfo로 대체할 것
  const banpickInfo: ClientBanpickData = fakeBanpickInfo;
  const champList: Array<ChampData> = [];

  return (
    <GameContext.Provider value={{ banpickInfo, champList }}>
      <Container>
        <PickBanHeader
          blueName={banpickInfo.blueName}
          redName={banpickInfo.redName}
        />
        <PickBanLayout>
          <SelectUI />
        </PickBanLayout>
      </Container>
    </GameContext.Provider>
  );
}

export default TeamBan;

const Container = styled.div``;
