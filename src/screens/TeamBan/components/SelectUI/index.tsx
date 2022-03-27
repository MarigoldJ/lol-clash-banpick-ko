import { TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import PositionIcon from "./PositionIcon";

function SelectUI() {
  const [searchName, setSearchName] = useState<string>("");
  const onChangeSearchBox = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchName(event.target.value);
  };

  return (
    <Container>
      <div className="ui-navigation">
        <div className="ui-navigation-pos">
          <PositionIcon position="TOP" />
          <PositionIcon position="JUNGLE" />
          <PositionIcon position="MIDDLE" />
          <PositionIcon position="ADC" />
          <PositionIcon position="SUPPORT" />
        </div>
        <div className="ui-navigation-search">
          <ChampSearchBox
            id="champion-search-box"
            label="챔피언 명"
            value={searchName}
            onChange={onChangeSearchBox}
          />
        </div>
      </div>
      <div className="ui-champlist"></div>
      <div className="ui-button"></div>
    </Container>
  );
}

export default SelectUI;

// Style
const Container = styled.div`
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  div.ui-navigation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
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
