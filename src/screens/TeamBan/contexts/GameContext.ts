import { fakeBanpickInfo } from "@utils/general";
import { ChampData, ClientBanpickData } from "@utils/type";
import { createContext, Dispatch } from "react";
import { banpickInfoAction } from "../reducers/banpickInfoReducer";
import { socketAction } from "../reducers/socketReducer";

type GameContextProps = {
  banpickData: {
    banpickInfo: ClientBanpickData;
    banpickInfoDispatch: Dispatch<banpickInfoAction>;
  };

  champList: Array<ChampData>;

  sockDispatch: Dispatch<socketAction>;
};

const GameContext = createContext<GameContextProps>({
  banpickData: {
    banpickInfo: fakeBanpickInfo,
    banpickInfoDispatch: (value: banpickInfoAction) => {},
  },
  champList: [],
  sockDispatch: (value: socketAction) => {},
});

export default GameContext;
