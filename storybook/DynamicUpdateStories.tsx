import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ReactSelectMaterialUi from '../src/ReactSelectMaterialUi';
import ColorsSelect from '../src/subcomponents/ColorsSelect';
import MultipleSelect from '../src/subcomponents/MultipleSelect';
import SingleSelect from '../src/subcomponents/SingleSelect';
import TagsSelect from '../src/subcomponents/TagsSelect';
import ATDynamicUpdateValuesControlledComponent from './ATDynamicUpdateValuesControlledComponent';

const tagOptions: string[] = ['Tag1', 'Tag2', 'Tag3'];

const colorOptions: string[] = ['red', 'blue', '#13579a'];

export default {
  title: 'Dynamic update of values for a controlled component',
  component: ReactSelectMaterialUi,
} as ComponentMeta<typeof ReactSelectMaterialUi>;

export const SbReactSelectMaterialUi: ComponentStory<
  typeof ReactSelectMaterialUi
> = () => (
  <div>
    <ATDynamicUpdateValuesControlledComponent Comp={ReactSelectMaterialUi} />
    <p>The selected value should change every 0.5 seconds.</p>
  </div>
);
SbReactSelectMaterialUi.storyName = 'ReactSelectMaterialUi';

export const SbSingleSelect: ComponentStory<typeof ReactSelectMaterialUi> =
  () => (
    <div>
      <ATDynamicUpdateValuesControlledComponent Comp={SingleSelect} />
      <p>The selected value should change every 0.5 seconds.</p>
    </div>
  );
SbSingleSelect.storyName = 'SingleSelect';

export const SbMultipleSelect: ComponentStory<typeof ReactSelectMaterialUi> =
  () => (
    <div>
      <ATDynamicUpdateValuesControlledComponent Comp={MultipleSelect} />
      <p>The selected value should change every 0.5 seconds.</p>
    </div>
  );
SbMultipleSelect.storyName = 'MultipleSelect';

export const SbTagsSelect: ComponentStory<typeof ReactSelectMaterialUi> =
  () => (
    <div>
      <ATDynamicUpdateValuesControlledComponent
        Comp={TagsSelect}
        options={tagOptions}
      />
      <p>The selected value should change every 0.5 seconds.</p>
    </div>
  );
SbTagsSelect.storyName = 'TagsSelect';

export const SbColorsSelect: ComponentStory<typeof ReactSelectMaterialUi> =
  () => (
    <div>
      <ATDynamicUpdateValuesControlledComponent
        Comp={ColorsSelect}
        options={colorOptions}
      />
      <p>The selected value should change every 0.5 seconds.</p>
    </div>
  );
SbColorsSelect.storyName = 'ColorsSelect';

export const ReactSelectMaterialUiWithManyOptions: ComponentStory<
  typeof ReactSelectMaterialUi
> = () => (
  <div>
    <ATDynamicUpdateValuesControlledComponent
      Comp={ReactSelectMaterialUi}
      useHugeOptionsList={true}
    />
    <p>The selected value should change every 0.5 seconds.</p>
  </div>
);
ReactSelectMaterialUiWithManyOptions.storyName =
  'ReactSelectMaterialUi with many options';
