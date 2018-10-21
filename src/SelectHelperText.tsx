import * as React from "react";
import { isEmpty } from "lodash";
import FormHelperText, { FormHelperTextProps } from "@material-ui/core/FormHelperText/FormHelperText";

const SelectHelperText = (props: SelectHelperTextProps) => {
  const { id, helperText, formHelperTextProps } = props;

  if (isEmpty(helperText)) {
    return null;
  }

  return (
    <FormHelperText id={id} {...formHelperTextProps}>
      {helperText}
    </FormHelperText>
  );
};

interface SelectHelperTextProps {
  id?: string;
  helperText?: React.ReactNode;
  formHelperTextProps?: Partial<FormHelperTextProps>;
}

export default SelectHelperText;
