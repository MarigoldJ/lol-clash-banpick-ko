import colors from "@styles/colors";
import fonts from "@styles/fonts";
import { ReactNode, useState } from "react";
import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

type IProps = {
  children: ReactNode | null;
  link: string;
};

export default function LinkCopyBtnContainer({ children, link }: IProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  return (
    <Container>
      {children}
      <CopyToClipboard
        text={link}
        onCopy={() => {
          setIsCopied(true);
        }}
      >
        <button className="link-copy-btn">
          {isCopied ? "복사 완료" : "링크 복사"}
        </button>
      </CopyToClipboard>
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
