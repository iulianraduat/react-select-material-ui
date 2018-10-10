import * as React from 'react';
import ReactSelectMaterialUi, { ReactSelectMaterialUiProps } from './ReactSelectMaterialUi';

const MaterialUiCreatable = (props: ReactSelectMaterialUiProps) => (
    <ReactSelectMaterialUi
        {...props}
        SelectProps={{
            formatCreateLabel: (value: string) => `${value} (new)`,
            ...props.SelectProps,
            backspaceRemovesValue: false
        }}
    />
);

export type MaterialUiCreatableProps = ReactSelectMaterialUiProps;

export default MaterialUiCreatable;
