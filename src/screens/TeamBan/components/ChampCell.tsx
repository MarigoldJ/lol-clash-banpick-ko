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
        className="champ-img"
        src={getLOLImgUrl({ size: "big", champ: champ })}
        alt={`img_${champ.id}`}
      />
      <div className="champ-name">{champ.name}</div>
    </Container>
  );
}

// Style
const Container = styled.div<{ clickable: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${(props) =>
    props.clickable &&
    css`
      :hover {
        filter: brightness(150%);
        cursor: pointer;
      }
    `}

  .champ-img {
    height: 90px;
  }

  .champ-name {
    margin: 13px 0px;
    color: rgb(200, 200, 200);
  }
`;
