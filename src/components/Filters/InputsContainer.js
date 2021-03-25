import styled from "styled-components";
import Input from "./Input/Input";
import { device } from "../../themes/mediaQueries";
import FilterDropdwon from "./FilterDropdown/FilterDropdpwn";

const StyledInputsContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 1rem;
  justify-content: space-between;
  gap: 2.5rem;

  @media ${device.tablet} {
    margin: 2rem 3rem;
    flex-direction: row;
    gap: 2rem;
  }

  @media ${device.laptopL} {
    margin: 3rem 5rem;
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
