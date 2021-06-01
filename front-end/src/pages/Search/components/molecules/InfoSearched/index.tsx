import React, { useEffect, useState } from "react";

import { CircularProgress } from "@material-ui/core";

import { Div } from "./styles";
import Img from "../../atoms/Img";
import { useAppSelector } from "../../../../../hooks/storeHook";
import { selectSearch } from "../../../../../store/slices/searchSlice";
import CardImg from "../CardImg";
import Items from "../../../../../@types/items";
const InfoSearched: React.FC = () => {
  const dataSearch = useAppSelector(selectSearch);
  const [itemPreview, setItemPreview] = useState<Items[]>([]);
  const [view, setView] = useState<Boolean>(false);

  useEffect(() => {
    setItemPreview(dataSearch.collection?.items);
    setView(true);
  }, [dataSearch]);

  return (
    view && (
      <Div>
        {itemPreview &&
          itemPreview.map((item) => {
            return <CardImg {...item} />;
          })}
      </Div>
    )
  );
};

export default InfoSearched;
