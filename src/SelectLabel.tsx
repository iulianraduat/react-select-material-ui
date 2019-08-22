import * as React from 'react';
import InputLabel, { InputLabelProps } from '@material-ui/core/InputLabel/InputLabel';
import { colorFocus, colorNoFocus } from './ColorConstants';
import { isEmpty } from 'lodash';

const SelectLabel = (props: SelectLabelProps) => {
    const { id, label, hasInputFocus, shrink, inputLabelProps } = props;

    if (isEmpty(label)) {
        return null;
    }

    const style: React.CSSProperties = {
        position: 'relative',
        color: hasInputFocus ? colorFocus : colorNoFocus
    }

    const userStyle: React.CSSProperties | undefined = inputLabelProps ? inputLabelProps.style : undefined;

    return (
        <InputLabel htmlFor={id} {...inputLabelProps} style={getStyle(style, userStyle)} shrink={shrink}>
            {label}
        </InputLabel>
    );
}

const getStyle = (style: React.CSSProperties, userStyle?: React.CSSProperties): React.CSSProperties => userStyle ? {...style, ...userStyle} : style;

interface SelectLabelProps {
    hasInputFocus?: boolean;
    id?: string;
    inputLabelProps?: Partial<InputLabelProps>;
    label?: React.ReactNode;
    shrink?: boolean;
}

export default SelectLabel;
