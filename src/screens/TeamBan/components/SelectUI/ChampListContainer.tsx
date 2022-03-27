import { ImageList, ImageListItem } from "@mui/material";
import GameContext from "@screens/TeamBan/contexts/GameContext";
import { ChampData } from "@utils/type";
import { useContext } from "react";
import styled from "styled-components";
import ChampCell from "./ChampCell";

function ChampListContainer() {
  const { champList } = useContext(GameContext);

  const clickChamp = (champId: string | undefined) => {
    // 선택한 챔피언 밴픽 window에 띄우기
    // banpickInfo 수정하기
  };

  return (
    <Container>
      <div className="champlist-content">
        <ListContainer cols={6}>
          {champList.map((champ: ChampData) => (
            <ImageListItem key={`champ_${champ.id}`}>
              <ChampCell champ={champ} clickable={true} onClick={clickChamp} />
            </ImageListItem>
          ))}
        </ListContainer>
      </div>
    </Container>
  );
}

export default ChampListContainer;

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 80%;

  .champlist-content {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    font-size: 20px;
  }
`;

const ListContainer = styled(ImageList)`
  width: 100%;
  height: 100%;
  gap: 5px;

  ::-webkit-scrollbar {
    width: 0.4em;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
