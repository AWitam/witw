import { useState, useRef, useEffect } from "react";
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
  const optionsRef = useRef(null);
  const dropdownComponent = useRef(null);

  useEffect(() => {
    document.addEventListener("click", (e) =>
      detectOutsideClick(e, dropdownComponent)
    );

    return () => {
      document.removeEventListener("click", (e) =>
        detectOutsideClick(e, dropdownComponent)
      );
    };
  }, []);

  const {
    state: { countries, regions, currentRegion },
    dispatch,
  } = useData(DataContext);

  const detectOutsideClick = (e, ref) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setActive(false);
    }
  };

  const handleSelect = (e, region) => {
    dispatch({ type: "FILTER_BY_REGION", payload: region });
    setActive(!isActive);
  };

  return (
    <Fragment>
      <StyledFilterDropdown ref={dropdownComponent}>
        <StyledFilterButton onClick={() => setActive(!isActive)}>
          <span>
            {currentRegion === "" ? "Filter by region" : currentRegion}
          </span>
          <StyledArrow open={isOpen} />
        </StyledFilterButton>
        <StyledOptions ref={optionsRef} role="listbox" open={isOpen}>
          <li
            tabIndex="0"
            key={"all"}
            onClick={(e) => handleSelect(e, "All")}
            onKeyPress={(e) => handleSelect(e, "All")}
          >
            All
          </li>
          {countries &&
            regions.map((region) => (
              <li
                tabIndex="0"
                key={region}
                onClick={(e) => handleSelect(e, region)}
                onKeyPress={(e) => handleSelect(e, region)}
              >
                {region}
              </li>
            ))}
        </StyledOptions>
      </StyledFilterDropdown>
    </Fragment>
  );
};

export default FilterDropdown;
