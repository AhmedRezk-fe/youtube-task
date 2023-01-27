import React, { ChangeEvent, useState } from "react";
// import Button from "../button";
// import Input from "../input";
import Button from "components/Button/index";
import Input from "components/Input/index";
import requestResult from "shares/agent";
import { useDispatch } from "react-redux";
import { startApp } from "Redux/action";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [valInput, setValInput] = useState("");

  const keywordSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValInput(e.target.value);
  };

  const submitSearch = e => {
    e.preventDefault();
    dispatch<any>(requestResult(startApp, valInput));
    navigate(`search?query=${valInput}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={submitSearch}>
        <div className="searchbar_input">
          <Input
            classN="search_inp"
            placeholder="search"
            handleChange={keywordSearch}
          />
        </div>
        <div className="searchbar_button">
          <Button classN="searchbtn" type="submit" name="searchbtn" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
