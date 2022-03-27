export type TeamColor = "red" | "blue";

export type ChampData = {
  id: string | undefined;
  key: string | undefined;
  name: string | undefined;
  title: string | undefined;
  version: string | undefined;
};

export type ServerBanpickData = {
  isBlueReady: string;
  isRedReady: string;
  phase: string;
  startTime: string;
  blueName: string;
  redName: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  13: string;
  14: string;
  15: string;
  16: string;
  17: string;
  18: string;
  19: string;
  20: string;
};

export type ClientBanpickData = {
  [index: number]: any; // 나중에 index를 인수로 받기 위함.
  isBlueReady: boolean;
  isRedReady: boolean;
  phase: number;
  startTime: number;
  blueName: string;
  redName: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  7: string;
  8: string;
  9: string;
  10: string;
  11: string;
  12: string;
  13: string;
  14: string;
  15: string;
  16: string;
  17: string;
  18: string;
  19: string;
  20: string;
};
