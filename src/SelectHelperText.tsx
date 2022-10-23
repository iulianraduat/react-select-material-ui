import { FormHelperText, FormHelperTextProps } from '@mui/material';
import isEmpty from 'lodash/isEmpty';
import { ReactNode } from 'react';

export default function SelectHelperText(props: SelectHelperTextProps) {
  const { id, helperText, formHelperTextProps } = props;

  if (isEmpty(helperText)) {
    return null;
  }

  return (
    <FormHelperText id={id} variant="standard" {...formHelperTextProps}>
      {helperText}
    </FormHelperText>
  );
}

interface SelectHelperTextProps {
  id?: string;
  helperText?: ReactNode;
  formHelperTextProps?: Partial<FormHelperTextProps>;
}
