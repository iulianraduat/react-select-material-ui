import * as React from "react";
import { MaterialUiCreatableProps } from "../MaterialUiCreatable";
import SingleSelect from "./SingleSelect";

const TagsSelect = (props: MaterialUiCreatableProps) => (
  <SingleSelect
    label="Choose a tag"
    {...props}
    SelectProps={{
      msgNoOptionsMatchFilter: "No tags match the filter",
      ...props.SelectProps
    }}
  />
);

export default TagsSelect;
