import GameContext from "@screens/TeamBan/contexts/GameContext";
import { getLOLImgUrl } from "@utils/general";
import { ReactNode, useContext } from "react";
import styled from "styled-components";
import BanWindow from "./BanWindow";
import PickWindow from "./PickWindow";

type IProps = {
  children: ReactNode | null;
};

function PickBanLayout({ children }: IProps) {
  // gameContext 가져오기
  const {
    banpickData: { banpickInfo },
    champList,
  } = useContext(GameContext);

  // function: 해당 phase의 window에 해당 champId의 이미지 url 불러오기
  const getImgUrl = (phase: number, champId: string) => {
    const tempChamp = champList.find((champ) => champ.id === champId);
    const tempType = [7, 8, 9, 10, 11, 12, 17, 18, 19, 20].includes(phase)
      ? "splash"
      : "square";

    const tempURL = getLOLImgUrl({ type: tempType, champ: tempChamp });
    return tempURL;
  };

  // banpick window 배경 url 리스트
  const windowImgUrlList: Array<string> = Array.from(Array(21).keys()).map(
    (phase) => {
      if (phase > 0) {
        return getImgUrl(phase, banpickInfo[phase]);
      } else {
        return "";
      }
    }
  );

  return (
    <Container>
      <div className="side">
        <div className="windows-pick">
          {[7, 10, 11, 18, 19].map((phase) => (
            <PickWindow
              key={`phase_${phase}`}
              currentPhase={phase === banpickInfo.phase}
              imgUrl={windowImgUrlList[phase]}
              teamColor="blue"
            />
          ))}
        </div>
        <div className="windows-ban">
          {[1, 3, 5, 14, 16].map((phase) => (
            <BanWindow
              key={`phase_${phase}`}
              currentPhase={phase === banpickInfo.phase}
              imgUrl={windowImgUrlList[phase]}
              teamColor="blue"
            />
          ))}
        </div>
      </div>

      <div className="center">{children}</div>

      <div className="side">
        <div className="windows-pick">
          {[8, 9, 12, 17, 20].map((phase) => (
            <PickWindow
              key={`phase_${phase}`}
              currentPhase={phase === banpickInfo.phase}
              imgUrl={windowImgUrlList[phase]}
              teamColor="red"
            />
          ))}
        </div>
        <div className="windows-ban">
          {[15, 13, 6, 4, 2].map((phase) => (
            <BanWindow
              key={`phase_${phase}`}
              currentPhase={phase === banpickInfo.phase}
              imgUrl={windowImgUrlList[phase]}
              teamColor="red"
            />
          ))}
        </div>
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
      display: flex;
    }
  }
  .center {
    flex: 5;
  }
`;
