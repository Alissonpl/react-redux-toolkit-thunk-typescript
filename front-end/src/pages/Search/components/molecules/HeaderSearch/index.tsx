import React, { useState } from "react";

import { useAppDispatch } from "../../../../../hooks/storeHook";

import { Div, ButtonSearch, DivSearch } from "./styles";
import LogoSearch from "../../../../../assets/images/logo-search.png";
import ImgSearch from "../../atoms/Img";
import Input from "../../atoms/Input";
import SearchIcon from "../../atoms/SearchIcon";
import { Button } from "@material-ui/core";

import { searchAsync } from "../../../../../store/slices/searchSlice";

const HeaderSearch: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();

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
          onClick={() => dispatch(searchAsync(search))}
        >
          <SearchIcon />
        </Button>
      </DivSearch>
    </Div>
  );
};

export default HeaderSearch;
