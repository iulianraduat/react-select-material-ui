import * as React from 'react';
import { StandardTextFieldProps } from '@material-ui/core/TextField';
import { Props as ReactSelectProps } from 'react-select/lib/Select';

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

export interface ReactSelectMaterialUiProps extends React.Props<ReactSelectMaterialUi>, StandardTextFieldProps {
    isCreatable?: boolean;
    value?: string;
    values?: string[];
    options: (string | SelectOption)[];
    onChange: (value: string | string[] | React.ChangeEvent<any>) => void;
    SelectProps?: SelectProps | any;
}

declare class ReactSelectMaterialUi extends React.Component<ReactSelectMaterialUiProps> {
}

declare module 'react-select-material-ui' {
}

export default ReactSelectMaterialUi;
