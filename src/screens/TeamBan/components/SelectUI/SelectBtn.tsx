import fonts from "@styles/fonts";
import styled from "styled-components";

function SelectBtn() {
  const clickBtn = () => {
    // 서버에 밴픽 done 메시지 보내기
  };

  return (
    <SButton onClick={clickBtn} disabled={false}>
      선택 완료
    </SButton>
  );
}

export default SelectBtn;

// Style
const SButton = styled.button`
  width: 200px;
  height: 50px;

  ${fonts.H3}
`;
