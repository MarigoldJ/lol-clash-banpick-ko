import { ChampData } from ".";

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
