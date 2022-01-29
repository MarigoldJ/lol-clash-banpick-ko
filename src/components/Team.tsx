import { useForm } from "react-hook-form";
import styled from "styled-components";
import colors from "@styles/colors";
import { TeamColor } from "@utils/type";
import fonts from "@styles/fonts";

export function TeamName({
  title,
  teamColor,
}: {
  title: string;
  teamColor: TeamColor;
}) {
  let color = colors.blue;
  if (teamColor === "red") {
    color = colors.red;
  }

  return <TeamNameContainer teamColor={color}>{title}</TeamNameContainer>;
}

export function TeamForm({ teamColor }: { teamColor: TeamColor }) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: { teamName: "" },
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  const isBlue = teamColor === "blue";

  return (
    <form onSubmit={onSubmit}>
      <TeamFormContainer>
        <TeamName
          title={isBlue ? "블루 팀" : "레드 팀"}
          teamColor={teamColor}
        />
        <input
          {...register("teamName", { required: true })}
          type="text"
          placeholder={`${isBlue ? "블루" : "레드"} 팀명을 쓰세요.`}
          className="teamform-input"
        />
      </TeamFormContainer>
    </form>
  );
}

// Style
const TeamNameContainer = styled.div<{ teamColor: string }>`
  ${fonts.Team}
  color: ${(props) => props.teamColor};
  text-align: center;

  white-space: nowrap;
`;

const TeamFormContainer = styled.div`
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

    border: 2px solid rgba(255, 255, 255, 0.4);
    border-radius: 10px;

    :focus {
      border: 2px solid rgba(255, 255, 0, 0.7);
    }
  }
`;
