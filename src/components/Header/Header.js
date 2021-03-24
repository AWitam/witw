import { StyledHeader, StyledTitle } from "./StyledHeader";
import { DataContext, useData } from "../../context/DataContext";

const Header = ({ children }) => {
  const { dispatch } = useData(DataContext);
  const handleClick = () => {
    dispatch({ type: "FILTER_BY_REGION", payload: "All" });
    dispatch({ type: "FILTER_BY_NAME", payload: "" });
  };
  return (
    <StyledHeader>
      <StyledTitle to={"/"} onClick={handleClick}>
        <h1>Where in the world?</h1>
      </StyledTitle>

      {children}
    </StyledHeader>
  );
};

export default Header;
