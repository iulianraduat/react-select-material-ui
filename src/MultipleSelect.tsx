import * as React from 'react';
import MaterialUiCreatable, {MaterialUiCreatableProps} from './MaterialUiCreatable';

const MultipleSelect = (props: MultiSelectProps) => (
    <MaterialUiCreatable
        {...props}
        SelectProps={{
            ...props.SelectProps,
            isMulti: true,
            isClearable: true
        }}
        fullWidth={true}
    />
);

export type MultiSelectProps = MaterialUiCreatableProps;

export default MultipleSelect;
