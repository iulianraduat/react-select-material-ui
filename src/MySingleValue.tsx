import * as React from 'react';
import { OptionTypeBase } from 'react-select';
import { SingleValueProps } from 'react-select/src/components/SingleValue';

export const MySingleValue = (props: SingleValueProps<OptionTypeBase>) => {
  const { children, className } = props;
  const myClassName = className ? `${className} MuiFormLabel-root` : `MuiFormLabel-root`;
  return <div className={myClassName}>{children}</div>;
};
