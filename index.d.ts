import { BaseTextFieldProps } from '@mui/material';
import * as React from 'react';
import { Props as ReactSelectProps, SelectComponentsConfig, StylesConfig } from 'react-select';
import { CreatableProps } from 'react-select/creatable';

export interface SelectOption {
  label: string;
  value: any;
}

export type SelectProps =
  | (ReactSelectProps<SelectOption> & SelectCommonProps)
  | (CreatableProps<SelectOption, any, any> & SelectCommonProps);

interface SelectCommonProps {
  components?: SelectComponentsConfig<any, boolean>;
  isClearable?: boolean;
  isCreatable?: boolean;
  isDisabled?: boolean;
  msgNoOptionsAvailable?: string;
  msgNoOptionsMatchFilter?: string;
  msgNoValidValue?: string;
  styles?: StylesConfig<any, boolean>;
}

export interface ReactSelectMaterialUiProps<T = any> extends Omit<BaseTextFieldProps, 'onChange'> {
  defaltValue?: T;
  defaultValues?: T[];
  key?: React.Key;
  options: string[] | SelectOption[];
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
  onChange: (value: T | T[], option?: SelectOption | SelectOption[]) => void;
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  ref?: any;
  SelectProps?: SelectProps | any;
  value?: T;
  values?: T[];
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

declare class ReactSelectMaterialUi extends React.Component<ReactSelectMaterialUiProps> {}

declare class SingleSelect extends React.Component<ReactSelectMaterialUiProps> {}

declare class MultipleSelect extends React.Component<ReactSelectMaterialUiProps> {}

declare class TagSelect extends React.Component<ReactSelectMaterialUiProps> {}

declare class TagsSelect extends React.Component<ReactSelectMaterialUiProps> {}

declare class ColorSelect extends React.Component<ReactSelectMaterialUiProps> {}

declare class ColorsSelect extends React.Component<ReactSelectMaterialUiProps> {}

declare module 'react-select-material-ui' {}

export default ReactSelectMaterialUi;
export { SingleSelect, MultipleSelect, TagSelect, TagsSelect, ColorSelect, ColorsSelect };
