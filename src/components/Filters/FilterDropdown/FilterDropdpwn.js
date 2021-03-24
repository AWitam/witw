import { useState } from "react";
import { Fragment } from "react";
import {
  StyledFilterDropdown,
  StyledFilterButton,
  StyledOptions,
  StyledArrow,
} from "./StyledDropdown";
import { DataContext, useData } from "../../../context/DataContext";

const FilterDropdown = () => {
  const [isActive, setActive] = useState(false);
  const isOpen = isActive ? true : false;

  const {
    state: { countries, regions, currentRegion },
    dispatch,
  } = useData(DataContext);

  const handleClick = (region) => {
    dispatch({ type: "FILTER_BY_REGION", payload: region });
    setActive(!isActive);
  };

  return (
    <Fragment>
      <StyledFilterDropdown>
        <StyledFilterButton onClick={() => setActive(!isActive)}>
          <span>
            {currentRegion === "" ? "Filter by region" : currentRegion}
          </span>
          <StyledArrow open={isOpen} />
        </StyledFilterButton>
        <StyledOptions open={isOpen}>
          <li key={"all"} onClick={() => handleClick("All")}>
            All
          </li>
          {countries &&
            regions.map((region) => (
              <li key={region} onClick={() => handleClick(region)}>
                {region}
              </li>
            ))}
        </StyledOptions>
      </StyledFilterDropdown>
    </Fragment>
  );
};

export default FilterDropdown;
