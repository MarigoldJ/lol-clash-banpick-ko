import { fakeBanpickInfo } from "@utils/general";
import { ChampData, ClientBanpickData } from "@utils/type";
import { createContext, Dispatch } from "react";
import { banpickInfoAction } from "../reducers/banpickInfoReducer";

type GameContextProps = {
  banpickData: {
    banpickInfo: ClientBanpickData;
    banpickInfoDispatch: Dispatch<banpickInfoAction>;
  };

  champList: Array<ChampData>;
};

const GameContext = createContext<GameContextProps>({
  banpickData: {
    banpickInfo: fakeBanpickInfo,
    banpickInfoDispatch: (value: banpickInfoAction) => {},
  },
  champList: [],
});

export default GameContext;
