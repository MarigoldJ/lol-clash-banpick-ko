import { TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

function TeamBan() {
  const [champName, setChampName] = useState<string>("");
  const handleChampName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChampName(event.target.value);
  };

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
