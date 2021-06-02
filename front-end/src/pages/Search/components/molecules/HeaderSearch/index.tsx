import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

import { Button } from "@material-ui/core";

import { useAppDispatch } from "../../../../../hooks/storeHook";
import { Div, ButtonSearch, DivSearch } from "./styles";
import LogoSearch from "../../../../../assets/images/logo-search.png";
import ImgSearch from "../../atoms/Img";
import Input from "../../atoms/Input";
import SearchIcon from "../../atoms/SearchIcon";
import { searchAsync } from "../../../../../store/slices/searchSlice";

const HeaderSearch: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const history = useHistory();
  const location = useLocation();

  const changeSeachLocation = () => {
    const newSeach = location.search.split("=")[1];
    setSearch(newSeach);
    dispatch(searchAsync(newSeach));
  };

  useEffect(() => {
    changeSeachLocation();
  }, [location]);

  return (
    <Div>
      <ImgSearch src={LogoSearch} />
      <DivSearch>
        <Input
          value={search}
          type="text"
          variant="outlined"
          onChange={setSearch}
        />
        <Button
          variant="contained"
          color="primary"
          style={ButtonSearch}
          onClick={() => {
            dispatch(searchAsync(search));
            history.push(`/search?q=${search}`);
          }}
        >
          <SearchIcon />
        </Button>
      </DivSearch>
    </Div>
  );
};

export default HeaderSearch;
