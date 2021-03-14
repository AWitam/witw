import { useState } from "react";
import { Fragment } from "react";
import {
  StyledFilterDropdown,
  StyledFilterButton,
  StyledOptions,
  StyledArrow,
} from "./StyledDropdown";

const FilterDropdown = () => {
  const [isActive, setActive] = useState(false);
  const isOpen = isActive ? true : false;

  return (
    <Fragment>
      <StyledFilterDropdown>
        <StyledFilterButton onClick={() => setActive(!isActive)}>
          <span>Filter by region</span>
          <StyledArrow open={isOpen} />
        </StyledFilterButton>
        <StyledOptions open={isOpen}>
          <li>Europe</li>
          <li>Europe</li>
          <li>Europe</li>
        </StyledOptions>
      </StyledFilterDropdown>
    </Fragment>
  );
};

export default FilterDropdown;
