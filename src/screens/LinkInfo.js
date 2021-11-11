import { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import { SERVER_URL } from "../routes";
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

const TeamLinkContainer = styled.div`
  flex: 3;
  width: 100%;
  cursor: pointer;
  /* background-color: gray; */
`;
const TeamLink = styled.span`
  width: 100%;
  text-align: center;
  /* background-color: rgba(255, 255, 255, 0.3); */
  height: 35px;
  font-size: 20px;
`;

function LinkInfo({
  location: { pathname, search },
  history: {
    location: {
      state: { blueName, redName },
    },
  },
}) {
  const [blueLink, setBlueLink] = useState("");
  const [redLink, setRedLink] = useState("");
  const [observerLink, setObserverLink] = useState("");

  const copyUrl = (selectedUrl) => {
    const el = document.createElement("input");
    el.value = selectedUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    alert("url is copied!");
  };

  // 밴픽 할 링크 받아오기
  useEffect(() => {
    const { origin } = new URL(document.location.href);

    fetch(SERVER_URL + pathname + search, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ blueName, redName }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setBlueLink(origin + data.blue?.pathname);
          setRedLink(origin + data.red?.pathname);
          setObserverLink(origin + data.observer?.pathname);
        } else {
          console.log("Server did not give data.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pathname, search, blueName, redName]);

  return (
    <Layout>
      <TeamContainer>
        <TeamSideContainer>
          <TeamSide teamColor={colors.blue}>블루 팀</TeamSide>
        </TeamSideContainer>
        <TeamLinkContainer onClick={() => copyUrl(blueLink)}>
          <TeamLink>{blueLink}</TeamLink>
        </TeamLinkContainer>
      </TeamContainer>

      <TeamContainer>
        <TeamSideContainer>
          <TeamSide teamColor={colors.red}>레드 팀</TeamSide>
        </TeamSideContainer>
        <TeamLinkContainer onClick={() => copyUrl(redLink)}>
          <TeamLink>{redLink}</TeamLink>
        </TeamLinkContainer>
      </TeamContainer>

      <TeamContainer>
        <TeamSideContainer>
          <TeamSide teamColor="gray">관전자</TeamSide>
        </TeamSideContainer>
        <TeamLinkContainer onClick={() => copyUrl(observerLink)}>
          <TeamLink>{observerLink}</TeamLink>
        </TeamLinkContainer>
      </TeamContainer>
    </Layout>
  );
}

export default LinkInfo;
