import { ImageListItemBar } from "@mui/material";
import { getLOLImgUrl } from "@utils/general";
import { ChampData } from "@utils/type";
import styled, { css } from "styled-components";

type IProps = {
  clickable: boolean;
  champ: ChampData;
};

export default function ChampCell({ clickable, champ }: IProps) {
  return (
    <Container clickable={clickable}>
      <img
        src={getLOLImgUrl({ size: "big", champ: champ })}
        alt={`img_${champ.id}`}
      />
      <ImageListItemBar title={champ.name} position="below" />
    </Container>
  );
}

// Style
const Container = styled.div<{ clickable: boolean }>`
  ${(props) =>
    props.clickable &&
    css`
      :hover {
        filter: brightness(150%);
        cursor: pointer;
      }
    `}
`;
