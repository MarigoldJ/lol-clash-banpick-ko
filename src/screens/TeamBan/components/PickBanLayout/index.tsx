import { ReactNode } from "react";
import styled from "styled-components";

type IProps = {
  children: ReactNode | null;
};

function PickBanLayout({ children }: IProps) {
  return (
    <Container>
      <div className="side">
        <div className="windows-pick"></div>
        <div className="windows-ban"></div>
      </div>

      <div className="center">{children}</div>

      <div className="side">
        <div className="windows-pick"></div>
        <div className="windows-ban"></div>
      </div>
    </Container>
  );
}

export default PickBanLayout;

// Style
const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  .side {
    flex: 2;
    background-color: rgb(30, 30, 30);

    .windows-pick {
      width: 100%;
    }

    .windows-ban {
      width: 100%;
    }
  }
  .center {
    flex: 5;
  }
`;
