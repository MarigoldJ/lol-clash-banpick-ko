import { ReactNode } from "react";
import styled from "styled-components";

type IProps = {
  children: ReactNode;
};

export default function ErrorMsg({ children }: IProps) {
  return <Container>{children}</Container>;
}

// Style
const Container = styled.div`
  color: red;
`;
