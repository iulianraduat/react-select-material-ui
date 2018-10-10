import * as React from 'react';
import {isEmpty} from 'lodash';
import InputLabel, {InputLabelProps} from '@material-ui/core/InputLabel/InputLabel';
import {colorNoFocus, colorFocus} from './ColorConstants';

const SelectLabel = (props: SelectLabelProps) => {
    const { id, label, hasInputFocus, shrink, inputLabelProps } = props;

    if (isEmpty(label)) {
        return null;
    }

    const style: React.CSSProperties = {
        position: 'relative',
        color: hasInputFocus ? colorFocus : colorNoFocus
    }

    return (
        <InputLabel htmlFor={id} {...inputLabelProps} style={style} shrink={shrink}>
            {label}
        </InputLabel>
    );
}

interface SelectLabelProps {
    id?: string;
    label?: React.ReactNode;
    shrink?: boolean;
    hasInputFocus?: boolean;
    inputLabelProps?: Partial<InputLabelProps>;
}

export default SelectLabel;
