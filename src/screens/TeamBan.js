import { useRef, useEffect, useState } from "react";
import { io } from "socket.io-client";
import styled from "styled-components";
import { colors } from "../styles";
import ImageWindow from "../components/ImageWindow";
import { SERVER_URL } from "../server";

import blackBan from "../img/black_ban.png";
import blackPick from "../img/black_pick.png";

const initialPhase = {
  isBlueReady: "false",
  isRedReady: "false",
  phase: 1,
  startTime: Date.now(),
  blueName: "",
  redName: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
  18: "",
  19: "",
  20: "",
};

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  background-color: black;
  height: 100%;
  width: 100%;
`;

// 3가지 컨테이너로 구성 : Team, Banpick, Select

// 1. Team Container

const TeamContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;
const TeamSideContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const TeamSide = styled.span`
  font-weight: 600;
  font-size: 30px;
  color: ${(props) => props.teamColor};
  text-align: center;
  /* text-shadow: 0.5px 0.5px lightgray, -0.5px -0.5px lightgray; */
`;
const TimerContainer = styled.div`
  display: flex;
  width: 25%;
  justify-content: ${(props) => (props.isBlue ? "flex-start" : "flex-end")};
`;
const Timer = styled.span`
  font-weight: 600;
  font-size: 25px;
`;

// 2. Banpick Container

const BanpickContainer = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 30vh; */
`;
const BanpickSide = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;
const BanContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.isBlue ? "flex-end" : "flex-start")};
`;
const PickContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.isBlue ? "flex-end" : "flex-start")};
`;
const BanWindow = styled(ImageWindow)`
  /* width: 40px;
  height: 40px; */
  width: 10%;
  height: auto;
`;
const PickWindow = styled(ImageWindow)`
  /* width: 80px; */
  /* height: 150px; */
  width: 18%;
  height: auto;
`;

// 3. Select Container
const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* height: 50%; */
  /* background-color: white; */
`;

const SearchSelectContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
`;
const SearchBox = styled.input`
  width: 100%;
  /* width: 200px; */
  height: 30px;
  padding: 5px;
  border: 1px solid gray;
  text-align: center;
  font-size: 17px;
  font-weight: 600;
  ::placeholder {
    font-size: 20px;
    font-weight: 600;
  }
`;
const SelectButton = styled.button`
  margin-left: 40px;
  width: 150px;
  height: 40px;
  background-color: white;
  font-weight: 600;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;

const ChampionContainer = styled.div`
  display: grid;
  grid-gap: 10px 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  height: 50vh;
  /* height: 50%; */
  /* max-width: 100%; */
  overflow-y: scroll;
`;
const Champion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ChampionImage = styled.img`
  width: 80px;
  height: 80px;
  margin: 10px 0px;
  cursor: pointer;
  /* cursor: ${(props) => (props.disabled ? "unset" : "pointer")}; */
  /* opacity: ${(props) => (props.disabled ? 0.3 : 1)}; */
`;
const ChampionName = styled.span`
  font-size: 12px;
