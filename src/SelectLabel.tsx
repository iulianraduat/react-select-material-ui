import { InputLabel, InputLabelProps } from '@mui/material';
import { isEmpty } from 'lodash';
import * as React from 'react';

const SelectLabel = (props: SelectLabelProps) => {
  const { inputId, label, shrink, inputLabelProps } = props;

  if (isEmpty(label)) {
    return null;
  }

  const style: React.CSSProperties = {
    position: 'relative',
    marginBottom: '-1rem',
    paddingRight: '2rem',
  };

  const userStyle: React.CSSProperties | undefined = inputLabelProps ? inputLabelProps.style : undefined;

  return (
    <InputLabel
      {...inputLabelProps}
      htmlFor={inputId}
      style={getStyle(style, userStyle)}
      shrink={shrink}
      variant="standard"
    >
      {label}
    </InputLabel>
  );
};

const getStyle = (style: React.CSSProperties, userStyle?: React.CSSProperties): React.CSSProperties =>
  userStyle ? { ...style, ...userStyle } : style;

interface SelectLabelProps {
  hasInputFocus?: boolean;
  inputId?: string;
  inputLabelProps?: Partial<InputLabelProps>;
  label?: React.ReactNode;
  shrink?: boolean;
}

export default SelectLabel;
