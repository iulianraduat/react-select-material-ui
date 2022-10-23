import { InputLabel, InputLabelProps } from '@mui/material';
import isEmpty from 'lodash/isEmpty';
import { CSSProperties, ReactNode } from 'react';

const SelectLabel = (props: SelectLabelProps) => {
  const { inputId, label, shrink, inputLabelProps } = props;

  if (isEmpty(label)) {
    return null;
  }

  return (
    <InputLabel
      {...inputLabelProps}
      htmlFor={inputId}
      shrink={shrink}
      variant="standard"
    >
      {label}
    </InputLabel>
  );
};

const getStyle = (
  style: CSSProperties,
  userStyle?: CSSProperties
): CSSProperties => (userStyle ? { ...style, ...userStyle } : style);

interface SelectLabelProps {
  hasInputFocus?: boolean;
  inputId?: string;
  inputLabelProps?: Partial<InputLabelProps>;
  label?: ReactNode;
  shrink?: boolean;
}

export default SelectLabel;
