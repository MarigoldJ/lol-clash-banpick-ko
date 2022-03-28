import colors from "@styles/colors";
import fonts from "@styles/fonts";
import { ReactNode, useState } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { TailSpin } from "react-loader-spinner";
import { Tooltip } from "@mui/material";

type IProps = {
  children: ReactNode | null;
  link: string;
};

export default function LinkCopyBtnContainer({ children, link }: IProps) {
  const isLoaded = link !== "";
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <Container>
      {children}
      {isLoaded ? (
        <CopyToClipboard text={link}>
          <Tooltip
            title="복사 완료!"
            leaveDelay={1500}
            placement="right"
            open={showTooltip}
            onClick={() => {
              setShowTooltip(true);
            }}
            onClose={() => {
              setShowTooltip(false);
            }}
          >
            <button className="link-copy-btn">링크 복사</button>
          </Tooltip>
        </CopyToClipboard>
      ) : (
        <TailSpin color={"rgb(255,255,255)"} height={30} width={130} />
      )}
    </Container>
  );
}

// Style
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 15px 5px;

  .link-copy-btn {
    margin-left: 30px;
    padding: 5px 10px;

    background-color: ${colors.darkBlue};
    color: ${colors.lightBlue};
    ${fonts.H4};

    border-width: 1px;
    border-style: outset;
    border-color: ${colors.gold};
    border-radius: 3px;

    :hover {
      filter: brightness(150%);
      cursor: pointer;
    }
  }
`;
