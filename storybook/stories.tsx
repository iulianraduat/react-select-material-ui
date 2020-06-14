import ATDynamicUpdateValuesControlledComponent from "./ATDynamicUpdateValuesControlledComponent";
import ClearValues from "./ClearValues";
import ColorsSelect from "../src/subcomponents/ColorsSelect";
import MultipleSelect from "../src/subcomponents/MultipleSelect";
import React from "react";
import ReactSelectMaterialUi, {
  SelectOption,
} from "../src/ReactSelectMaterialUi";
import SingleSelect from "../src/subcomponents/SingleSelect";
import TagsSelect from "../src/subcomponents/TagsSelect";
import { storiesOf } from "@storybook/react";
import { StylesConfig } from "react-select";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import Issue32 from "./Issue32";

const style: React.CSSProperties = {
  height: 20,
};

const styles: { [key: string]: React.CSSProperties } = {
  div: {
    backgroundColor: "#444444",
    padding: "20px 20px 200px 20px",
  },
  label: {
    color: "#ffffff",
  },
  link: {
    marginLeft: 20,
    marginBottom: 20,
  },
};

const stylesFn: StylesConfig = {
  clearIndicator: (base: any) => ({
    ...base,
    color: "#ffff80",
    "&:hover": { color: "#ff0000" },
  }),
  control: (base: any, state: any) => ({
    ...base,
    background: "transparent",
    borderBottom: state.isFocused ? "#ff0000" : "#ffff80",
    borderBottomWidth: 3,
    borderBottomStyle: "solid",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderRadius: 0,
    boxShadow: "none",
    marginRight: 25,
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    color: "#ffff80",
    "&:hover": { color: "#ff0000" },
  }),
  menuList: (base: any) => ({
    ...base,
    backgroundColor: "#123456",
    color: "#ffffff",
  }),
  multiValue: (base: any) => ({
    ...base,
    backgroundColor: "#888888",
  }),
  multiValueLabel: (base: any) => ({
    ...base,
    color: "#ffff80",
  }),
  multiValueRemove: (base: any) => ({
    ...base,
    color: "#ffff80",
    "&:hover": { color: "#ff0000", backgroundColor: "rgba(0,0,0,0)" },
  }),
  noOptionsMessage: (base: any) => ({
    ...base,
    backgroundColor: "#888888",
    color: "#ffff80",
    textAlign: "left",
  }),
  option: (base: any, { isSelected }) => ({
    ...base,
    backgroundColor: isSelected ? "#ffff80" : "#123456",
    color: isSelected ? "#123456" : "#ffffff",
    "&:hover": { backgroundColor: "#234567", color: "#ffff80" },
  }),
  singleValue: (base: any) => ({
    ...base,
    backgroundColor: "#444444",
    color: "#ffff80",
  }),
};

const noticeFormHelperTextProps = {
  style: {
    color: "#404040",
  },
};

const simpleOptions: string[] = ["Option 1", "Option 2", "Option 3"];

const complexOptions: SelectOption[] = [
  {
    label: "Option 1",
    value: "Value 1",
  },
  {
    label: "Option 2",
    value: "Value 2",
  },
  {
    label: "Option 3",
    value: "Value 3",
  },
];

const subOptions: SelectOption[] = [
  {
    label: "Group 1",
    options: [
      { label: "Group 1, option 1", value: "value 1.1" },
      { label: "Group 1, option 2", value: "value 1.2" },
    ],
  },
  {
    label: "Group 2",
    options: [
      { label: "Group 2, option 1", value: "value 2.1" },
      { label: "Group 2, option 2", value: "value 2.2" },
    ],
  },
  {
    label: "Option 3",
    value: "Value 3",
  },
  {
    label: "Option 4",
    value: "Value 4",
  },
];

const emptyStringInitialValueOptions: SelectOption[] = [
  {
    value: "",
    label: "One",
  },
  {
    value: "two",
    label: "Two",
  },
];

const tagOptions: string[] = ["Tag1", "Tag2", "Tag3"];

const colorOptions: string[] = ["red", "blue", "#13579a"];

const customMessages = {
  msgNoOptionsAvailable: "You already used all options",
  msgNoOptionsMatchFilter: "No match. Sorry",
  msgNoValidValue: "Try 'Hello'",
};

