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
  selectData: {
    selectedChampId: string;
    selectChamp: (champ: string) => void;
  };
  searchData: {
    searchName: string;
    changeSearchName: (newSearchName: string) => void;
  };

  champList: Array<ChampData>;
  sockDispatch: Dispatch<socketAction>;
};

const GameContext = createContext<GameContextProps>({
  banpickData: {
    banpickInfo: fakeBanpickInfo,
    banpickInfoDispatch: (value: banpickInfoAction) => {},
  },
  selectData: {
    selectedChampId: "",
    selectChamp: (champ: string) => {},
  },
  searchData: {
    searchName: "",
    changeSearchName: (newSearchName: string) => {},
  },
  champList: [],
  sockDispatch: (value: socketAction) => {},
});

export default GameContext;
