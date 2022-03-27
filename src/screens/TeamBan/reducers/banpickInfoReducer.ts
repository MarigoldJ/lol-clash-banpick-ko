import { ClientBanpickData } from "@utils/type";

export type banpickInfoAction = {
  type: string;
  newBanpickInfo?: any;
  select?: { phase: number; champion: string };
};

export const banpickInfoReducer = (
  banpickInfo: ClientBanpickData,
  action: banpickInfoAction
) => {
  switch (action.type) {
    case "update":
      return action.newBanpickInfo;
    case "select":
      const currentPhase = action.select.phase;
      let newBanpickInfo = { ...banpickInfo };
      newBanpickInfo[currentPhase] = action.select.champion;
      return newBanpickInfo;
  }
};
