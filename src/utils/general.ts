import { ChampData, ClientBanpickData, ServerBanpickData } from "@utils/type";

type IProps = {
  type: "splash" | "loading" | "square";
  champ: ChampData | undefined;
};

export function getLOLImgUrl({ type, champ }: IProps) {
  if (champ !== undefined) {
    switch (type) {
      case "splash":
        return `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ.id}_0.jpg`;
      case "loading":
        return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`;
      default:
        // square
        return `http://ddragon.leagueoflegends.com/cdn/${champ.version}/img/champion/${champ.id}.png`;
    }
  }

  // champ === undefined
  return "";
}

export function getParamFromQueryStr(queryStr: string, param: string) {
  // URL 링크 뒤에 붙는 Query에서 특정 param의 값 얻어오는 함수
  const tempURL = new URL("https://test.com/test" + queryStr);
  return tempURL.searchParams.get(param);
}

export function parseBanpickData(
  rawBanpickInfo: ServerBanpickData
): ClientBanpickData {
  // 서버에서 받아온 BanpickData는 모두 string형식이므로
  // 이를 number나 boolean으로 변경해주는 함수
  const newInfo: ClientBanpickData = {
    ...rawBanpickInfo,
    isBlueReady: JSON.parse(rawBanpickInfo.isBlueReady),
    isRedReady: JSON.parse(rawBanpickInfo.isRedReady),
    phase: parseInt(rawBanpickInfo.phase),
    startTime: parseInt(rawBanpickInfo.startTime),
  };
  return newInfo;
}

export const fakeBanpickInfo: ClientBanpickData = {
  isBlueReady: false,
  isRedReady: false,
  phase: 1,
  startTime: Date.now(),
  blueName: "",
  redName: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
  18: "",
  19: "",
  20: "",
};

export function isMyTurn(phase: number, teamSide: string) {
  // 현재 phase가 본인 팀 차례이면 true, 아니면 false를 반환

  // 각 팀의 phase
  const bluePhase = [1, 3, 5, 7, 10, 11, 14, 16, 18, 19];
  const redPhase = [2, 4, 6, 8, 9, 12, 13, 15, 17, 20];

  if (teamSide === "blue") {
    return bluePhase.includes(phase);
  } else if (teamSide === "red") {
    return redPhase.includes(phase);
  } else {
    return false;
  }
}
