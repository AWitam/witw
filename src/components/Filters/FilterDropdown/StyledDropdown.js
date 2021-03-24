import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../assets/icon-arrow.svg";
import { StyledButton } from "../../StyledButton/StyledButton";
import { device } from "../../../themes/mediaQueries";

export const StyledFilterDropdown = styled.div`
  background-color: ${({ theme }) => theme.elements};
  border: none;
  border-radius: 0.3rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.input};
  display: flex;
  align-items: center;
  width: 15.5rem;
  box-shadow: 0 5px 10px ${({ theme }) => theme.shadow};
  margin-top: 2.5rem;
  font-weight: 500;
  position: relative;

  span {
    margin-right: 5rem;
    color: ${({ theme }) => theme.input};
  }

  svg {
    max-width: 0.6rem;
    fill: ${({ theme }) => theme.input};
  }

  :focus-within {
    outline: auto;
  }

  @media ${device.tablet} {
    margin-top: 0;
    span {
      margin-right: 3.5rem;
    }
  }

  @media ${device.laptop} {
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
  padding: 1rem 2rem;
  width: 100%;
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
  }
`;
