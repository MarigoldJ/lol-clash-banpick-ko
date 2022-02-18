import colors from "@styles/colors";
import fonts from "@styles/fonts";
import styled from "styled-components";

export default function SubmitButton({ disabled }: { disabled: boolean }) {
  return <StyledButton type="submit" value={"밴픽 생성"} disabled={disabled} />;
}

// Style
const StyledButton = styled.input<{ disabled: boolean }>`
  padding: 15px;
  margin-top: 30px;

  text-align: center;
  ${fonts.H4}
  color: ${colors.lightBlue};
  width: 300px;

  background-color: ${colors.darkBlue};
  border-style: double groove;
  border-width: 4px;
  border-color: ${colors.gold};

  cursor: ${(props) => (props.disabled ? "unset" : "pointer")};
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;
