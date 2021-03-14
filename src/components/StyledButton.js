import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export default StyledButton;
