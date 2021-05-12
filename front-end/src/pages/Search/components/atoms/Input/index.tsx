import React from 'react';

import { InputStyles } from './styles';
import { Props } from '../../../../../@types/Input';

const Input: React.FC<Props> = ({ type, variant }: Props) => {
  return <InputStyles type={type} variant={variant} />;
};

export default Input;
