import { createTheme, ThemeProvider } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { StylesConfig } from 'react-select';
import ReactSelectMaterialUi, {
  SelectOption,
} from '../src/ReactSelectMaterialUi';
import ClearValues from './ClearValues';

const style: React.CSSProperties = {
  height: 20,
};

const styles: { [key: string]: React.CSSProperties } = {
  div: {
    backgroundColor: '#444444',
    padding: '20px 20px 200px 20px',
  },
  label: {
    color: '#ffffff',
  },
  link: {
    marginLeft: 20,
    marginBottom: 20,
  },
};

const stylesFn: StylesConfig<unknown, false> = {
  clearIndicator: (base: any) => ({
    ...base,
    color: '#ffff80',
    '&:hover': { color: '#ff0000' },
  }),
  control: (base: any, state: any) => ({
    ...base,
    background: 'transparent',
    borderBottomColor: state.isFocused ? '#ff0000' : '#ffff80',
    borderBottomWidth: 3,
    borderBottomStyle: 'solid',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    borderRadius: 0,
    boxShadow: 'none',
    marginRight: 25,
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    color: '#ffff80',
    '&:hover': { color: '#ff0000' },
  }),
  menuList: (base: any) => ({
    ...base,
    backgroundColor: '#123456',
    color: '#ffffff',
  }),
  multiValue: (base: any) => ({
    ...base,
    backgroundColor: '#888888',
  }),
  multiValueLabel: (base: any) => ({
    ...base,
    color: '#ffff80',
  }),
  multiValueRemove: (base: any) => ({
    ...base,
    color: '#ffff80',
    '&:hover': { color: '#ff0000', backgroundColor: 'rgba(0,0,0,0)' },
  }),
  noOptionsMessage: (base: any) => ({
    ...base,
    backgroundColor: '#888888',
    color: '#ffff80',
    textAlign: 'left',
  }),
  option: (base: any, { isSelected }) => ({
    ...base,
    backgroundColor: isSelected ? '#ffff80' : '#123456',
    color: isSelected ? '#123456' : '#ffffff',
    '&:hover': { backgroundColor: '#234567', color: '#ffff80' },
  }),
  singleValue: (base: any) => ({
    ...base,
    backgroundColor: '#444444',
    color: '#ffff80',
  }),
};

const noticeFormHelperTextProps = {
  style: {
    color: '#404040',
  },
};

const simpleOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];

const complexOptions: SelectOption[] = [
  {
    label: 'Option 1',
    value: 'Value 1',
  },
  {
    label: 'Option 2',
    value: 'Value 2',
  },
  {
    label: 'Option 3',
    value: 'Value 3',
  },
];

const emptyStringInitialValueOptions: SelectOption[] = [
  {
    value: '',
    label: 'One',
  },
  {
    value: 'two',
    label: 'Two',
  },
];

const customMessages = {
  msgNoOptionsAvailable: 'You already used all options',
  msgNoOptionsMatchFilter: 'No match. Sorry',
  msgNoValidValue: "Try 'Hello'",
};

const option2value = (option: SelectOption) => option.value;

const formatCreateLabel = (value: string) => `${value} (New Label)`;

const isValidNewOption = (inputValue: string) => inputValue === 'Hello';

const doNothing = () => {};

const getValueOption = (value: string, option?: SelectOption) => {
  if (
    option === undefined ||
    option.label === undefined ||
    option.label === value
  ) {
    return value;
  }

  return `{value: "${value}" | label: "${option.label}"}`;
};

const showSelectedValue =
  (id: string) =>
  (value: string | string[], option?: SelectOption | SelectOption[]) => {
    let text: string = '';
    if (Array.isArray(value)) {
      text = value
        .map((v, i) => getValueOption(v, (option as SelectOption[])?.[i] || ''))
        .join(', ');
    } else {
      text = getValueOption(value, option as SelectOption);
    }
    document.getElementById(id)!.textContent = text;
  };

const getNewOptionData = (inputValue: string) => ({
  label: inputValue,
  value: inputValue + ' (changed)',
  isNew: true,
});

