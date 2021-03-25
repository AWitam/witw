import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 1.25rem;
  box-shadow: 0px 10px 15px ${({ theme }) => theme.shadow};
  border-radius: 0.3rem;
  font-size: 0.875rem;
`;
