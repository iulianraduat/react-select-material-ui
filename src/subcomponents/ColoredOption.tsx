import { MenuItem } from '@mui/material';
import React from 'react';
import { OptionProps } from 'react-select';
import ColoredDot from './ColoredDot';

const getStyle = (props: OptionProps<any, any>) => ({
  fontWeight: props.isSelected ? 500 : 400,
  padding: 5,
});

const ColoredOption = (props: ColoredOptionProps) => (
  <MenuItem
    selected={props.isFocused}
    style={getStyle(props)}
    {...(props.innerProps as any)}
    dense={true}
  >
    <ColoredDot color={props.data.value} />
    {props.children}
  </MenuItem>
);

interface ColoredOptionProps extends OptionProps<any, true, any> {
  data: ColoredSelectOption;
}

interface ColoredSelectOption {
  label: string;
  value: string;
}

export default ColoredOption;