const option2value = (option) => option.value;

const formatCreateLabel = (value: string) => `${value} (New Label)`;

const isValidNewOption = (inputValue: string) => inputValue === "Hello";

const doNothing = () => {};

const getDiffOption = (value: string, option?: SelectOption) => {
  if (
    option === undefined ||
    option.label === undefined ||
    option.label === value
  ) {
    return "";
  }

  return `" | Selected label: "${option.label}`;
};

const showSelectedValue = (id: string) => (
  value: string,
  option?: SelectOption
) => {
  document.getElementById(id).textContent = `"${
    value + getDiffOption(value, option)
  }"`;
};

/////////

const filterOption = (option: any, rawInput: string): boolean => {
  console.log({
    option,
    rawInput,
  });
  return true;
};

storiesOf("ReactSelectMaterialUi", module)
  .addParameters({ options: { showPanel: false } })
  .add("with and without fullWidth set", () => (
    <div>
      <ReactSelectMaterialUi
        label="Without fullWith"
        options={simpleOptions}
        onChange={doNothing}
        SelectProps={{
          filterOption,
        }}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="With fullWith"
        options={simpleOptions}
        fullWidth={true}
        onChange={doNothing}
      />
    </div>
  ))
  .add("not allowing creating new options", () => (
    <div>
      <ReactSelectMaterialUi
        label="Clearable - Single select"
        options={simpleOptions}
        SelectProps={{ isClearable: true }}
        fullWidth={true}
        onChange={showSelectedValue("nacno")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Not clearable - Single select"
        options={simpleOptions}
        SelectProps={{ isClearable: false }}
        fullWidth={true}
        onChange={showSelectedValue("nacno")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Clearable - Multiple select"
        options={simpleOptions}
        SelectProps={{ isClearable: true, isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("nacno")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Not clearable - Multiple select"
        options={simpleOptions}
        SelectProps={{ isClearable: false, isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("nacno")}
      />
      <div style={style} />
      Selected value: <span id="nacno"></span>
    </div>
  ))
  .add("allowing creating new options", () => (
    <div>
      <ReactSelectMaterialUi
        label="Clearable - Single select"
        options={simpleOptions}
        SelectProps={{ isClearable: true, isCreatable: true }}
        fullWidth={true}
        onChange={showSelectedValue("acno")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Not clearable - Single select"
        options={simpleOptions}
        SelectProps={{ isClearable: false, isCreatable: true }}
        fullWidth={true}
        onChange={showSelectedValue("acno")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Clearable - Multiple select"
        options={simpleOptions}
        SelectProps={{ isClearable: true, isCreatable: true, isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("acno")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Not clearable - Multiple select"
        options={simpleOptions}
        SelectProps={{ isClearable: false, isCreatable: true, isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("acno")}
      />
      <div style={style} />
      Selected value: <span id="acno"></span>
    </div>
  ))
  .add("with options having label and value equal", () => (
    <div>
      <ReactSelectMaterialUi
        label="Options having label and value equal"
        options={simpleOptions}
        fullWidth={true}
        onChange={showSelectedValue("ohlve")}
      />
      <div style={style} />
      Selected value: <span id="ohlve"></span>
    </div>
  ))
  .add("with options having label and value different", () => (
    <div>
      <ReactSelectMaterialUi
        label="Options having label and value different"
        options={complexOptions}
        fullWidth={true}
        onChange={showSelectedValue("ohlvd")}
      />
      <div style={style} />
      Selected value: <span id="ohlvd"></span>
    </div>
  ))
  .add("with defaultValue(s)", () => (
    <div>
      <ReactSelectMaterialUi
        label="Default value - Label and value equal - Single select"
        options={simpleOptions}
        defaultValue={simpleOptions[1]}
        defaultValues={simpleOptions.slice(1, 3)}
        helperText="uses defaultValue, ignore defaultValues"
        FormHelperTextProps={noticeFormHelperTextProps}
        fullWidth={true}
        onChange={showSelectedValue("dv")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Default value - Label and value different - Single select"
        options={complexOptions}
        defaultValue={complexOptions[1].value}
        defaultValues={simpleOptions.slice(1, 3)}
        helperText="uses defaultValue, ignore defaultValues"
        FormHelperTextProps={noticeFormHelperTextProps}
        fullWidth={true}
        onChange={showSelectedValue("dv")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Default value - Label and value equal - Multiple select"
        options={simpleOptions}
        defaultValues={simpleOptions.slice(1, 3)}
        defaultValue={simpleOptions[1]}
        helperText="uses defaultValues, ignore defaultValue"
        FormHelperTextProps={noticeFormHelperTextProps}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("dv")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Default value - Label and value different - Multiple select"
        options={complexOptions}
        defaultValues={complexOptions.slice(1, 3).map(option2value)}
        defaultValue={simpleOptions[1]}
        helperText="uses defaultValues, ignore defaultValue"
        FormHelperTextProps={noticeFormHelperTextProps}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("dv")}
      />
      <div style={style} />
      Selected value: <span id="dv"></span>
    </div>
  ))
  .add("with value(s)", () => (
    <div>
      <ReactSelectMaterialUi
        label="Value - Label and value equal - Single select"
        options={simpleOptions}
        value={simpleOptions[1]}
        values={simpleOptions.slice(1, 3)}
        helperText="uses value, ignore values"
        FormHelperTextProps={noticeFormHelperTextProps}
        fullWidth={true}
        onChange={showSelectedValue("v")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Value - Label and value different - Single select"
        options={complexOptions}
        value={complexOptions[1].value}
        values={simpleOptions.slice(1, 3)}
        helperText="uses value, ignore values"
        FormHelperTextProps={noticeFormHelperTextProps}
        fullWidth={true}
        onChange={showSelectedValue("v")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Value - Label and value equal - Multiple select"
        options={simpleOptions}
        values={simpleOptions.slice(1, 3)}
        value={simpleOptions[1]}
        helperText="uses values, ignore value"
        FormHelperTextProps={noticeFormHelperTextProps}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("v")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Value - Label and value different - Multiple select"
        options={complexOptions}
        values={complexOptions.slice(1, 3).map(option2value)}
        value={simpleOptions[1]}
        helperText="uses values, ignore value"
        FormHelperTextProps={noticeFormHelperTextProps}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("v")}
      />
      <div style={style} />
      The value passed in onChange(): <span id="v"></span>
    </div>
  ))
  .add("with an empty string as initial value", () => (
    <div>
      <ReactSelectMaterialUi
        defaultValue={""}
        options={emptyStringInitialValueOptions}
        fullWidth={true}
        onChange={showSelectedValue("esiv")}
      />
      <div style={style} />
      The value passed in onChange(): <span id="esiv"></span>
    </div>
  ))
  .add("with and without helper text", () => (
    <div>
      <ReactSelectMaterialUi
        label="With helper text"
        options={simpleOptions}
        helperText="Please select Option 2"
        fullWidth={true}
        onChange={doNothing}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Without helper text"
        options={simpleOptions}
        fullWidth={true}
        onChange={doNothing}
      />
    </div>
  ))
  .add("with customized messages", () => (
    <div>
      <ReactSelectMaterialUi
        label="Messages when you cannot create new options"
        options={simpleOptions}
        SelectProps={{ ...customMessages, isMulti: true }}
        fullWidth={true}
        onChange={doNothing}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Messages when you can create new options"
        options={simpleOptions}
        SelectProps={{
          ...customMessages,
          formatCreateLabel,
          isValidNewOption,
          isCreatable: true,
          isMulti: true,
        }}
        fullWidth={true}
        onChange={doNothing}
      />
    </div>
  ))
  .add("clear value(s) button", () => {
    return <ClearValues disabled={false} />;
  })
  .add("no clear value(s) button when component is disabled", () => (
    <ClearValues disabled={true} />
  ))
  .add("adding options in a multiple select", () => (
    <div>
      <ReactSelectMaterialUi
        label="Select one with one"
        options={simpleOptions}
        defaultValue={simpleOptions[0]}
        SelectProps={{
          isMulti: true,
          closeMenuOnSelect: true,
        }}
        fullWidth={true}
        onChange={doNothing}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Select more at once"
        options={simpleOptions}
        defaultValues={[simpleOptions[0]]}
        SelectProps={{
          isMulti: true,
          closeMenuOnSelect: false,
        }}
        fullWidth={true}
        onChange={doNothing}
      />
    </div>
  ))
  .add("disabled", () => (
    <div>
      <ReactSelectMaterialUi
        label="Single select"
        options={simpleOptions}
        defaultValue={simpleOptions[0]}
        disabled={true}
        fullWidth={true}
        onChange={doNothing}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Multiple select"
        options={simpleOptions}
        defaultValues={[simpleOptions[0]]}
        disabled={true}
        SelectProps={{
          isMulti: true,
        }}
        fullWidth={true}
        onChange={doNothing}
      />
    </div>
  ))
  .add("styled", () => (
    <div style={styles.div}>
      <ReactSelectMaterialUi
        label="Single select"
        options={simpleOptions}
        defaultValue={simpleOptions[0]}
        InputLabelProps={{ style: styles.label }}
        SelectProps={{
          isClearable: true,
          styles: stylesFn,
        }}
        fullWidth={true}
        onChange={doNothing}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Multiple select"
        options={simpleOptions}
        defaultValues={[simpleOptions[0]]}
        InputLabelProps={{ style: styles.label }}
        SelectProps={{
          isClearable: true,
          isMulti: true,
          styles: stylesFn,
        }}
        fullWidth={true}
        onChange={doNothing}
      />
    </div>
  ));

storiesOf("Group of options", module)
  .addParameters({ options: { showPanel: false } })
  .add("without defaultValue(s) nor value(s)", () => (
    <div>
      <ReactSelectMaterialUi
        label="Single select"
        options={subOptions}
        fullWidth={true}
        onChange={showSelectedValue("so1")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Multiple select"
        options={subOptions}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("so1")}
      />
      <div style={style} />
      The value passed in onChange(): <span id="so1"></span>
    </div>
  ))
  .add("with defaultValue(s)", () => (
    <div>
      <ReactSelectMaterialUi
        label="Single select"
        options={subOptions}
        defaultValue={subOptions[0].options[0].value}
        fullWidth={true}
        onChange={showSelectedValue("so2")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Multiple select"
        options={subOptions}
        defaultValues={subOptions[1].options.map(option2value)}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("so2")}
      />
      <div style={style} />
      The value passed in onChange(): <span id="so2"></span>
    </div>
  ))
  .add("with value(s)", () => (
    <div>
      <ReactSelectMaterialUi
        label="Single select"
        options={subOptions}
        value={subOptions[0].options[0].value}
        fullWidth={true}
        onChange={showSelectedValue("so3")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Multiple select"
        options={subOptions}
        values={subOptions[1].options.map(option2value)}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("so3")}
      />
      <div style={style} />
      The value passed in onChange(): <span id="so3"></span>
    </div>
  ));

storiesOf("Subcomponents", module)
  .addParameters({ options: { showPanel: false } })
  .add("SingleSelect", () => (
    <div>
      <SingleSelect
        label="Not allowing a new value"
        options={simpleOptions}
        onChange={showSelectedValue("ss")}
      />
      <div style={style} />
      <SingleSelect
        label="Allowing a new value"
        options={simpleOptions}
        SelectProps={{ isCreatable: true }}
        onChange={showSelectedValue("ss")}
      />
      <div style={style} />
      Selected value: <span id="ss"></span>
    </div>
  ))
  .add("MultipleSelect", () => (
    <div>
      <MultipleSelect
        label="Not allowing a new value"
        options={simpleOptions}
        onChange={showSelectedValue("ms")}
      />
      <div style={style} />
      <MultipleSelect
        label="Allowing a new value"
        options={simpleOptions}
        SelectProps={{ isCreatable: true }}
        onChange={showSelectedValue("ms")}
      />
      <div style={style} />
      Selected value: <span id="ms"></span>
    </div>
  ))
  .add("TagsSelect", () => (
    <div>
      <TagsSelect
        label="Not allowing a new tag"
        options={tagOptions}
        onChange={showSelectedValue("ts")}
      />
      <div style={style} />
      <TagsSelect
        label="Allowing a new tag"
        options={tagOptions}
        helperText="Try without space"
        SelectProps={{ isCreatable: true }}
        onChange={showSelectedValue("ts")}
      />
      <div style={style} />
      Selected value: <span id="ts"></span>
    </div>
  ))
  .add("ColorsSelect", () => (
    <div>
      <ColorsSelect
        label="Not allowing a new color"
        options={colorOptions}
        onChange={showSelectedValue("cs")}
      />
      <div style={style} />
      <ColorsSelect
        label="Allowing a new color"
        options={colorOptions}
        helperText="Try 'aqua'"
        SelectProps={{ isCreatable: true }}
        onChange={showSelectedValue("cs")}
      />
      <div style={style} />
      Selected value: <span id="cs"></span>
    </div>
  ));

storiesOf("Dynamic update of values for a controlled component", module)
  .addParameters({ options: { showPanel: false } })
  .add("ReactSelectMaterialUi", () => (
    <div>
      <ATDynamicUpdateValuesControlledComponent Comp={ReactSelectMaterialUi} />
      <p>The selected value should change every 0.5 seconds.</p>
    </div>
  ))
  .add("SingleSelect", () => (
    <div>
      <ATDynamicUpdateValuesControlledComponent Comp={SingleSelect} />
      <p>The selected value should change every 0.5 seconds.</p>
    </div>
  ))
  .add("MultipleSelect", () => (
    <div>
      <ATDynamicUpdateValuesControlledComponent Comp={MultipleSelect} />
      <p>The selected value should change every 0.5 seconds.</p>
    </div>
  ))
  .add("TagsSelect", () => (
    <div>
      <ATDynamicUpdateValuesControlledComponent
        Comp={TagsSelect}
        options={tagOptions}
      />
      <p>The selected value should change every 0.5 seconds.</p>
    </div>
  ))
  .add("ColorsSelect", () => (
    <div>
      <ATDynamicUpdateValuesControlledComponent
        Comp={ColorsSelect}
        options={colorOptions}
      />
      <p>The selected value should change every 0.5 seconds.</p>
    </div>
  ))
  .add("ReactSelectMaterialUi with many options", () => (
    <div>
      <ATDynamicUpdateValuesControlledComponent
        Comp={ReactSelectMaterialUi}
        useHugeOptionsList={true}
      />
      <p>The selected value should change every 0.5 seconds.</p>
    </div>
  ));

const issue28Options: string[] = [
  "Action flag",
  "Celebration flag",
  "Information flag",
  "Response flag",
];

storiesOf("Issues", module)
  .addParameters({ options: { showPanel: false } })
  .add("#26", () => (
    <div>
      <div style={styles.link}>
        <a
          href="https://github.com/iulian-radu-at/react-select-material-ui/issues/26"
          target="_blank"
        >
          Issue #26 in Github
        </a>
      </div>

      <ReactSelectMaterialUi
        id="issue26"
        label="Label is referencing the input"
        options={simpleOptions}
        helperText="if you provide an id"
        fullWidth={true}
        onChange={doNothing}
      />
    </div>
  ))
  .add("#28", () => (
    <div>
      <div style={styles.link}>
        <a
          href="https://github.com/iulian-radu-at/react-select-material-ui/issues/28"
          target="_blank"
        >
          Issue #28 in Github
        </a>
      </div>
      <ReactSelectMaterialUi
        label="Filter by flag"
        options={issue28Options}
        fullWidth={true}
        onChange={doNothing}
      />
      <FormControlLabel
        control={<Checkbox name="actionFlag" color="primary" />}
        label="Action flag"
        style={{ width: "100%" }}
      />
      <FormControlLabel
        control={<Checkbox name="celebrationFlag" color="primary" />}
        label="Celebration flag"
        style={{ width: "100%" }}
      />
      <FormControlLabel
        control={<Checkbox name="informationFlag" color="primary" />}
        label="Information flag"
        style={{ width: "100%" }}
      />
      <FormControlLabel
        control={<Checkbox name="responseFlag" color="primary" />}
        label="Response flag"
        style={{ width: "100%" }}
      />
      <div style={style} />
      The checkboxes should be covered by options dialog
    </div>
  ))
  .add("#32", () => (
    <div>
      <Issue32 />
    </div>
  ));
