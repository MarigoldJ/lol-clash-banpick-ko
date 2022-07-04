import { mainBgImg } from "@assets/image";
import { TeamNameSubmitForm } from "./components";
import BasicLayout from "@components/BasicLayout";

function Home() {
  return (
    <BasicLayout bgImg={mainBgImg}>
      <TeamNameSubmitForm />
    </BasicLayout>
  );
}

export default Home;
