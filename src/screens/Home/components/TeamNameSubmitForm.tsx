import TeamSide from "@components/TeamSide";
import colors from "@styles/colors";
import fonts from "@styles/fonts";
import routes from "@utils/routes";
import getServerUrl from "@utils/server";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SubmitButton } from ".";

export default function TeamNameSubmitForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: { blueName: "", redName: "" },
  });

  const navigate = useNavigate();
  const submit = handleSubmit((teamNames) => {
    // 버튼 눌렀을 때
    // 서버에 gamecode 생성 요청.
    fetch(getServerUrl("create-link"), {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(teamNames),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // 데이터를 수신하면 링크 확인 페이지로 넘어감.
          console.log("Success for create Banpick Link!");
          navigate(routes.link, { state: data });
        } else {
          console.log("Server did not give data.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <form onSubmit={submit}>
      <Container>
        <TeamSection>
          <TeamSide side="blue">블루 팀</TeamSide>
          <input
            className="teamform-input"
            {...register("blueName", { required: true })}
            type="text"
            placeholder={"블루 팀명을 쓰세요."}
          />
        </TeamSection>
        <TeamSection>
          <TeamSide side="red">레드 팀</TeamSide>
          <input
            className="teamform-input"
            {...register("redName", { required: true })}
            type="text"
            placeholder={"레드 팀명을 쓰세요."}
          />
        </TeamSection>
        <SubmitButton disabled={!isValid} />
      </Container>
    </form>
  );
}

// Style
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TeamSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 20px;

  .teamform-input {
    ${fonts.Team}
    text-align: center;
    margin-left: 20px;
    padding: 10px;
    max-width: 500px;

    color: white;

    border: 3px ridge ${colors.gold};
    border-radius: 10px;

    :focus {
      border: 3px solid rgba(255, 255, 0, 0.7);
    }
  }
`;
