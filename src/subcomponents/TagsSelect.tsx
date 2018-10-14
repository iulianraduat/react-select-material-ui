import * as React from "react";
import { MaterialUiCreatableProps } from "../MaterialUiCreatable";
import MultipleSelect from "./MultipleSelect";

const TagsSelect = (props: MaterialUiCreatableProps) => (
  <MultipleSelect
    label="Choose some tags"
    {...props}
    SelectProps={{
      msgNoOptionsAvailable: "No more tags are available",
      msgNoOptionsMatchFilter: "No tags match the filter",
      ...props.SelectProps
    }}
  />
);

export default TagsSelect;
