import { ChampData } from ".";

type IProps = {
  size: "big" | "small";
  champ: ChampData;
};

export function getLOLImgUrl({ size, champ }: IProps) {
  if (size === "big") {
    return `http://ddragon.leagueoflegends.com/cdn/${champ.version}/img/champion/${champ.id}.png`;
  } else {
    return `http://ddragon.leagueoflegends.com/cdn/${champ.version}/img/champion/${champ.id}_0.png`;
  }
}
