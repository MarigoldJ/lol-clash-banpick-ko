type IProps = "base" | "create-link";

const SERVER_URL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_SERVER_URI_DEV
    : process.env.REACT_APP_SERVER_URI_PROD;

export default function getServerUrl(option: IProps) {
  switch (option) {
    case "base":
      return SERVER_URL;
    case "create-link":
      return SERVER_URL + "/link-info";
  }
}
