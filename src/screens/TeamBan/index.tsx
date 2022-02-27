import TeamSide from "@components/TeamSide";
import LoadChampList from "@hooks/LoadChampList";
import LoadVersion from "@hooks/LoadVersion";
import { ImageList, ImageListItem, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { ChampCell, PositionIcon } from "./components";

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

  // TODO: teamName을 서버에서 불러오기
  const teamName = {
    blueName: "블루팀명",
    redName: "레드팀명",
  };

  return (
    <Container>
      <div className="teamban-main">
        <div className="teamban-header">
          <TeamSide side="blue">{teamName.blueName}</TeamSide>
          <div>:26</div>
          <TeamSide side="red">{teamName.redName}</TeamSide>
        </div>
        <div className="teamban-body">
          <div className="teamban-body-side">
            <div className="champ-picked">
              <ChampPicked />
              <ChampPicked />
              <ChampPicked />
              <ChampPicked />
              <ChampPicked />
            </div>
            <div className="champ-banned">
              <ChampBanned />
              <ChampBanned />
              <ChampBanned />
              <ChampBanned />
              <ChampBanned />
            </div>
          </div>

          <div className="teamban-body-center">
            <div className="search">
              <div className="search-positions">
                <PositionIcon position="TOP" selected={false} />
                <PositionIcon position="JUNGLE" selected={false} />
                <PositionIcon position="MIDDLE" selected={false} />
                <PositionIcon position="ADC" selected={true} />
                <PositionIcon position="SUPPORT" selected={false} />
              </div>
              <ChampSearchBox
                id="champion-search-box"
                label="챔피언 명"
                value={champName}
                onChange={handleChampName}
              />
            </div>
            <ChampListContainer cols={6}>
              {champList.map((champ: any) => (
                <ImageListItem key={`champ_${champ.id}`}>
                  <ChampCell clickable={true} champ={champ} />
                </ImageListItem>
              ))}
            </ChampListContainer>
            <div className="buttons"></div>
          </div>

          <div className="teamban-body-side">
            <div className="champ-picked">
              <ChampPicked />
              <ChampPicked />
              <ChampPicked />
              <ChampPicked />
              <ChampPicked />
            </div>
            <div className="champ-banned">
              <ChampBanned />
              <ChampBanned />
              <ChampBanned />
              <ChampBanned />
              <ChampBanned />
            </div>
          </div>
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

  /* Layout */
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
    height: 800px;

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

  /* Center */
  .search {
    width: 750px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .search-positions {
    img {
      margin: 0px 5px;
    }
  }
  .buttons {
    padding: 10px;
    height: 104px;
  }

  /* Side */
  .champ-picked {
    width: ${WIDTH_BODY_SIDE}px;
  }
  .champ-banned {
    width: ${WIDTH_BODY_SIDE}px;
    height: ${WIDTH_BODY_SIDE / 5}px;

    display: flex;
    flex-direction: row;
  }
`;

const ChampSearchBox = styled(TextField)`
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

const ChampListContainer = styled(ImageList)`
  margin: 20px 0px;
  width: 750px;
  height: 600px;
  gap: 5px;

  ::-webkit-scrollbar {
    width: 0.4em;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;

const ChampPicked = styled.div`
  height: 147px;
  background-color: rgb(20, 20, 20);
  border: 1px solid grey;
`;
const ChampBanned = styled.div`
  width: 25%;
  background-color: rgb(20, 20, 20);
  border: 1px solid grey;
`;
