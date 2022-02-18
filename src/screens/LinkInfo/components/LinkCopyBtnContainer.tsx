import colors from "@styles/colors";
import fonts from "@styles/fonts";
import { ReactNode } from "react";
import styled from "styled-components";

type IProps = {
  children: ReactNode | null;
  link: string;
};

export default function LinkCopyBtnContainer({ children, link }: IProps) {
  return (
    <Container link={link}>
      {children}
      <button className="link-copy-btn">링크 복사</button>
    </Container>
  );
}

// Style
const Container = styled.div<{ link: string }>`
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
