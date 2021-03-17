import React from 'react';
import LogoSearch from '../../assets/images/logo-search.png';
import { ContainerSearch, HeaderSearch, ImgSearch, InputSearch, SendSearch } from './styles';
export const Search = () => {
  return (
    <ContainerSearch>
      <HeaderSearch>
        <ImgSearch src={LogoSearch} />
        <InputSearch type='text' variant='outlined' />
        <SendSearch style={{ fontSize: '50px' }} />
      </HeaderSearch>
    </ContainerSearch>
  );
};
