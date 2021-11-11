import Layout from "../components/Layout";
import { SERVER_URL } from "../routes";

function TeamBan({ location: { pathname, search } }) {
  // console.log(SERVER_URL + pathname + search);
  fetch(SERVER_URL + pathname + search, { method: "get" })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
  return <Layout>Hi</Layout>;
}

export default TeamBan;
