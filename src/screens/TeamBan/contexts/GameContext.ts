import { fakeBanpickInfo } from "@utils/general";
import { ChampData, ClientBanpickData } from "@utils/type";
import { createContext } from "react";

type GameContextProps = {
  banpickInfo: ClientBanpickData;
  champList: Array<ChampData>;
};

const GameContext = createContext<GameContextProps>({
  banpickInfo: fakeBanpickInfo,
  champList: [],
});

export default GameContext;
