export const SERVER_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:38080"
    : "https://lol-clash-banpick-ko-server.herokuapp.com";
