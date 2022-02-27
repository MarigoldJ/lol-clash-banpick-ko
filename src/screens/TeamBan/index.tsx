import LoadChampList from "@hooks/LoadChampList";
import LoadVersion from "@hooks/LoadVersion";
import { ImageList, ImageListItem, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { ChampCell } from "./components";

const WIDTH = 1400;
const WIDTH_MIDDLE = 790;
const WIDTH_BODY_SIDE = (WIDTH - WIDTH_MIDDLE) / 2;

function TeamBan() {
  const [champName, setChampName] = useState<string>("");
  const handleChampName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChampName(event.target.value);
  };

  const gameVersion = LoadVersion();
  const champList = LoadChampList({ gameVersion: gameVersion });

  return (
    <Container>
      <div className="teamban-main">
        <div className="teamban-header">
          <div>블루팀</div>
          <div>:26</div>
          <div>레드팀</div>
        </div>
        <div className="teamban-body">
          <div className="teamban-body-side"></div>
          <div className="teamban-body-center">
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
          </div>
          <div className="teamban-body-side"></div>
        </div>
      </div>
    </Container>
  );
}

export default TeamBan;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;

  .teamban-main {
    width: ${WIDTH}px;
  }
  .teamban-header {
    padding: 10px 30px;

    width: 100%;
    height: 80px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    color: white;
  }
  .teamban-body {
    width: 100%;
    height: 800px

    display: flex;
    justify-content: space-between;
  }

  .teamban-body-side {
    width: ${WIDTH_BODY_SIDE}px;
  }
  .teamban-body-center {
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

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
