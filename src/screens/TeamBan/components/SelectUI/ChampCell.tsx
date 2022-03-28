import { getLOLImgUrl } from "@utils/general";
import { ChampData } from "@utils/type";
import styled, { css } from "styled-components";

type IProps = {
  clickable: boolean;
  champ: ChampData;
  onClick?: (arg: string | undefined) => void;
};

export default function ChampCell({ clickable, champ, onClick }: IProps) {
  const handleClick = () => {
    if (clickable) {
      if (onClick !== undefined) {
        onClick(champ.id);
      }
    }
  };

  return (
    <Container clickable={clickable} onClick={handleClick}>
      <img
        className="champ-img"
        src={getLOLImgUrl({ type: "square", champ: champ })}
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
    props.clickable
      ? css`
          :hover {
            filter: brightness(150%);
            cursor: pointer;
          }
          :active {
            filter: brightness(200%);
            cursor: pointer;
          }
        `
      : css`
          filter: brightness(25%);
        `}

  .champ-img {
    max-width: 100%;
  }

  .champ-name {
    margin: 13px 0px;

    color: rgb(200, 200, 200);
    font-size: 15px;
    letter-spacing: -0.01em;
  }
`;
