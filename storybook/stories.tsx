import ATDynamicUpdateValuesControlledComponent from './ATDynamicUpdateValuesControlledComponent';
import ColorsSelect from '../src/subcomponents/ColorsSelect';
import MultipleSelect from '../src/subcomponents/MultipleSelect';
import React from 'react';
import ReactSelectMaterialUi, { SelectOption } from '../src/ReactSelectMaterialUi';
import SingleSelect from '../src/subcomponents/SingleSelect';
import TagsSelect from '../src/subcomponents/TagsSelect';
import { storiesOf } from '@storybook/react';
import { StylesConfig } from 'react-select/lib/styles';

const style: React.CSSProperties = {
  height: 20
};

const styles: {[key: string]: React.CSSProperties} = {
  div: {
    backgroundColor: '#444444',
    padding: '20px 20px 200px 20px'
  },
  label: {
    color: '#ffffff'
  }
};

const stylesFn: StylesConfig = {
    clearIndicator: (base: any) => ({
      ...base,
      color: '#ffff80',
      '&:hover': { color: '#ff0000' }
    }),
    dropdownIndicator: (base: any) => ({
      ...base,
      color: '#ffff80',
      '&:hover': { color: '#ff0000' }
    }),
    menuList: (base: any) => ({
      ...base,
      backgroundColor: '#123456',
      color: '#ffffff'
    }),
    multiValue: (base: any) => ({
      ...base,
      backgroundColor: '#888888'
    }),
    multiValueLabel: (base: any) => ({
      ...base,
      color: '#ffff80'
    }),
    multiValueRemove: (base: any) => ({
      ...base,
      color: '#ffff80',
      '&:hover': { color: '#ff0000', backgroundColor: 'rgba(0,0,0,0)' }
    }),
    noOptionsMessage: (base: any) => ({
      ...base,
      backgroundColor: '#888888',
      color: '#ffff80',
      textAlign: 'left'
    }),
    option: (base: any, { isSelected }) => ({
      ...base,
      backgroundColor: isSelected ? '#ffff80' : '#123456',
      color: isSelected ? '#123456' : '#ffffff',
      '&:hover': { backgroundColor: '#234567', color: '#ffff80' }
    }),
    singleValue: (base: any) => ({
      ...base,
      backgroundColor: '#444444',
      color: '#ffff80'
    }),
}

const simpleOptions: string[] = ["Option 1", "Option 2", "Option 3"];

const complexOptions: SelectOption[] = [
  {
    label: "Option 1",
    value: "Value 1"
  },
  {
    label: "Option 2",
    value: "Value 2"
  },
  {
    label: "Option 3",
    value: "Value 3"
  }
];

const subOptions: SelectOption[] = [
  {
    label: "Group 1",
    options: [
      { label: "Group 1, option 1", value: "value 1.1" },
      { label: "Group 1, option 2", value: "value 1.2" }
    ]
  },
  {
    label: "Group 2",
    options: [
      { label: "Group 2, option 1", value: "value 2.1" },
      { label: "Group 2, option 2", value: "value 2.2" }
    ]
  },
  {
    label: "Option 3",
    value: "Value 3"
  },
  {
    label: "Option 4",
    value: "Value 4"
  }
];

const tagOptions: string[] = ["Tag1", "Tag2", "tag3"];

const colorOptions: string[] = ["red", "blue", "#13579a"];

const customMessages = {
  msgNoOptionsAvailable: "You already used all options",
  msgNoOptionsMatchFilter: "No match. Sorry",
  msgNoValidValue: "Try 'Hello'"
};

const option2value = option => option.value;

const formatCreateLabel = (value: string) => `${value} (New Label)`;

const isValidNewOption = (inputValue: string) => inputValue === "Hello";

const doNothing = () => {};

const getDiffOption = (value: string, option?: SelectOption) => {
  if(option === undefined || option.label === undefined || option.label === value){
    return '';
  }

  return ` | Selected label: ${option.label}`;
}

const showSelectedValue = (id: string) => (value: string, option?: SelectOption) =>
  (document.getElementById(id).textContent = value + getDiffOption(value, option));

