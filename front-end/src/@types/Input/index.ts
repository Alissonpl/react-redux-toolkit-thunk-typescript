import React, { SetStateAction } from 'react';
export type Props = {
  type: string;
  variant: any;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}
