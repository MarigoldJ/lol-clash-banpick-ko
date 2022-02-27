import { useEffect, useState } from "react";

export default function LoadVersion() {
  const [version, setVersion] = useState<string>("");

  useEffect(() => {
    const requestURL = "https://ddragon.leagueoflegends.com/api/versions.json";
    const request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();

    request.onload = () => {
      console.log("LOL Version loaded!");
      const data = request.response;
      setVersion(data[0]);
    };
  }, []);

  return version;
}
