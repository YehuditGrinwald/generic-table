import React from "react";
import { useDispatch } from "react-redux";
import { updateSearchValue } from "../../store";

export default function SearchInput() {
  const dispatch = useDispatch();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateSearchValue(event.target.value));
  };

  return (
    <div>
      <label htmlFor="search">
        Search:&nbsp;
        <input id="search" type="text" onChange={handleSearch} />
      </label>
      <br />
    </div>
  );
}
