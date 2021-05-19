import React, { useState } from 'react';

import { Div, ButtonSearch } from './styles';
import LogoSearch from '../../../../../assets/images/logo-search.png';
import ImgSearch from '../../atoms/Img';
import Input from '../../atoms/Input';
import SearchIcon from '../../atoms/SearchIcon';
import { Button } from '@material-ui/core';

const HeaderSearch: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  return (
    <Div>
      <ImgSearch src={LogoSearch} />
      <Input value={search} type='text' variant='outlined' onChange={setSearch} />
      <Button variant='contained' color='primary' style={ButtonSearch}>
        <SearchIcon />
      </Button>
    </Div>
  );
};

export default HeaderSearch;
