import LoadChampList from "@hooks/LoadChampList";
import LoadVersion from "@hooks/LoadVersion";
import { ImageList, ImageListItem, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { ChampCell } from "./components";

function TeamBan() {
  // const [champList, setChampLIst] = useState<Array<Object>>([]);
  const [champName, setChampName] = useState<string>("");
  const handleChampName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChampName(event.target.value);
  };

  const gameVersion = LoadVersion();
  const champList = LoadChampList({ gameVersion: gameVersion });

  // TODO: 이후 제거할 코드. 디버깅용.
  console.log("게임버전 :", gameVersion);
  console.log(champList);

  return (
    <div>
      <Content
        id="champion-search-box"
        label="챔피언 명"
        value={champName}
        onChange={handleChampName}
      />
      <ImageList cols={6} sx={{ width: 750, height: 800, gap: 5 }}>
        {champList.map((champ: any) => (
          <ImageListItem key={`champ_${champ.id}`}>
            <ChampCell clickable={true} champ={champ} />
          </ImageListItem>
        ))}
      </ImageList>
      <Sample>{gameVersion}</Sample>
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

const Sample = styled.div`
  color: white;
`;
