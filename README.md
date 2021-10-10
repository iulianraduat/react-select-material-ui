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
(inputValue: string) => inputValue !== '';
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

Please check section Versions in [CHANGELOG.md](CHANGELOG.md).

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

Please check section Changelog in [CHANGELOG.md](CHANGELOG.md).
