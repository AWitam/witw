import { StyledInputWrapper, StyledInput } from "./StyledInput";
import { ReactComponent as SearchIcon } from "../../../assets/icon-search.svg";
import { useData, DataContext } from "../../../context/DataContext";

const Input = () => {
  const {
    dispatch,
    state: { searchQuery },
  } = useData(DataContext);

  const handleChange = (e) => {
    dispatch({ type: "FILTER_BY_NAME", payload: e.target.value });
  };

  return (
    <StyledInputWrapper>
      <SearchIcon />
      <StyledInput
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={handleChange}
      ></StyledInput>
    </StyledInputWrapper>
  );
};

export default Input;
