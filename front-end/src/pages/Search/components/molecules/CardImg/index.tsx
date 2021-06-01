import React from "react";

import Img from "../../atoms/Img";
import { Card } from "./styles";
import Item from "../../../../../@types/items";
const CardImg: React.FC<Item> = (props: Item) => {
  return (
    <Card>
      {props.links.map((item) => {
        if (item.href.includes("jpg" || "png")) {
          return <Img src={item.href} />;
        }
      })}

      {props.data.map((item) => {
        return <span style={{ color: "white" }}>{item?.title}</span>;
      })}
    </Card>
  );
};

export default CardImg;
