import { fakeBanpickInfo } from "@utils/general";
import { ClientBanpickData } from "@utils/type";
import { createContext } from "react";

type GameContextProps = {
  banpickInfo: ClientBanpickData;
};

const GameContext = createContext<GameContextProps>({
  banpickInfo: fakeBanpickInfo,
});

export default GameContext;
