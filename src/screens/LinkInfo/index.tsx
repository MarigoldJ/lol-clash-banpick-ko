import { mainBgImg } from "@assets/image";
import BasicLayout from "@components/BasicLayout";
import TeamSide from "@components/TeamSide";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BackToHomeBtn, ErrorMsg, LinkCopyBtnContainer } from "./components";

type IBanpickInfo = {
  teamName: {
    blueName: string;
    redName: string;
  };
  link: {
    blue: string;
    red: string;
    obs: string;
  };
};

function LinkInfo() {
  const [banpickInfo, setBanpickInfo] = useState<IBanpickInfo>({
    teamName: { blueName: "", redName: "" },
    link: { blue: "", red: "", obs: "" },
  });

  const [isWrong, setIsWrong] = useState<boolean>(false);
  const { state }: { state: any } = useLocation();

  useEffect(() => {
    if (!state) {
      setIsWrong(true);
    } else {
      // Home페이지에서 얻어온 state에서 밴픽 링크 얻기
      const { origin } = new URL(document.location.href);
      setBanpickInfo({
        teamName: {
          blueName: state.blue?.name,
          redName: state.red?.name,
        },
        link: {
          blue: origin + state.blue?.pathname,
          red: origin + state.red?.pathname,
          obs: origin + state.observer?.pathname,
        },
      });
    }
  }, [state]);

  return (
    <BasicLayout bgImg={mainBgImg}>
      {isWrong && (
        <ErrorMsg>
          잘못된 링크로 접근하셨습니다. 팀 이름 입력 후 밴픽링크를 생성해주세요.
        </ErrorMsg>
      )}
      <LinkCopyBtnContainer link={banpickInfo.link.blue}>
        <TeamSide side="blue">{`팀:${banpickInfo.teamName.blueName}`}</TeamSide>
      </LinkCopyBtnContainer>
      <LinkCopyBtnContainer link={banpickInfo.link.red}>
        <TeamSide side="red">{`팀:${banpickInfo.teamName.redName}`}</TeamSide>
      </LinkCopyBtnContainer>
      <LinkCopyBtnContainer link={banpickInfo.link.obs}>
        <TeamSide side="none">{"관전자"}</TeamSide>
      </LinkCopyBtnContainer>

      <BackToHomeBtn />
    </BasicLayout>
  );
}

export default LinkInfo;
