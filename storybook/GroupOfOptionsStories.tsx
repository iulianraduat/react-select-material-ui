import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ReactSelectMaterialUi, {
  SelectOption,
} from '../src/ReactSelectMaterialUi';

const style: React.CSSProperties = {
  height: 20,
};

const subOptions: SelectOption[] = [
  {
    label: 'Group 1',
    options: [
      { label: 'Group 1, option 1', value: 'value 1.1' },
      { label: 'Group 1, option 2', value: 'value 1.2' },
    ],
  },
  {
    label: 'Group 2',
    options: [
      { label: 'Group 2, option 1', value: 'value 2.1' },
      { label: 'Group 2, option 2', value: 'value 2.2' },
    ],
  },
  {
    label: 'Option 3',
    value: 'Value 3',
  },
  {
    label: 'Option 4',
    value: 'Value 4',
  },
];

const option2value = (option) => option.value;

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
        .map((v, i) => getValueOption(v, option?.[i] || ''))
        .join(', ');
    } else {
      text = getValueOption(value, option as SelectOption);
    }
    document.getElementById(id)!.textContent = text;
  };

export default {
  title: 'Group of options',
  component: ReactSelectMaterialUi,
} as ComponentMeta<typeof ReactSelectMaterialUi>;

export const WithoutDefaultValuesNorValues: ComponentStory<
  typeof ReactSelectMaterialUi
> = () => (
  <div>
    <ReactSelectMaterialUi
      label="Single select"
      options={subOptions}
      fullWidth={true}
      onChange={showSelectedValue('so1')}
    />
    <div style={style} />
    <ReactSelectMaterialUi
      label="Multiple select"
      options={subOptions}
      SelectProps={{ isMulti: true }}
      fullWidth={true}
      onChange={showSelectedValue('so1')}
    />
    <div style={style} />
    The value passed in onChange(): <span id="so1"></span>
  </div>
);

export const WithDefaultValues: ComponentStory<typeof ReactSelectMaterialUi> =
  () => (
    <div>
      <ReactSelectMaterialUi
        label="Single select"
        options={subOptions}
        defaultValue={subOptions[0].options?.[0].value}
        fullWidth={true}
        onChange={showSelectedValue('so2')}
      />
      <div style={style} />
      <ReactSelectMaterialUi
        label="Multiple select"
        options={subOptions}
        defaultValues={subOptions[1].options?.map(option2value)}
        SelectProps={{ isMulti: true }}
        fullWidth={true}
        onChange={showSelectedValue('so2')}
      />
      <div style={style} />
      The value passed in onChange(): <span id="so2"></span>
    </div>
  );

export const WithValues: ComponentStory<typeof ReactSelectMaterialUi> = () => (
  <div>
    <ReactSelectMaterialUi
      label="Single select"
      options={subOptions}
      value={subOptions[0].options?.[0].value}
      fullWidth={true}
      onChange={showSelectedValue('so3')}
    />
    <div style={style} />
    <ReactSelectMaterialUi
      label="Multiple select"
      options={subOptions}
      values={subOptions[1].options?.map(option2value)}
      SelectProps={{ isMulti: true }}
      fullWidth={true}
      onChange={showSelectedValue('so3')}
    />
    <div style={style} />
    The value passed in onChange(): <span id="so3"></span>
  </div>
);
