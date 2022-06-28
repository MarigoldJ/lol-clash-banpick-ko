import { TextField } from "@mui/material";
import GameContext from "@screens/TeamBan/contexts/GameContext";
import { ChangeEvent, useContext } from "react";
import styled from "styled-components";

function ChampSearchBox() {
  const {
    searchData: { searchName, changeSearchName },
  } = useContext(GameContext);
  const onChangeSearchBox = (event: ChangeEvent<HTMLInputElement>) => {
    changeSearchName(event.target.value);
  };

  return (
    <Container
      id="champion-search-box"
      label="챔피언 명"
      value={searchName}
      onChange={onChangeSearchBox}
    />
  );
}

export default ChampSearchBox;

// Style
const Container = styled(TextField)`
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
