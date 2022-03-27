import styled from "styled-components";

function SelectUI() {
  return (
    <Container>
      <div className="ui-navigation">
        <div className="ui-navigation-pos"></div>
        <div className="ui-navigation-search"></div>
      </div>
      <div className="ui-champlist"></div>
      <div className="ui-button"></div>
    </Container>
  );
}

export default SelectUI;

// Style
const Container = styled.div``;
