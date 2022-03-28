type IProps = "base" | "create-link";

const SERVER_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:38080"
    : "https://lol-clash-banpick-ko-server.herokuapp.com";

export default function getServerUrl(option: IProps) {
  switch (option) {
    case "base":
      return SERVER_URL;
    case "create-link":
      return SERVER_URL + "/link-info";
  }
}