storiesOf("ReactSelectMaterialUi", module)
  .addParameters({ options: { showPanel: false } })
  .add("with and without fullWidth set", () => (
    <div>
      <ReactSelectMaterialUi
        label="Without fullWith"
        options={simpleOptions}
        onChange={doNothing}
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
  .add("single and multiple select - not allowing creating ew options", () => (
    <div>
      <ReactSelectMaterialUi
        label="Single select"
        options={simpleOptions}
        fullWidth={true}
        onChange={doNothing}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Multiple select"
        options={simpleOptions}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={doNothing}
      />
    </div>
  ))
  .add("single and multiple select - allowing creating new options", () => (
    <div>
      <ReactSelectMaterialUi
        label="Single select"
        options={simpleOptions}
        SelectProps={{ isCreatable: true }}
        fullWidth={true}
        onChange={doNothing}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Multiple select"
        options={simpleOptions}
        SelectProps={{ isCreatable: true, isMulti: true }}
        fullWidth={true}
        onChange={doNothing}
      />
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
  .add("clearable and not clearable", () => (
    <div>
      <ReactSelectMaterialUi
        label="Clearable - Single select"
        options={simpleOptions}
        SelectProps={{ isClearable: true }}
        fullWidth={true}
        onChange={showSelectedValue("cnc")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Not clearable - Single select"
        options={simpleOptions}
        SelectProps={{ isClearable: false }}
        fullWidth={true}
        onChange={showSelectedValue("cnc")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Clearable - Multiple select"
        options={simpleOptions}
        SelectProps={{ isClearable: true, isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("cnc")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Not clearable - Multiple select"
        options={simpleOptions}
        SelectProps={{ isClearable: false, isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("cnc")}
      />
      <div style={style} />
      Selected value: <span id="cnc"></span>
    </div>
  ))
  .add("with defaultValue", () => (
    <div>
      <ReactSelectMaterialUi
        label="Default value - Label and value equal - Single select"
        options={simpleOptions}
        defaultValue={simpleOptions[1]}
        fullWidth={true}
        onChange={showSelectedValue("dv")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Default value - Label and value different - Single select"
        options={complexOptions}
        defaultValue={complexOptions[1].value}
        fullWidth={true}
        onChange={showSelectedValue("dv")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Default value - Label and value equal - Multiple select"
        options={simpleOptions}
        defaultValue={simpleOptions.slice(1, 3)}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("dv")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Default value - Label and value different - Multiple select"
        options={complexOptions}
        defaultValue={complexOptions.slice(1, 3).map(option2value)}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("dv")}
      />
      <div style={style} />
      Selected value: <span id="dv"></span>
    </div>
  ))
  .add("with value", () => (
    <div>
      <ReactSelectMaterialUi
        label="Value - Label and value equal - Single select"
        options={simpleOptions}
        value={simpleOptions[1]}
        fullWidth={true}
        onChange={showSelectedValue("v")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Value - Label and value different - Single select"
        options={complexOptions}
        value={complexOptions[1].value}
        fullWidth={true}
        onChange={showSelectedValue("v")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Value - Label and value equal - Multiple select"
        options={simpleOptions}
        value={simpleOptions.slice(1, 3)}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("v")}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Value - Label and value different - Multiple select"
        options={complexOptions}
        value={complexOptions.slice(1, 3).map(option2value)}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue("v")}
      />
      <div style={style} />
      The value passed in onChange(): <span id="v"></span>
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
        SelectProps={{ ...customMessages, formatCreateLabel, isValidNewOption, isCreatable: true, isMulti: true }}
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
        InputLabelProps={{style: styles.label}}
        SelectProps={{
          isClearable: true,
          styles: stylesFn
        }}
        fullWidth={true}
        onChange={doNothing}
      />
      <div style={style}/>
      <ReactSelectMaterialUi
        label="Multiple select"
        options={simpleOptions}
        defaultValues={[simpleOptions[0]]}
        InputLabelProps={{style: styles.label}}
        SelectProps={{
          isClearable: true,
          isMulti: true,
          styles: stylesFn
        }}
        fullWidth={true}
        onChange={doNothing}
      />
    </div>
  ));

storiesOf("Group of options", module)
  .addParameters({ options: { showPanel: false } })
  .add("without defaultValue nor value", () => (
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
  .add("with defaultValue", () => (
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
  .add("with value", () => (
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
      <ATDynamicUpdateValuesControlledComponent Comp={ReactSelectMaterialUi}/>
      <p>The selected value should change every 0.5 seconds.</p>
    </div>
  ))
  .add("SingleSelect", () => (
    <div>
      <ATDynamicUpdateValuesControlledComponent Comp={SingleSelect}/>
      <p>The selected value should change every 0.5 seconds.</p>
    </div>
  ))
  .add("MultipleSelect", () => (
    <div>
      <ATDynamicUpdateValuesControlledComponent Comp={MultipleSelect}/>
      <p>The selected value should change every 0.5 seconds.</p>
    </div>
  ))
  .add("TagsSelect", () => (
    <div>
      <ATDynamicUpdateValuesControlledComponent Comp={TagsSelect}/>
      <p>The selected value should change every 0.5 seconds.</p>
    </div>
  ))
  .add("ColorsSelect", () => (
    <div>
      <ATDynamicUpdateValuesControlledComponent Comp={ColorsSelect}/>
      <p>The selected value should change every 0.5 seconds.</p>
    </div>
  ))
  .add("ReactSelectMaterialUi with many options", () => (
    <div>
      <ATDynamicUpdateValuesControlledComponent Comp={ReactSelectMaterialUi} useHugeOptionsList={true}/>
      <p>The selected value should change every 0.5 seconds.</p>
    </div>
  ))
;
