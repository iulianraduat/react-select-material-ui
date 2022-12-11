import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ReactSelectMaterialUi, {
  SelectOption,
} from '../src/ReactSelectMaterialUi';
import SingleSelect from '../src/subcomponents/SingleSelect';
import MultipleSelect from '../src/subcomponents/MultipleSelect';
import TagsSelect from '../src/subcomponents/TagsSelect';
import ColorsSelect from '../src/subcomponents/ColorsSelect';

export default {
  title: 'Subcomponents',
  component: ReactSelectMaterialUi,
} as ComponentMeta<typeof ReactSelectMaterialUi>;

const style: React.CSSProperties = {
  height: 20,
};

const simpleOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];

const tagOptions: string[] = ['Tag1', 'Tag2', 'Tag3'];

const colorOptions: string[] = ['red', 'blue', '#13579a'];

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

export const SbSingleSelect: ComponentStory<typeof ReactSelectMaterialUi> =
  () => (
    <div>
      <SingleSelect
        label="Not allowing a new value"
        options={simpleOptions}
        onChange={showSelectedValue('ss')}
      />
      <div style={style} />
      <SingleSelect
        label="Allowing a new value"
        options={simpleOptions}
        SelectProps={{ isCreatable: true }}
        onChange={showSelectedValue('ss')}
      />
      <div style={style} />
      Selected value: <span id="ss"></span>
    </div>
  );
SbSingleSelect.storyName = 'SingleSelect';

export const SbMultipleSelect: ComponentStory<typeof ReactSelectMaterialUi> =
  () => (
    <div>
      <MultipleSelect
        label="Not allowing a new value"
        options={simpleOptions}
        onChange={showSelectedValue('ms')}
      />
      <div style={style} />
      <MultipleSelect
        label="Allowing a new value"
        options={simpleOptions}
        SelectProps={{ isCreatable: true }}
        onChange={showSelectedValue('ms')}
      />
      <div style={style} />
      Selected value: <span id="ms"></span>
    </div>
  );
SbMultipleSelect.storyName = 'MultipleSelect';

export const SbTagsSelect: ComponentStory<typeof ReactSelectMaterialUi> =
  () => (
    <div>
      <TagsSelect
        label="Not allowing a new tag"
        options={tagOptions}
        onChange={showSelectedValue('ts')}
      />
      <div style={style} />
      <TagsSelect
        label="Allowing a new tag"
        options={tagOptions}
        helperText="Try without space"
        SelectProps={{ isCreatable: true }}
        onChange={showSelectedValue('ts')}
      />
      <div style={style} />
      Selected value: <span id="ts"></span>
    </div>
  );
SbTagsSelect.storyName = 'TagsSelect';

export const SbColorsSelect: ComponentStory<typeof ReactSelectMaterialUi> =
  () => (
    <div>
      <ColorsSelect
        label="Not allowing a new color"
        options={colorOptions}
        onChange={showSelectedValue('cs')}
      />
      <div style={style} />
      <ColorsSelect
        label="Allowing a new color"
        options={colorOptions}
        helperText="Try 'aqua'"
        SelectProps={{ isCreatable: true }}
        onChange={showSelectedValue('cs')}
      />
      <div style={style} />
      Selected value: <span id="cs"></span>
    </div>
  );
SbColorsSelect.storyName = 'ColorsSelect';
