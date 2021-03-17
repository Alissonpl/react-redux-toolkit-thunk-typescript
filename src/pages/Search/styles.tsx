import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { Send } from '@material-ui/icons';

export const ContainerSearch = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderSearch = styled.div`
  width: 700px;
`;

export const ImgSearch = styled.img`
  max-height: 150px;
  margin: 25px;
  border-radius: 6px;
`;

export const InputSearch = styled(TextField)`
  width: 80%;
`;

export const SendSearch = styled(Send)`
  color: #6b2cff;
  margin-left: 10px;
`;
