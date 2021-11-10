import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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
  background-color: green;
`;

function Home({ history }) {
  const {
    register,
    handleSubmit,
    // formState: { errors, isValid },
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      blueName: "",
      redName: "",
    },
  });

  const [blueName, setBlueName] = useState("");
  const [redName, setRedName] = useState("");

  const onSubmitValid = (data) => {
    const { blueName: givenBlue, redName: givenRed } = getValues();
    setBlueName(givenBlue);
    setRedName(givenRed);
    console.log(givenBlue, givenRed);
  };

  return (
    <Layout>
      <form onChange={handleSubmit(onSubmitValid)}>
        <TeamContainer>
          <TeamSideContainer>
            <TeamSide teamColor={colors.blue}>블루 팀</TeamSide>
          </TeamSideContainer>
          <TeamNameContainer>
            <input
              // {...register("blueName", {
              //   maxLength: {
              //     value: 8,
              //     message: "Team name should be less than 9.",
              //   },
              // })}
              {...register("blueName")}
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
              {...register("redName", {
                maxLength: {
                  value: 8,
                  message: "Team name should be less than 9.",
                },
              })}
              type="text"
              placeholder=" 레드 팀명을 쓰세요."
            />
          </TeamNameContainer>
        </TeamContainer>

        <Link to={{ pathname: routes.banpick, state: {} }}>
          <SubmitButton type="submit" value="밴픽 시작" />
        </Link>
      </form>
    </Layout>
  );
}

export default Home;
