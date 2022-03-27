import {
  fakeBanpickInfo,
  getParamFromQueryStr,
  parseBanpickData,
} from "@utils/general";
import getServerUrl from "@utils/server";
import { ChampData } from "@utils/type";
import { useEffect, useReducer, useState } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import PickBanHeader from "./components/PickBanHeader";
import PickBanLayout from "./components/PickBanLayout";
import SelectUI from "./components/SelectUI";
import GameContext from "./contexts/GameContext";
import { banpickInfoReducer } from "./reducers/banpickInfoReducer";
import { socketReducer } from "./reducers/socketReducer";

// 서버와 실시간 통신을 위한 socket 연결
const socket = io(getServerUrl("base"));

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

  // 서버와 연결
  const [sock, sockDispatch] = useReducer(socketReducer, socket);

  // 서버와 통신 : gameCode를 이용해서 banpickInfo 불러오기 (1회)
  const { search } = useLocation();
  const gameCode = getParamFromQueryStr(search, "game");
  useEffect(() => {
    sockDispatch({ type: "gamecode", payload: gameCode });
  }, [gameCode]);

  // 서버와 통신 : 서버에서 오는 메시지 기다리기
  useEffect(() => {
    // banpickInfo 받아오기
    sock.on("banpickPhase", (rawBanpickInfo) => {
      // 받은 데이터 parsing
      const newBanpickInfo = parseBanpickData(rawBanpickInfo);
      if (newBanpickInfo) {
        console.log("서버에서 밴픽정보 불러오기 완료!", newBanpickInfo.phase);
        banpickInfoDispatch({ type: "update", newBanpickInfo });
      }
    });

    // 다른 client에서 챔피언 select하는 정보 받아오기
    sock.on("selectBroad", (selectData) => {
      console.log("selectBroad 수신!!", selectData);
      banpickInfoDispatch({ type: "select", select: selectData });
    });
  }, []);

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
