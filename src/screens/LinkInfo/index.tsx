import { mainBgImg } from "@assets/image";
import BasicLayout from "@components/BasicLayout";
import TeamSide from "@components/TeamSide";
import { LinkCopyBtnContainer } from "./components";

function LinkInfo() {
  // TODO: 팀 이름은 Home 페이지에서 넘겨받기
  const teamName = { blueName: "블루블루", redName: "레드레드" };

  // TODO: 밴픽 링크 서버에서 받아오기
  const banpickLink = {
    blue: "blue team link",
    red: "red team link",
    obs: "observer Link",
  };

  return (
    <BasicLayout bgImg={mainBgImg}>
      <LinkCopyBtnContainer link={banpickLink.blue}>
        <TeamSide side="blue">{`팀:${teamName.blueName}`}</TeamSide>
      </LinkCopyBtnContainer>
      <LinkCopyBtnContainer link={banpickLink.red}>
        <TeamSide side="red">{`팀:${teamName.redName}`}</TeamSide>
      </LinkCopyBtnContainer>
      <LinkCopyBtnContainer link={banpickLink.obs}>
        <TeamSide side="none">{"관전자"}</TeamSide>
      </LinkCopyBtnContainer>
    </BasicLayout>
  );
}

export default LinkInfo;
