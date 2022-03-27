import { fakeBanpickInfo } from "@utils/general";
import { ChampData } from "@utils/type";
import { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import PickBanHeader from "./components/PickBanHeader";
import PickBanLayout from "./components/PickBanLayout";
import SelectUI from "./components/SelectUI";
import GameContext from "./contexts/GameContext";
import { banpickInfoReducer } from "./reducers/banpickInfoReducer";

function TeamBan() {
  // 게임 기본 데이터(버전, 챔피언 리스트) 불러오기
  const [gameVersion, setGameVersion] = useState("");
  const [champList, setChampList] = useState<Array<ChampData>>([]);
  useEffect(() => {
    if (gameVersion === "") {
      // 패치 버전이 없는 경우 패치버전부터 불러오기
      const requestURL =
        "https://ddragon.leagueoflegends.com/api/versions.json";
      const request = new XMLHttpRequest();
      request.open("GET", requestURL);
      request.responseType = "json";
      request.send();

      request.onload = () => {
        console.log("LOL Version loaded!");
        const data = request.response;
        setGameVersion(data[0]);
      };
    } else {
      // 패치 버전이 있는 경우 챔피언 리스트 불러오기
      const requestURL = `https://ddragon.leagueoflegends.com/cdn/${gameVersion}/data/ko_KR/champion.json`;
      const request = new XMLHttpRequest();
      request.open("GET", requestURL);
      request.responseType = "json";
      request.send();

      request.onload = () => {
        console.log("Champion loaded!");
        const { data }: { data: Array<ChampData> } = request.response;
        const chlist: Array<ChampData> = Object.values(data).sort(
          (a: any, b: any) => {
            if (a.name < b.name) {
              return -1;
            } else if (a.name > b.name) {
              return 1;
            } else {
              return 0;
            }
          }
        );

        setChampList(chlist);
      };
    }
  }, [gameVersion]);

  // 밴픽 현황 정보
  const [banpickInfo, banpickInfoDispatch] = useReducer(
    banpickInfoReducer,
    fakeBanpickInfo
  );

  return (
    <GameContext.Provider
      value={{ banpickData: { banpickInfo, banpickInfoDispatch }, champList }}
    >
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
