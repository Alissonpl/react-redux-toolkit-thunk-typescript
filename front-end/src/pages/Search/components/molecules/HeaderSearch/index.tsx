import React, { useState } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../../hooks/storeHook';

import { Div, ButtonSearch } from './styles';
import LogoSearch from '../../../../../assets/images/logo-search.png';
import ImgSearch from '../../atoms/Img';
import Input from '../../atoms/Input';
import SearchIcon from '../../atoms/SearchIcon';
import { Button } from '@material-ui/core';

import { selectSearch, searchAsync } from '../../../../../store/slices/searchSlice';

const HeaderSearch: React.FC = () => {
  const dataSearch = useAppSelector(selectSearch);
  const [search, setSearch] = useState<string>('');
  const dispatch = useAppDispatch();

  console.log(dataSearch);
  return (
    <Div>
      <ImgSearch src={LogoSearch} />
      <Input value={search} type='text' variant='outlined' onChange={setSearch} />
      <Button variant='contained' color='primary' style={ButtonSearch} onClick={() => dispatch(searchAsync(search))}>
        <SearchIcon />
      </Button>
    </Div>
  );
};

export default HeaderSearch;
