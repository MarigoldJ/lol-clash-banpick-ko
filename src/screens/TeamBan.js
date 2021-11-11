import { useEffect } from "react";
import { io } from "socket.io-client";
import Layout from "../components/Layout";
// import { SERVER_URL } from "../routes";

const socket = io("http://localhost:38080/");

function TeamBan({ location: { search } }) {
  // console.log(SERVER_URL + pathname + search);

  console.log("hi");

  const click = (e) => {
    console.log("clicked!");
    socket.emit("banpick", search);
  };

  useEffect(() => {
    socket.on("response", (msg) => {
      console.log(msg);
    });
  });

  return (
    <Layout>
      <div>
        <button onClick={() => click()}>연결해보기</button>
      </div>
    </Layout>
  );
}

export default TeamBan;
