import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Layout from "../components/Layout";
import routes from "../routes";
import { colors } from "../styles";

const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 30px 0px;
  margin: 10px 0px;
  width: 100%;

  /* background-color: white; */
`;

const TeamSideContainer = styled.div`
  display: flex;
  flex: 1;
  /* width: 200px; */
  justify-content: center;
  align-items: center;
  /* background-color: white; */
`;
const TeamSide = styled.span`
  font-weight: 600;
  font-size: 30px;
  color: ${(props) => props.teamColor};
  text-align: center;
  /* text-shadow: 0.5px 0.5px lightgray, -0.5px -0.5px lightgray; */
`;

const TeamNameContainer = styled.div`
  flex: 3;
  width: 100%;
  /* background-color: white; */

  input {
    width: 100%;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.3);
    height: 35px;
    font-size: 28px;
    font-weight: 600;
    ::placeholder {
      font-size: 20px;
    }
  }
`;

const SubmitButton = styled.input`
  padding: 20px 0px;
  margin-bottom: 30px;

  text-align: center;
  font-weight: 600;
  color: black;
  width: 100%;
  cursor: ${(props) => (props.disabled ? "unset" : "pointer")};

  background-color: green;
  opacity: ${(props) => (props.disabled ? "0.4" : "1")};
`;

function Home() {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      blueName: "",
      redName: "",
    },
  });

  const onSubmitValid = (data) => {
    // console.log(data);
    // console.log(isValid);
    history.push(routes.link, {
      blueName: data.blueName,
      redName: data.redName,
    });
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmitValid)}>
        <TeamContainer>
          <TeamSideContainer>
            <TeamSide teamColor={colors.blue}>블루 팀</TeamSide>
          </TeamSideContainer>
          <TeamNameContainer>
            <input
              {...register("blueName", { required: true })}
              type="text"
              placeholder=" 블루 팀명을 쓰세요."
            />
          </TeamNameContainer>
        </TeamContainer>

        <TeamContainer>
          <TeamSideContainer>
            <TeamSide teamColor={colors.red}>레드 팀</TeamSide>
          </TeamSideContainer>
          <TeamNameContainer>
            <input
              {...register("redName", { required: true })}
              type="text"
              placeholder=" 레드 팀명을 쓰세요."
            />
          </TeamNameContainer>
        </TeamContainer>

        <SubmitButton type="submit" value="밴픽 생성" disabled={!isValid} />
      </form>
    </Layout>
  );
}

export default Home;
