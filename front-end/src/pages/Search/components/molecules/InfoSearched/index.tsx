import React, { useEffect, useState } from "react";

import { Div } from "./styles";
import { useAppSelector } from "../../../../../hooks/storeHook";
import { selectSearch } from "../../../../../store/slices/searchSlice";
import CardImg from "../CardImg";
import Items from "../../../../../@types/items";
import { useLocation } from "react-router-dom";

const InfoSearched: React.FC = () => {
  const dataSearch = useAppSelector(selectSearch);
  const [itemPreview, setItemPreview] = useState<Items[]>([]);
  const [view, setView] = useState<Boolean>(false);
  const location = useLocation();

  const changeView = () => {
    if (location.search.includes("?q=")) {
      setItemPreview(dataSearch.collection?.items);
      setView(true);
    } else {
      setView(false);
    }
  };
  useEffect(() => {
    changeView();
  }, [dataSearch, location]);

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
