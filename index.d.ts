import * as React from "react";
import { BaseTextFieldProps } from "@material-ui/core/TextField";
import { Props as ReactSelectProps } from "react-select";

export interface SelectOption {
  label: string;
  value: any;
}

export interface SelectProps extends ReactSelectProps<SelectOption> {
  isCreatable?: boolean;
  msgNoOptionsAvailable?: string;
  msgNoOptionsMatchFilter?: string;
  msgNoValidValue?: string;
}

export interface ReactSelectMaterialUiProps
  extends React.Props<ReactSelectMaterialUi>,
    Omit<BaseTextFieldProps, "onChange"> {
  defaltValue?: any;
  defaultValues?: any[];
  options: string[] | SelectOption[];
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
  onChange: (
    value: any | any[],
    option?: SelectOption | SelectOption[]
  ) => void;
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  ref?: any;
  SelectProps?: SelectProps | any;
  value?: any;
  values?: any[];
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

declare class ReactSelectMaterialUi extends React.Component<
  ReactSelectMaterialUiProps
> {}

declare class SingleSelect extends React.Component<
  ReactSelectMaterialUiProps
> {}

declare class MultipleSelect extends React.Component<
  ReactSelectMaterialUiProps
> {}

declare class TagSelect extends React.Component<ReactSelectMaterialUiProps> {}

declare class TagsSelect extends React.Component<ReactSelectMaterialUiProps> {}

declare class ColorSelect extends React.Component<ReactSelectMaterialUiProps> {}

declare class ColorsSelect extends React.Component<
  ReactSelectMaterialUiProps
> {}

declare module "react-select-material-ui" {}

export default ReactSelectMaterialUi;
export {
  SingleSelect,
  MultipleSelect,
  TagSelect,
  TagsSelect,
  ColorSelect,
  ColorsSelect
};
