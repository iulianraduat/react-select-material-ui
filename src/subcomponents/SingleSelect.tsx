import * as React from 'react';
import MaterialUiCreatable, {MaterialUiCreatableProps} from '../MaterialUiCreatable';

const SingleSelect = (props: MaterialUiCreatableProps) => (
    <MaterialUiCreatable
        {...props}
        SelectProps={{
            ...props.SelectProps,
            isMulti: false
        }}
        fullWidth={true}
    />
);

export default SingleSelect;
