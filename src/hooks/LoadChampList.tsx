import { useEffect, useState } from "react";

type IProps = {
  gameVersion: string;
};

export default function LoadChampList({ gameVersion }: IProps) {
  const [champList, setChampLIst] = useState<Array<Object>>([]);

  useEffect(() => {
    if (gameVersion !== "") {
      const requestURL = `https://ddragon.leagueoflegends.com/cdn/${gameVersion}/data/ko_KR/champion.json`;
      const request = new XMLHttpRequest();
      request.open("GET", requestURL);
      request.responseType = "json";
      request.send();

      request.onload = () => {
        console.log("Champion loaded!");
        const { data }: { data: Array<Object> } = request.response;
        const chlist: Array<Object> = Object.values(data).sort(
          (a: any, b: any) => {
            if (a.name < b.name) {
              return -1;
            } else if (a.name > b.name) {
              return 1;
            } else {
              return 0;
            }
          }
        );

        setChampLIst(chlist);
      };
    }
  }, [gameVersion]);

  return champList;
}
