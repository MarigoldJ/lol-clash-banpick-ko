import { mainBgImg } from "@assets/image";
import BasicLayout from "@components/BasicLayout";

function LinkInfo() {
  return (
    <BasicLayout bgImg={mainBgImg}>
      <div>blue team link</div>
      <div>red team link</div>
      <div>observer link</div>
    </BasicLayout>
  );
}

export default LinkInfo;
