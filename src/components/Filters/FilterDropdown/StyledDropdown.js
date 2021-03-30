import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/icon-arrow.svg";
import { StyledButton } from "../../StyledElements/StyledButton";
import { device } from "../../../themes/mediaQueries";

export const StyledFilterDropdown = styled.div`
  background-color: ${({ theme }) => theme.elements};
  border: none;
  border-radius: 0.3rem;
  color: ${({ theme }) => theme.input};
  display: flex;
  align-items: center;
  width: 12.5rem;
  height: 3rem;
  box-shadow: 0 5px 10px ${({ theme }) => theme.shadow};
  font-weight: 500;
  position: relative;

  span {
    color: ${({ theme }) => theme.input};
    font-size: 0.75rem;
  }

  svg {
    max-width: 0.6rem;
    fill: ${({ theme }) => theme.input};
  }

  :focus {
    outline: auto;
  }

  @media ${device.tablet} {
    height: 3.2rem;
    span {
      font-size: 0.8rem;
    }
  }

  @media ${device.laptop} {
    height: 3.5rem;
    span {
      margin-right: 2.75rem;
    }
  }
`;

export const StyledArrow = styled(Arrow)`
  transform: ${({ open }) => (open ? "rotate(180deg)" : "")};
  transition: transform 0.2s linear;
`;

export const StyledFilterButton = styled(StyledButton)`
  background-color: transparent;
  box-shadow: none;
  padding: 0.8rem 1.5rem;
  width: 100%;
  height: 100%;

  :focus {
    outline: auto;
  }
`;

export const StyledOptions = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  height: auto;
  background-color: ${({ theme }) => theme.elements};
  border: none;
  border-radius: 0.3rem;
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  width: 100%;
  top: 4rem;
  box-shadow: 0 5px 10px ${({ theme }) => theme.shadow};
  animation: reveal 0.5s;
  font-size: 0.75rem;
  z-index: 10;

  @media ${device.tablet} {
    font-size: 0.8rem;
  }

  @keyframes reveal {
    from {
      transform: translateY(-10%);
    }
    to {
      transform: translateY(0);
    }
  }

  li {
    padding: 0.8rem 2rem;
    cursor: pointer;

    :focus-within {
      outline-color: auto;
    }
  }
`;
