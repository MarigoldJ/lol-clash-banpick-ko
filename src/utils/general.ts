import { ChampData, ClientBanpickData } from "@utils/type";

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
