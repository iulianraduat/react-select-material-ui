import * as React from 'react';
import MaterialUiCreatable, {MaterialUiCreatableProps} from './MaterialUiCreatable';

const SingleSelect = (props: SingleSelectProps) => (
    <MaterialUiCreatable
        {...props}
        SelectProps={{
            ...props.SelectProps,
            isMulti: false
        }}
        fullWidth={true}
    />
);

export type SingleSelectProps = MaterialUiCreatableProps;

export default SingleSelect;
