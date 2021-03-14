import styled from "styled-components";
import Input from "./Input";
import { device } from "../themes/mediaQueries";
import FilterDropdwon from "./FilterDropdpwn";

const StyledInputsContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  justify-content: space-between;

  @media ${device.tablet} {
    padding: 0 3rem;
    flex-direction: row;
  }

  @media ${device.laptopL} {
    padding: 0 5rem;
    flex-direction: row;
  }
`;

const InputsContainer = () => {
  return (
    <StyledInputsContainer>
      <Input></Input>
      <FilterDropdwon></FilterDropdwon>
    </StyledInputsContainer>
  );
};

export default InputsContainer;
