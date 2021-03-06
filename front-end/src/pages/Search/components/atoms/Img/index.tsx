import React from "react";

import { ImgStyles } from "./styles";
import { Props } from "../../../../../@types/img";
const Img: React.FC<Props> = ({ src }: Props) => {
  return <ImgStyles src={src} />;
};

export default Img;
