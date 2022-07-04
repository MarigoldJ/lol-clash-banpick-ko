import colors from "@styles/colors";
import fonts from "@styles/fonts";
import routes from "@utils/routes";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function BackToHomeBtn() {
  const navigate = useNavigate();
  const clickBtn = () => {
    navigate(routes.home);
  };

  return <SButton onClick={clickBtn}>밴픽 생성 페이지로 돌아가기</SButton>;
}

const SButton = styled.div`
  padding: 15px;
  margin-top: 50px;

  /* text-align: center; */
  ${fonts.H4}
  color: ${colors.lightBlue};

  width: 400px;

  text-align: center;

  background-color: ${colors.darkBlue};
  border-style: double groove;
  border-width: 4px;
  border-color: ${colors.gold};

  ${fonts.H3}

  cursor: pointer;
`;
