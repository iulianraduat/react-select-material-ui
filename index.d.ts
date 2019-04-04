import * as React from 'react';
import { BaseTextFieldProps } from '@material-ui/core/TextField';
import { Props as ReactSelectProps } from 'react-select/lib/Select';

export interface SelectOption {
	label: string;
	value: string;
}

export interface SelectProps extends ReactSelectProps<SelectOption> {
	isCreatable?: boolean;
	msgNoOptionsAvailable?: string;
	msgNoOptionsMatchFilter?: string;
	msgNoValidValue?: string;
}

export interface ReactSelectMaterialUiProps extends React.Props<ReactSelectMaterialUi>, BaseTextFieldProps {
	defaltValue?: string;
	defaultValues?: string[];
	options: (string | SelectOption)[];
	onChange: (value: string | string[] | React.ChangeEvent<any>) => void;
	SelectProps?: SelectProps | any;
	value?: string;
	values?: string[];
}

declare class ReactSelectMaterialUi extends React.Component<ReactSelectMaterialUiProps> {}

declare class SingleSelect extends React.Component<ReactSelectMaterialUiProps> {}

declare class MultipleSelect extends React.Component<ReactSelectMaterialUiProps> {}

declare class TagSelect extends React.Component<ReactSelectMaterialUiProps> {}

declare class TagsSelect extends React.Component<ReactSelectMaterialUiProps> {}

declare class ColorSelect extends React.Component<ReactSelectMaterialUiProps> {}

declare class ColorsSelect extends React.Component<ReactSelectMaterialUiProps> {}

declare module 'react-select-material-ui' {

}

export default ReactSelectMaterialUi;
export { SingleSelect, MultipleSelect, TagSelect, TagsSelect, ColorSelect, ColorsSelect };
