import * as React from 'react';
import {isEmpty} from 'lodash';
import FormHelperText, {FormHelperTextProps} from '@material-ui/core/FormHelperText/FormHelperText';

const SelectHelperText = (props: SelectHelperTextProps) => {
    const { helperTextId, helperText, formHelperTextProps } = props;

    if (isEmpty(helperText)) {
        return null;
    }

    return (
        <FormHelperText id={helperTextId} {...formHelperTextProps}>
            {helperText}
        </FormHelperText>
    );
}

interface SelectHelperTextProps {
    helperTextId?: string;
    helperText?: React.ReactNode;
    formHelperTextProps?: Partial<FormHelperTextProps>;
}

export default SelectHelperText;
