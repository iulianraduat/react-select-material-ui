import { FormControlLabel, Checkbox } from '@mui/material';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ReactSelectMaterialUi from '../src/ReactSelectMaterialUi';
import Issue37 from './Issue37';

export default {
  title: 'Issues',
  component: ReactSelectMaterialUi,
} as ComponentMeta<typeof ReactSelectMaterialUi>;

const style: React.CSSProperties = {
  marginLeft: 20,
  marginBottom: 20,
};

const simpleOptions: string[] = ['Option 1', 'Option 2', 'Option 3'];

const issue28Options: string[] = [
  'Action flag',
  'Celebration flag',
  'Information flag',
  'Response flag',
];

export const SbIssue26: ComponentStory<typeof ReactSelectMaterialUi> = () => (
  <div>
    <div style={style}>
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
);
SbIssue26.storyName = '#26';

export const SbIssue28: ComponentStory<typeof ReactSelectMaterialUi> = () => (
  <div>
    <div style={style}>
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
      style={{ width: '100%' }}
    />
    <FormControlLabel
      control={<Checkbox name="celebrationFlag" color="primary" />}
      label="Celebration flag"
      style={{ width: '100%' }}
    />
    <FormControlLabel
      control={<Checkbox name="informationFlag" color="primary" />}
      label="Information flag"
      style={{ width: '100%' }}
    />
    <FormControlLabel
      control={<Checkbox name="responseFlag" color="primary" />}
      label="Response flag"
      style={{ width: '100%' }}
    />
    <div style={style} />
    The checkboxes should be covered by options dialog
  </div>
);
SbIssue28.storyName = '#28';

export const SbIssue37: ComponentStory<typeof ReactSelectMaterialUi> = () => (
  <div>
    <Issue37 />
  </div>
);
SbIssue37.storyName = '#37';

const doNothing = () => {};
