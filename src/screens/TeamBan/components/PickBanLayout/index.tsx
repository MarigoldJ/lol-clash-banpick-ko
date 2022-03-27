import { ReactNode } from "react";
import styled from "styled-components";

type IProps = {
  children: ReactNode | null;
};

function PickBanLayout({ children }: IProps) {
  return <Container>{children}</Container>;
}

export default PickBanLayout;

// Style
const Container = styled.div``;
