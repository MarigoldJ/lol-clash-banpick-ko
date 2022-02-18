import { mainBgImg } from "@assets/image";
import BasicLayout from "@components/BasicLayout";
import TeamSide from "@components/TeamSide";
import { LinkCopyBtnContainer } from "./components";

function LinkInfo() {
  const teamName = { blueName: "블루블루", redName: "레드레드" };

  return (
    <BasicLayout bgImg={mainBgImg}>
      <LinkCopyBtnContainer link="ss">
        <TeamSide side="blue">{`팀:${teamName.blueName}`}</TeamSide>
      </LinkCopyBtnContainer>
      <LinkCopyBtnContainer link="ss">
        <TeamSide side="red">{`팀:${teamName.redName}`}</TeamSide>
      </LinkCopyBtnContainer>
      <LinkCopyBtnContainer link="ss">
        <TeamSide side="none">{"관전자"}</TeamSide>
      </LinkCopyBtnContainer>
    </BasicLayout>
  );
}

export default LinkInfo;
