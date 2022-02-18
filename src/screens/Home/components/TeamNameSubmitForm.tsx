import colors from "@styles/colors";
import fonts from "@styles/fonts";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { SubmitButton, TeamSide } from ".";

export default function TeamNameSubmitForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: { blueName: "", redName: "" },
  });

  const submit = handleSubmit((data) => {
    console.log(data);
    // TODO: 버튼 눌렀을 때 링크 생성 페이지로 넘어가도록 하기.
  });

  return (
    <form onSubmit={submit}>
      <Container>
        <TeamSection>
          <TeamSide side="blue" />
          <input
            className="teamform-input"
            {...register("blueName", { required: true })}
            type="text"
            placeholder={"블루 팀명을 쓰세요."}
          />
        </TeamSection>
        <TeamSection>
          <TeamSide side="red" />
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
