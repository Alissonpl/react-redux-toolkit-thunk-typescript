import React, { useEffect, useState } from "react";

import { Div } from "./styles";
import Img from "../../atoms/Img";
import LogoSearch from "../../../../../assets/images/logo-search.png";
import { useAppSelector } from "../../../../../hooks/storeHook";
import { selectSearch } from "../../../../../store/slices/searchSlice";

const InfoSearched: React.FC = () => {
  const dataSearch = useAppSelector(selectSearch);
  const [itemPreview, setItemPreview] = useState([]);
  console.log(dataSearch);

  useEffect(() => {
    setItemPreview(dataSearch.collection?.items);
  }, [dataSearch]);

  return (
    <Div>
      {itemPreview ? (
        itemPreview.map((item) => {
          return (
            <div
              style={{ display: "flex", flexDirection: "column", width: 100 }}
            >
              {item.links.map((item) => {
                return <Img src={item.href} />;
              })}

              {item.data.map((item) => {
                return <span>{item?.title}</span>;
              })}
            </div>
          );
        })
      ) : (
        <span style={{ color: "red" }}>não existe</span>
      )}
    </Div>
  );
};

export default InfoSearched;