`;

const socket = io(SERVER_URL);

function TeamBan({ location: { search } }) {
  const tempURL = new URL("http://test.com/test" + search);
  const gameCode = tempURL.searchParams.get("game");
  const side = tempURL.searchParams.get("team");

  const [isChampLoaded, setIsChampLoaded] = useState(null);
  const [phase, setPhase] = useState(1);
  const [selectedChamp, setSelectedChamp] = useState(null);

  const banpickRef = useRef([]);
  const champRef = useRef({});

  let now = Date.now();
  const [timer, setTimer] = useState(0);
  const interval = useRef(null);

  const [banpick, setBanpick] = useState(initialPhase);
  const [keyword, setKeyword] = useState("");
  const [isBlueReady, setIsBlueReady] = useState(
    JSON.parse(initialPhase.isBlueReady)
  );
  const [isRedReady, setIsRedReady] = useState(
    JSON.parse(initialPhase.isRedReady)
  );
  // const [isReady, setIsReady] = useState(
  //   JSON.parse(initialPhase.isBlueReady) && JSON.parse(initialPhase.isRedReady)
  // );

  useEffect(() => {
    socket.emit("gamecode", gameCode);
  }, [gameCode]);

  useEffect(() => {
    interval.current = setInterval(() => {
      if (timer >= 1 && timer <= 60) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(interval.current);
  }, [timer]);

  useEffect(() => {
    if (!isChampLoaded) {
      const requestURL =
        "https://ddragon.leagueoflegends.com/cdn/11.23.1/data/ko_KR/champion.json";
      const request = new XMLHttpRequest();
      request.open("GET", requestURL);
      request.responseType = "json";
      request.send();

      request.onload = () => {
        console.log("Champion loaded!");
        const { data } = request.response;
        const chlist = Object.values(data).sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          } else if (a.name > b.name) {
            return 1;
          } else {
            return 0;
          }
        });

        setIsChampLoaded(chlist);
        console.log("set done!");
      };
    }
  }, [isChampLoaded]);

  useEffect(() => {
    socket.on("banpickPhase", (banpickPhase) => {
      setBanpick(banpickPhase);
      setPhase(parseInt(banpickPhase.phase));
      setTimer(getTimer(parseInt(banpickPhase.startTime)));
      setIsBlueReady(JSON.parse(banpickPhase.isBlueReady));
      setIsRedReady(JSON.parse(banpickPhase.isRedReady));

      [...Array(20).keys()].map((key) => {
        const currentChamp = banpickPhase[key + 1];
        try {
          banpickRef.current[key + 1].name = currentChamp;
          banpickRef.current[key + 1].src = makeImgUrl(key + 1, currentChamp);
          champRef.current[currentChamp].style.opacity = 0.3;
          champRef.current[currentChamp].style.cursor = "unset";
        } catch {
          banpickRef.current[key + 1].name = currentChamp;
          banpickRef.current[key + 1].src = makeImgUrl(key + 1, currentChamp);
        }
        return key;
      });
    });

    socket.on("selectBroad", (selectData) => {
      if (selectData.phase === phase) {
        championClick(selectData.champion);
      }
    });
  });

  useEffect(() => {
    [...Array(20).keys()].map((key) => {
      const currentChamp = banpick[key + 1];
      try {
        champRef.current[currentChamp].style.opacity = 0.3;
        champRef.current[currentChamp].style.cursor = "unset";
      } catch {
        // console.log("error");
      }
      return key;
    });
  }, [keyword, banpick]);

  const clickButton = () => {
    // champRef.current[selectedChamp].disabled = true;
    champRef.current[selectedChamp].style.opacity = 0.3;
    champRef.current[selectedChamp].style.cursor = "unset";
    setSelectedChamp(null);
    setPhase(phase + 1);
    socket.emit("done", { phase, champion: selectedChamp });
  };

  const championClick = (champName) => {
    banpickRef.current[phase].name = champName;
    banpickRef.current[phase].src = makeImgUrl(phase, champName);
    setSelectedChamp(champName);
  };

  const makeImgUrl = (phase, champName) => {
    if (!champName || champName === "") {
      return null;
    }
    if (phase <= 6 || (phase >= 13 && phase <= 16)) {
      // small image
      return `http://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/${champName}.png`;
    } else {
      // big image
      return `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champName}_0.jpg`;
    }
  };

  // const isAlreadyPicked = (champ) =>
  //   banpickRef.current.some((img) => img.name === champ);

  const getTimer = (startTime) => {
    now = Date.now();
    const retTimer = parseInt((startTime + 30 * 1000 - now) / 1000);
    if (retTimer >= 0 && retTimer <= 60) {
      return retTimer;
    } else {
      return 0;
    }
  };

  const isMyTurn = (side, phase) => {
    if (side === "blue") {
      return [1, 3, 5, 7, 10, 11, 14, 16, 18, 19].includes(phase);
    } else if (side === "red") {
      return [2, 4, 6, 8, 9, 12, 13, 15, 17, 20].includes(phase);
    } else {
      // 관전자는 선택불가
      return false;
    }
  };

  const isCurrentPhase = (selectedPhase) => {
    // 입력된 phase가 현재 phase인지 확인
    if (!isBlueReady || !isRedReady) {
      return false;
    } else {
      if (selectedPhase === phase) {
        return true;
      } else {
        return false;
      }
    }
  };

  return (
    <Container>
      <TeamContainer>
        <TeamSideContainer style={{ justifyContent: "flex-start" }}>
          <TeamSide teamColor={colors.blue}>{banpick.blueName}</TeamSide>
        </TeamSideContainer>
        {isBlueReady && isRedReady && phase <= 20 ? (
          <TimerContainer
            isBlue={[1, 3, 5, 7, 10, 11, 14, 16, 18, 19].includes(phase)}
          >
            <Timer>:{timer}</Timer>
          </TimerContainer>
        ) : null}

        <TeamSideContainer style={{ justifyContent: "flex-end" }}>
          <TeamSide teamColor={colors.red}>{banpick.redName}</TeamSide>
        </TeamSideContainer>
      </TeamContainer>

      <BanpickContainer>
        <BanpickSide isBlue={true}>
          <BanContainer isBlue={true}>
            {[1, 3, 5, 14, 16].map((id) => (
              <BanWindow
                key={`phase_${id}`}
                id={id}
                phase={phase}
                src={makeImgUrl(id, banpick[id])}
                onError={(data) => (data.target.src = blackBan)}
                ref={(el) => (banpickRef.current[id] = el)}
                isCurrentPhase={isCurrentPhase(id)}
                activationColor={colors.blue}
              />
            ))}
          </BanContainer>
          <PickContainer isBlue={true}>
            {[7, 10, 11, 18, 19].map((id) => (
              <PickWindow
                key={`phase_${id}`}
                id={id}
                phase={phase}
                src={makeImgUrl(id, banpick[id])}
                onError={(data) => (data.target.src = blackPick)}
                ref={(el) => (banpickRef.current[id] = el)}
                isCurrentPhase={isCurrentPhase(id)}
                activationColor={colors.blue}
              />
            ))}
          </PickContainer>
        </BanpickSide>

        <BanpickSide isBlue={false}>
          <BanContainer isBlue={false}>
            {[2, 4, 6, 13, 15].map((id) => (
              <BanWindow
                key={`phase_${id}`}
                id={id}
                phase={phase}
                src={makeImgUrl(id, banpick[id])}
                onError={(data) => (data.target.src = blackBan)}
                ref={(el) => (banpickRef.current[id] = el)}
                isCurrentPhase={isCurrentPhase(id)}
                activationColor={colors.red}
              />
            ))}
          </BanContainer>
          <PickContainer isBlue={false}>
            {[8, 9, 12, 17, 20].map((id) => (
              <PickWindow
                key={`phase_${id}`}
                id={id}
                phase={phase}
                src={makeImgUrl(id, banpick[id])}
                onError={(data) => (data.target.src = blackPick)}
                ref={(el) => (banpickRef.current[id] = el)}
                isCurrentPhase={isCurrentPhase(id)}
                activationColor={colors.red}
              />
            ))}
          </PickContainer>
        </BanpickSide>
      </BanpickContainer>

      <SelectContainer>
        {isBlueReady && isRedReady ? null : side === "blue" ? (
          isBlueReady ? (
            <SearchSelectContainer style={{ justifyContent: "center" }}>
              <span>상대편 기다리는중...</span>
            </SearchSelectContainer>
          ) : (
            <SearchSelectContainer style={{ justifyContent: "center" }}>
              <SelectButton
                style={{ height: "30px", marginLeft: "0px" }}
                onClick={() => {
                  setIsBlueReady(true);
                  socket.emit("ready", { gamecode: gameCode, team: side });
                }}
              >
                밴픽 시작
              </SelectButton>
            </SearchSelectContainer>
          )
        ) : side === "red" ? (
          isRedReady ? (
            <SearchSelectContainer style={{ justifyContent: "center" }}>
              <span>상대편 기다리는중...</span>
            </SearchSelectContainer>
          ) : (
            <SearchSelectContainer style={{ justifyContent: "center" }}>
              <SelectButton
                style={{ height: "30px", marginLeft: "0px" }}
                onClick={() => {
                  setIsRedReady(true);
                  socket.emit("ready", { gamecode: gameCode, team: side });
                }}
              >
                밴픽 시작
              </SelectButton>
            </SearchSelectContainer>
          )
        ) : (
          <SearchSelectContainer style={{ justifyContent: "center" }}>
            <span>양측 팀 기다리는 중...</span>
          </SearchSelectContainer>
        )}

        <SearchSelectContainer>
          <SearchBox
            placeholder={"챔피언명 검색"}
            onChange={(data) => {
              setKeyword(data.target.value);
            }}
          />
          {isMyTurn(side, phase) ? (
            <SelectButton
              disabled={!selectedChamp}
              onClick={() => clickButton()}
            >
              선택 완료
            </SelectButton>
          ) : null}
        </SearchSelectContainer>
        <ChampionContainer>
          {isChampLoaded
            ?.filter((champ) => champ.name.startsWith(keyword))
            .map((champ) => {
              // console.log(champ);

              return (
                <Champion
                  key={`champ_${champ.id}`}
                  style={{
                    display: () =>
                      champ.name.startWith(keyword) ? "block" : "none",
                  }}
                >
                  <ChampionImage
                    ref={(el) => (champRef.current[champ.id] = el)}
                    // koName={champ.id}
                    key={`img_${champ.id}`}
                    src={
                      "http://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/" +
                      champ.image?.full
                    }
                    onClick={(data) => {
                      if (
                        (!data.target.style.opacity ||
                          data.target.style.opacity === 1) &&
                        isMyTurn(side, phase)
                      ) {
                        socket.emit("select", { phase, champion: champ.id });
                        championClick(champ.id);
                      }
                    }}
                    // disabled={true}
                  />

                  <ChampionName key={`name_${champ.id}`}>
                    {champ.name}
                  </ChampionName>
                </Champion>
              );
            })}
        </ChampionContainer>
      </SelectContainer>
    </Container>
  );
}

export default TeamBan;
