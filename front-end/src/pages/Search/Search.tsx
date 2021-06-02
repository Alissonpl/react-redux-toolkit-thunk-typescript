import React from "react";

import { ContainerSearch } from "./styles";
import HeaderSearch from "./components/molecules/HeaderSearch";
import InfoSearched from "./components/molecules/InfoSearched";
import { Grid } from "@material-ui/core";
export const Search = () => {
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={2}
      item
    >
      <HeaderSearch />
      <InfoSearched />
    </Grid>
  );
};
