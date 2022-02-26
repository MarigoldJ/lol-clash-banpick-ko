import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

function TeamBan() {
  const [champList, setChampLIst] = useState<Array<Object>>([]);
  const [champName, setChampName] = useState<string>("");
  const handleChampName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChampName(event.target.value);
  };

  // TODO: 이후 제거할 코드. 디버깅용.
  console.log(champList);

  useEffect(() => {
    if (champList.length === 0) {
      const requestURL =
        "https://ddragon.leagueoflegends.com/cdn/11.23.1/data/ko_KR/champion.json";
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
  }, [champList]);
  return (
    <div>
      <Content
        id="champion-search-box"
        label="챔피언 명"
        value={champName}
        onChange={handleChampName}
      />
    </div>
  );
}

export default TeamBan;

const Content = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & label {
    color: gray;
  }

  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: gray;
    }
    &:hover fieldset {
      border-color: white;
    }
    &.Mui-focused fieldset {
      border-color: white;
    }

    & input {
      color: white;
    }
  }
`;
