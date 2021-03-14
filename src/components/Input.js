import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../assets/icon-search.svg";

const StyledInputWrapper = styled.div`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.elements};
  border: none;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 10px ${({ theme }) => theme.shadow};
  font-size: 0.8rem;

  svg {
    max-height: 1rem;
    max-width: 1.125rem;
    margin-right: 2rem;
    fill: ${({ theme }) => theme.input};
  }

  :focus-within {
    outline: auto;
  }
`;

const StyledInput = styled.input.attrs((props) => ({
  type: "text",
}))`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.input};
  font-weight: 500;

  ::placeholder {
    color: ${({ theme }) => theme.input};
    font-size: 0.875rem;
  }

  ::-moz-placeholder {
    color: ${({ theme }) => theme.input};
    opacity: 1;
    font-size: 0.8rem;
  }

  :focus {
    outline: none;
  }
`;

const Input = (props) => {
  return (
    <StyledInputWrapper>
      <SearchIcon />
      <StyledInput placeholder="Search for a country..."></StyledInput>
    </StyledInputWrapper>
  );
};

export default Input;
