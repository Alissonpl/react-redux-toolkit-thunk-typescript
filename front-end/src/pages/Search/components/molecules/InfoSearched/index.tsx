import React from "react";

import { Div } from "./styles";
import Img from "../../atoms/Img";
import LogoSearch from "../../../../../assets/images/logo-search.png";
import { useAppSelector } from "../../../../../hooks/storeHook";
import { selectSearch } from "../../../../../store/slices/searchSlice";

const InfoSearched: React.FC = () => {
  const dataSearch = useAppSelector(selectSearch);
  console.log(dataSearch);
  return (
    <Div>
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
      <Img src={LogoSearch} />
    </Div>
  );
};

export default InfoSearched;
