import * as React from 'react';
import ColoredDot from './ColoredDot';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import { OptionProps } from 'react-select/lib/components/Option';

const getStyle = (props: OptionProps<any>) => ({
  fontWeight: props.isSelected ? 500 : 400,
  padding: 5
});

const ColoredOption = (props: ColoredOptionProps) => (
  <MenuItem
    component="div"
    buttonRef={props.innerRef}
    selected={props.isFocused}
    style={getStyle(props)}
    {...props.innerProps}
  >
    <ColoredDot color={props.data.value} />
    {props.children}
  </MenuItem>
);

interface ColoredOptionProps extends OptionProps<any> {
  data: ColoredSelectOption;
}

interface ColoredSelectOption {
	label: string;
	value: string;
}

export default ColoredOption;
