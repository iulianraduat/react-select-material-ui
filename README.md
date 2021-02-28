# react-select-material-ui ![Weekly downloads](https://img.shields.io/npm/dw/react-select-material-ui 'Weekly downloads')

A react SELECT component based on [react-select](https://github.com/JedWatson/react-select) and looking like a [material-ui](https://material-ui.com/demos/selects/) component

[![](https://data.jsdelivr.com/v1/package/npm/react-select-material-ui/badge)](https://www.jsdelivr.com/package/npm/react-select-material-ui)

---

## Demo

You can access the storybook for this component [here](https://iulian-radu-at.github.io/react-select-material-ui/).

## Props

The component accepts the props defined bellow in the table plus all props defined for [BaseTextFieldProps](https://material-ui.com/api/text-field/#props) except InputProps, inputProps and variant (as there is no input).

### Props accepted by ReactSelectMaterialUi

| Name          | Type                                                                             | Required | Default   | Description                                                |
| ------------- | -------------------------------------------------------------------------------- | -------- | --------- | ---------------------------------------------------------- |
| defaultValue  | string                                                                           | no       | undefined | The default value for a single select\*                    |
| defaultValues | string[]                                                                         | no       | undefined | The default value for a multiple select\*                  |
| id            | string                                                                           | no       | undefined | The id assigned to the input field and referenced by label |
| onChange      | (value: string \| string[], SelectOption \| SelectOption[] \| undefined) => void | yes      | -         | The callback function called when the option is changed    |
| options       | string[] \| SelectOption[]                                                       | yes      | -         | The selectable options                                     |
| SelectProps   | SelectProps                                                                      | no       | undefined | The props for react-select component                       |
| value         | string                                                                           | no       | undefined | The value for a single select\*                            |
| values        | string[]                                                                         | no       | undefined | The values for a multiple select\*                         |

\* The order of the evaluated fields for deciding which is the selected value (take attention to the presence or not of the "s" after "value"):

- single: value, defaultValue (~~values, defaultValues~~)
- multiple: values, defaultValues (~~value, defaultValue~~)

### Fields defined by SelectProps

| Name                    | Type    | Required | Default                                     | Description                                                                                        |
| ----------------------- | ------- | -------- | ------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| isClearable             | boolean | no       | false                                       | Set to true to allow remove of selection with backspace or clicking on the x of the value(s)       |
| isCreatable             | boolean | no       | false                                       | Set to true to allow creation of new values based on the input string                              |
| msgNoOptionsAvailable   | string  | no       | No more options are available               | The message displayed when all options are already selected                                        |
| msgNoOptionsMatchFilter | string  | no       | No options match the filter                 | The message displayed when no options match case-insensitive the input value                       |
| msgNoValidValue         | string  | no       | The new value is not valid (contains space) | The message displayed when the input value is not accepted by a Creatable for creating a new value |

### Props ignored in ReactSelectMaterialUiProps

- placeholder (if there is set prop 'label', as they can overlap)
- variant (as it is implemented only 'standard')

### Props ignored in SelectProps if defined

- noOptionsMessage
- placeholder

### Fields defined by SelectOption

| Name  | Type   | Required | Description                                                  |
| ----- | ------ | -------- | ------------------------------------------------------------ |
| label | string | yes      | The text displayed as option or value                        |
| value | any    | yes      | The value associated to this option and returned by onChange |

### Notes about a Creatable select

It does not accept by default new options containing space.

> set **SelectProps.isValidNewOption** to something like the following code to define your own validation:

```js
(inputValue: string) => inputvalue !== '';
```

The format for a new options is: 'INPUTED_TEXT (new)'.

> set **SelectProps.formatCreateLabel** to something like the following code for creating your own formated option:

```js
(value: string) => `${value} (New Label)`;
```

The new option will be at start of options list.

> Set **SelectProps.createOptionPosition** to **last** to display the new option to the end of options list.

### Styling the component

Label: inputLabelProps.style

ReactSelect: [SelectProps.styles](https://react-select.com/styles)

Please check the code in [storybook/stories.tsx](https://github.com/iulian-radu-at/react-select-material-ui/blob/master/storybook/stories.tsx) to see how to customize ReactSelectMaterialUi.

---

## Versions

| ReactSelectMaterialUi _uses_ | React-select | Material-ui |      React       |
| ---------------------------: | :----------: | :---------: | :--------------: |
|                        1.0.x |    2.1.0     |    3.2.0    |      16.5.2      |
|                        1.1.x |    2.1.2     |    3.6.0    |      16.6.3      |
|                        1.2.x |    2.3.0     |    3.9.2    |      16.8.1      |
|                        1.3.x |    2.4.2     |    3.9.3    |      16.8.6      |
|                        2.0.x |    2.4.2     |    3.9.3    |      16.8.6      |
|                        2.1.x |    2.4.3     |    3.9.3    |      16.8.6      |
|                        3.0.x |    3.0.3     |    4.0.1    |      16.8.6      |
|                        4.0.x |    2.4.4     |    4.0.2    |      16.8.6      |
|                        4.1.x |    2.4.4     |    4.1.3    |      16.8.6      |
|                        4.2.x |    2.4.4     |    4.2.0    |      16.8.6      |
|                        4.3.x |    2.4.4     |    4.3.3    |      16.9.0      |
|                        5.0.x |    2.4.4     |    4.4.1    |      16.9.0      |
|                        6.0.x |    2.4.4     |    4.4.2    |      16.9.0      |
|                        6.1.x |    2.4.4     |    4.5.1    |      16.9.0      |
|                        6.2.x |    2.4.4     |    4.6.1    |      16.9.0      |
|                        6.3.x |    2.4.4     |    4.9.0    |      16.9.0      |
|                        6.4.x |    3.1.0     |    4.9.7    |      16.9.0      |
|                        6.5.x |    3.1.0     |   4.9.13    |      16.9.0      |
|                        6.6.x |    3.1.0     |   4.10.12   |      16.9.0      |
|                        6.7.x |    3.1.0     |   4.11.0    |      16.9.0      |
|                        6.8.x |    3.2.0     |   4.11.3    | 16.9.0 or 17.0.0 |

### About versioning schema used for ReactSelectMaterialUi

- Major - it will be increased if any major version of any dependat package changes or there are breaking changes in this package
- Minor - it will be increased if any minor or patch version of any dependat package changes or there is added functionality in a backwards compatible manner
- Patch - it will be increased if there are backwards compatible bug fixes

---

## Subcomponents

**SingleSelect** - a component for selecting a single value. It can be imported with:

```js
import { SingleSelect } from 'react-select-material-ui';
```

```js
import * as React from "react";
import MaterialUiCreatable, { MaterialUiCreatableProps } from "./MaterialUiCreatable";

const SingleSelect = (props: MaterialUiCreatableProps) => (
  <MaterialUiCreatable
    {...props}
    SelectProps={{Without helper text
      ...props.SelectProps,
      isMulti: false
    }}
    fullWidth={true}
  />
);

export default SingleSelect;
```

**MultipleSelect** - a component for selecting multiple values. It can be imported with:

```js
import { MultipleSelect } from 'react-select-material-ui';
```

Setting SelectProps.isClearable to true will display the clearable button only if there are more then one selected value.

```js
import * as React from 'react';
import MaterialUiCreatable, { MaterialUiCreatableProps } from './MaterialUiCreatable';

const MultipleSelect = (props: MaterialUiCreatableProps) => (
  <MaterialUiCreatable
    {...props}
    SelectProps={{
      ...props.SelectProps,
      isMulti: true,
      isClearable: true,
    }}
    fullWidth={true}
  />
);

export default MultipleSelect;
```

**TagsSelect** - a component for selecting multiple tag based on MultipleSelect. It can be imported with:

```js
import { TagsSelect } from 'react-select-material-ui';
```

**ColorsSelect** - a component for selecting multiple HTML colors (with preview) based on MultipleSelect. It can be imported with:

```js
import { ColorsSelect } from 'react-select-material-ui';
```

---

## Examples

The base component which allowes to create read-only or creatable select components for selecting only one or more values:

```js
import * as React from 'react';
import ReactSelectMaterialUi from 'react-select-material-ui';

class App extends React.Component {
  render() {
    const options: string[] = ['Africa', 'America', 'Asia', 'Europe'];

    return (
      <div className="App">
        <ReactSelectMaterialUi style={{ width: 100 }} value="Europe" options={options} onChange={this.handleChange} />
      </div>
    );
  }

  handleChange = (value: string) => {
    console.log(value);
  };
}

export default App;
```

The single select which creates a full width component for selecting a single value:

```js
import * as React from 'react';
import { SingleSelect } from 'react-select-material-ui';

class App extends React.Component {
  render() {
    const options: string[] = ['Africa', 'America', 'Asia', 'Europe'];

    return (
      <div className="App">
        <SingleSelect value="America" placeholder="Select a continent" options={options} onChange={this.handleChange} />
      </div>
    );
  }

  handleChange = (value: string) => {
    console.log(value);
  };
}

export default App;
```

The multiple select which creates a full width component for selecting multiple values:

```js
import * as React from 'react';
import { MultipleSelect } from 'react-select-material-ui';

class App extends React.Component {
  render() {
    const options: string[] = ['New York', 'London', 'Vienna', 'Budapest'];

    return (
      <div className="App">
        <MultipleSelect
          label="Choose some cities"
          values={['London', 'Vienna']}
          options={options}
          helperText="You can add a new city by writing its name and pressing enter"
          onChange={this.handleChange}
          SelectProps={{
            isCreatable: true,
            msgNoOptionsAvailable: 'All cities are selected',
            msgNoOptionsMatchFilter: 'No city name matches the filter',
          }}
        />
      </div>
    );
  }

  handleChange = (values: string[]) => {
    console.log(values);
  };
}

export default App;
```

The select multiple tags component:

```js
import * as React from 'react';
import { TagsSelect } from 'react-select-material-ui';

class App extends React.Component {
  render() {
    const options: string[] = ['Personal', 'Work', 'Important', 'Optional', 'Required'];

    return (
      <div className="App">
        <TagsSelect
          label="Tags"
          options={options}
          onChange={this.handleChange}
          SelectProps={{
            isCreatable: true,
            msgNoOptionsAvailable: 'All tags are selected',
            msgNoOptionsMatchFilter: 'No tag matches the filter',
          }}
        />
      </div>
    );
  }

  handleChange = (values: string[]) => {
    console.log(values);
  };
}

export default App;
```

The select multiple colors component:

```js
import * as React from 'react';
import { ColorsSelect } from 'react-select-material-ui';

class App extends React.Component {
  render() {
    const options: string[] = ['red', '#123456', 'yellow', '#fedcba'];

    return (
      <div className="App">
        <ColorsSelect
          label="Colors"
          options={options}
          helperText="You can add a new color as long as it is a valid HTML color"
          onChange={this.handleChange}
          SelectProps={{
            isCreatable: true,
          }}
        />
      </div>
    );
  }

  handleChange = (values: string[]) => {
    console.log(values);
  };
}

export default App;
```

---

## Changelog

### 1.0.0

- Improved README.md
- Changed the code to be conform to the behaviour described in Readme

### 1.0.4

- Added subcomponents for: TagsSelect and ColorsSelect

### 1.0.5

- Made SelectProps to accept also the props of Creatable besides of the normal ReactSelect

### 1.0.6

- When adding a new value, it must be different than the existing values and options

### 1.0.7

- Fixed a low severity vulnerability

### 1.1.0

- Updated the react and material-ui packages

### 1.1.1

- Hide the remove option in multiple select when it is disabled
- Setting disabled or SelectProps.isDisabled to true will make the select disabled

### 1.1.2

- Handle the case when the user removes the selected value and react-select returns null as selected value

### 1.2.0

- Updated packages

### 1.2.1

- Implemented support for placeholder when there is no label set

### 1.2.2

- Added subcomponents for: TagSelect and ColorSelect (the single select versions of TagsSelect and ColorsSelect)

### 1.3.0

- Updated packages

### 2.0.0

- Fixed the display of values when using SelectOption instead of string

Breaking changes:

- SelectOption accepts only strings for value

| props                      | in 1.x is ... for react-select | in 2.x is ... for react-select |
| -------------------------- | ------------------------------ | ------------------------------ |
| defaultValue/defaultValues | _ignored_                      | defaultValue                   |
| value/values               | defaultValue                   | value                          |

### 2.0.1

- Enabled SelectOption.value to be of type any instead of string

### 2.1.0

- Fixed bug related to: setting value to undefined displays the label over the previously selected value
- If options are provided as SelectOption and there is one option having the value set to undefined, we will display its label if value is set to undefined

### 2.1.1

- Fixed bug introduced with 2.1.0 related to: a selected value is not displayed when using the uncontrolled mode

### 3.0.0

- Added the possibility to style the label using InputLabelProps.className (position and color will be overridden) or InputLabelProps.style

### 4.0.0

- Reverted package react-select from v3 to v2 because of the mismatch between its types and structure of distributed package
- Fixed using defaultValue(s) and value(s)
- Added a storybook for this component

### 4.1.0

- Change on behavior of onChange when value(s) is set. Before no call was triggered. Now it is called with the new selection. The component is controlled so there is no change in the visual if value(s) keep(s) the previous value
- Updated packages

### 4.1.1

- Fixed bug related to component not updating the selected value in the controlled mode

### 4.2.0

- Updated packages

### 4.2.1

- onChange returns as second argument the selected option(s)
- corrected in index.d.ts the type of the value for onChange

### 4.2.2

- Fixed the bug related to defaultValue(s) behaves as value(s)

### 4.2.3

- Fixed the bug related to a new value(s) is ignored
- Added more demo in storybook for controlled components

### 4.3.0

- Updated the documentation
- Added a storybook for styling the component
- Updated packages

### 5.0.0

- Starting with this version, react and react-dom are no longer dependencies, which means they will no longer be installed in node_modules of this component
- Updated the packages

### 5.0.1

- Fixed the dependency version of react

### 5.0.2

- Removed the source maps from generated package

### 5.1.0

- Added support for group of options

### 6.0.0

- Setting SelectProps.isClearable to true will display the clear button also when the value is set via value(s) prop
- Fixed the remove of the selected option(s) when the provided value(s) prop is null or values prop is an empty array
- When the component is disabled, there is no clear button displayed
- Fixed index.d.ts to include onBlur and onFocus

### 6.0.1

- Fixed bug related to clear button not correctly displayed when the values of a multi select are changed

### 6.1.0

- Fixed missing tslint package
- Keep only the lock file for installing packages via npm
- Improved the storybook

### 6.2.0

- Updated packages
- Added a storybook for keeping or not open at add time the multiple select options menu

### 6.3.0

- Updated packages

### 6.4.0

- Updated packages
- Moved from npm to yarn

### 6.4.1

- Fixed the typescript definition

### 6.4.2

- Fixed the association between label and input field using the provided id

### 6.5.0

- Fixed the selection of (default)value(s) based on the select type (single/multi)
- Updated packages

### 6.6.0

- Updated packages

### 6.6.1

- Fixed the use of an empty string as initial value, value which matches a value defined in an option

### 6.6.2

- Fixed the broken index.js produced by typescript 3.9.5 because of the "export \*"

### 6.6.3

- Fixed the issue when the value is not matched by any option

### 6.7.0

- Updated packages

### 6.8.0

- Accepting React 17 as peerDependencies
- Fixed security warnings
