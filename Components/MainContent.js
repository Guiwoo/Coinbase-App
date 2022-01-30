import styled from "styled-components";
import Portfolio from "./Portfolio";
import Promots from "./Promots";

const MainContent = () => {
  return (
    <Wrapper>
      <Portfolio />
      <Promots />
    </Wrapper>
  );
};

export default MainContent;

const Wrapper = styled.div`
  display: flex;
  max-height: calc(100vh - 64px);
  overflow: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  & div {
    border-radius: 0.4rem;
  }
`;
