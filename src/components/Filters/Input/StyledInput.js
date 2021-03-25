import styled from "styled-components";
import { device } from "../../../themes/mediaQueries";

export const StyledInputWrapper = styled.div`
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.elements};
  border: none;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 10px ${({ theme }) => theme.shadow};
  height: 3rem;

  svg {
    max-height: 1rem;
    max-width: 1.125rem;
    margin-right: 2rem;
    fill: ${({ theme }) => theme.input};
  }

  :focus-within {
    outline: auto;
  }

  @media ${device.tablet} {
    font-size: 0.8rem;
    height: 3.2rem;
  }

  @media ${device.laptop} {
    height: 3.5rem;
  }
`;

export const StyledInput = styled.input.attrs((props) => ({
  type: "text",
}))`
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.input};
  font-weight: 500;
  height: 100%;

  ::placeholder {
    color: ${({ theme }) => theme.input};
    font-size: 0.75rem;

    @media ${device.tablet} {
      font-size: 0.8rem;
    }
  }

  ::-moz-placeholder {
    color: ${({ theme }) => theme.input};
    opacity: 1;
    font-size: 0.75rem;

    @media ${device.tablet} {
      font-size: 0.8rem;
    }
  }

  :focus {
    outline: none;
  }

  @media ${device.laptop} {
    width: 22.5rem;
  }
`;