const filterOption = (option: any, rawInput: string): boolean => {
  console.log({
    option,
    rawInput,
  });
  return true;
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const meta: Meta<typeof ReactSelectMaterialUi> = {
  title: 'ReactSelectMaterialUi',
  component: ReactSelectMaterialUi,
} as Meta<typeof ReactSelectMaterialUi>;
export default meta;
type Story = StoryObj<typeof ReactSelectMaterialUi>;

export const WithAndWithoutFullWidthSet = () => (
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
);

export const notAllowingCreatingNewOptions = () => (
  <div>
    <ReactSelectMaterialUi
      label="Clearable - Single select"
      options={simpleOptions}
      SelectProps={{ isClearable: true }}
      fullWidth={true}
      onChange={showSelectedValue('nacno')}
    />
    <div style={style} />
    <ReactSelectMaterialUi
      label="Not clearable - Single select"
      options={simpleOptions}
      SelectProps={{ isClearable: false }}
      fullWidth={true}
      onChange={showSelectedValue('nacno')}
    />
    <div style={style} />
    <ReactSelectMaterialUi
      label="Clearable - Multiple select"
      options={simpleOptions}
      SelectProps={{ isClearable: true, isMulti: true }}
      fullWidth={true}
      onChange={showSelectedValue('nacno')}
    />
    <div style={style} />
    <ReactSelectMaterialUi
      label="Not clearable - Multiple select"
      options={simpleOptions}
      SelectProps={{ isClearable: false, isMulti: true }}
      fullWidth={true}
      onChange={showSelectedValue('nacno')}
    />
    <div style={style} />
    Selected value: <span id="nacno"></span>
  </div>
);

export const allowingCreatingNewOptions = () => (
  <div>
    <ReactSelectMaterialUi
      label="Clearable - Single select"
      options={simpleOptions}
      SelectProps={{ isClearable: true, isCreatable: true }}
      fullWidth={true}
      onChange={showSelectedValue('acno')}
    />
    <div style={style} />
    <ReactSelectMaterialUi
      label="Not clearable - Single select"
      options={simpleOptions}
      SelectProps={{ isClearable: false, isCreatable: true }}
      fullWidth={true}
      onChange={showSelectedValue('acno')}
    />
    <div style={style} />
    <ReactSelectMaterialUi
      label="Clearable - Multiple select"
      options={simpleOptions}
      SelectProps={{ isClearable: true, isCreatable: true, isMulti: true }}
      fullWidth={true}
      onChange={showSelectedValue('acno')}
    />
    <div style={style} />
    <ReactSelectMaterialUi
      label="Not clearable - Multiple select"
      options={simpleOptions}
      SelectProps={{ isClearable: false, isCreatable: true, isMulti: true }}
      fullWidth={true}
      onChange={showSelectedValue('acno')}
    />
    <div style={style} />
    Selected value: <span id="acno"></span>
  </div>
);

export const WithOptionsHavingLabelAndValueEqual = () => (
  <div>
    <ReactSelectMaterialUi
      label="Options having label and value equal"
      options={simpleOptions}
      fullWidth={true}
      onChange={showSelectedValue('ohlve')}
    />
    <div style={style} />
    Selected value: <span id="ohlve"></span>
  </div>
);

export const WithOptionsHavingLabelAndValueDifferent = () => (
  <div>
    <ReactSelectMaterialUi
      label="Options having label and value different"
      options={complexOptions}
      fullWidth={true}
      onChange={showSelectedValue('ohlvd')}
    />
    <div style={style} />
    Selected value: <span id="ohlvd"></span>
  </div>
);

export const WithDefaultValues = () => (
  <div>
    <ReactSelectMaterialUi
      label="Default value - Label and value equal - Single select"
      options={simpleOptions}
      defaultValue={simpleOptions[1]}
      defaultValues={simpleOptions.slice(1, 3)}
      helperText="uses defaultValue, ignore defaultValues"
      FormHelperTextProps={noticeFormHelperTextProps}
      fullWidth={true}
      onChange={showSelectedValue('dv')}
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
      onChange={showSelectedValue('dv')}
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
      onChange={showSelectedValue('dv')}
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
      onChange={showSelectedValue('dv')}
    />
    <div style={style} />
    Selected value: <span id="dv"></span>
  </div>
);

export const WithValues = () => (
  <div>
    <ReactSelectMaterialUi
      label="Value - Label and value equal - Single select"
      options={simpleOptions}
      value={simpleOptions[1]}
      values={simpleOptions.slice(1, 3)}
      helperText="uses value, ignore values"
      FormHelperTextProps={noticeFormHelperTextProps}
      fullWidth={true}
      onChange={showSelectedValue('v')}
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
      onChange={showSelectedValue('v')}
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
      onChange={showSelectedValue('v')}
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
      onChange={showSelectedValue('v')}
    />
    <div style={style} />
    The value passed in onChange(): <span id="v"></span>
  </div>
);

export const WithAnEmptyStringAsInitialValue = () => (
  <div>
    <ReactSelectMaterialUi
      defaultValue={''}
      options={emptyStringInitialValueOptions}
      fullWidth={true}
      onChange={showSelectedValue('esiv')}
    />
    <div style={style} />
    The value passed in onChange(): <span id="esiv"></span>
  </div>
);

export const WithAndWithoutHelperText = () => (
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
);

export const WithCustomizedMessages = () => (
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
);

export const ClearValuesButton = () => <ClearValues disabled={false} />;

export const NoClearValuesButtonWhenComponentIsDisabled = () => (
  <ClearValues disabled={true} />
);

export const AddingOptionsInAMultipleSelect = () => (
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
);

export const ChangingANewlyAddedOption = () => (
  <div>
    <ReactSelectMaterialUi
      label="Single select"
      options={complexOptions}
      SelectProps={{
        isCreatable: true,
        getNewOptionData,
      }}
      fullWidth={true}
      onChange={showSelectedValue('cnao')}
    />
    <div style={style} />
    <ReactSelectMaterialUi
      label="Multiple select"
      options={complexOptions}
      SelectProps={{
        isMulti: true,
        isCreatable: true,
        getNewOptionData,
      }}
      fullWidth={true}
      onChange={showSelectedValue('cnao')}
    />
    <div style={style} />
    The value passed in onChange(): <span id="cnao"></span>
  </div>
);

export const Disabled = () => (
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
);

export const Styled = () => (
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
);

export const DarkTheme = () => (
  <ThemeProvider theme={darkTheme}>
    <div style={styles.div}>
      <ReactSelectMaterialUi
        label="Single select"
        options={simpleOptions}
        defaultValue={simpleOptions[0]}
        helperText="A helper text"
        SelectProps={{
          isClearable: true,
        }}
        fullWidth={true}
        onChange={doNothing}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Multiple select"
        options={simpleOptions}
        defaultValues={[simpleOptions[0]]}
        helperText="A helper text"
        SelectProps={{
          isClearable: true,
          isMulti: true,
        }}
        fullWidth={true}
        onChange={doNothing}
      />
    </div>
  </ThemeProvider>
);
