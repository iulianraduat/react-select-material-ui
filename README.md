# react-select-material-ui
A react SELECT component based on [react-select](https://github.com/JedWatson/react-select) and looking like a [material-ui](https://material-ui.com/demos/selects/) component

---

## Props

The component accepts the props defined bellow in the table plus all props defined for [BaseTextFieldProps](https://material-ui.com/api/text-field/#props) except InputProps, inputProps and variant (as there is no input).

### Props accepted by ReactSelectMaterialUi
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| onChange | (value: string \| string[]) => void | yes | - | The callback function called when the value is changed |
| options | string[] \| SelectOption[] | yes | - | The selectable options |
| SelectProps | SelectProps | no | undefined | The props for react-select component |
| value | string | no | undefined | The value for a single select |
| values | string[] | no | undefined | The value for a multiple select |

### Fields defined by SelectProps
| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| isCreatable | boolean | no | false | Set to true to allow creation of new values based on the input string |
| msgNoOptionsAvailable | string | no | No more options are available | The message displayed when all options are already selected |
| msgNoOptionsMatchFilter | string | no | No options match the filter | The message displayed when no options match case-insensitive the input value |
| msgNoValidValue | string | no | The new value is not valid (contains space) | The message displayed when the input value is not accepted by a Creatable for creating a new value |

### Props ignored in SelectProps if defined
* noOptionsMessage
* placeholder

### Fields defined by SelectOption
| Name | Type | Required | Description |
| ---- | ---- | -------- | ----------- |
| label | string | yes | The text displayed as option or value | 
| value | any | yes | The value associated to this option and returned by onChange | 


### Notes about a Creatable select
It does not accept by default new options containing space.
> set **SelectProps.isValidNewOption** to something like the following code to define your own validation:
```js
(inputValue: string) => inputvalue !== ""
```

The format for a new options is: 'INPUTED_TEXT (new)'.
> set **SelectProps.formatCreateLabel** to something like the following code for creating your own formated option:
```js
(value: string) => `${value} (New Label)`
```

The new option will be at start of options list.
> Set **SelectProps.createOptionPosition** to **last** to display the new option to the end of options list.

Backspace will not remove values.
> Set **SelectProps.backspaceRemovesValue** to **true** to make pressing backspace removing a value.

---

## Versions

| ReactSelectMaterialUi _uses_ | React-select | Material-ui | React  |
| ----------------------------:|:------------:|:-----------:|:------:|
| 1.0.x                        | 2.1.0        | 3.2.0       | 16.5.2 |

### About versioning schema used for ReactSelectMaterialUi

* Major - it will be increased if any major version of the three dependat packages changes or there are breaking changes in the code of ReactSelectMaterialUi
* Minor - it will be increased if no major version of the three dependat packages changes, but there are changes of the minor or patch versions of them
* Patch - it will be increased if there are no changes of the three dependat packages, but there are non breaking changes in the code of ReactSelectMaterialUi

---

## Subcomponents

**SingleSelect** - a component for selecting a single value. It can be imported with:
```js
import {SingleSelect} from 'react-select-multi-ui';
```

```js
import * as React from 'react';
import MaterialUiCreatable, {MaterialUiCreatableProps} from './MaterialUiCreatable';

const SingleSelect = (props: MaterialUiCreatableProps) => (
    <MaterialUiCreatable
        {...props}
        SelectProps={{
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
import {MultipleSelect} from 'react-select-multi-ui';
```

Setting SelectProps.isClearable to true will display the clearable button only if there are more then one selected value.

```js
import * as React from 'react';
import MaterialUiCreatable, {MaterialUiCreatableProps} from './MaterialUiCreatable';

const MultipleSelect = (props: MaterialUiCreatableProps) => (
    <MaterialUiCreatable
        {...props}
        SelectProps={{
            ...props.SelectProps,
            isMulti: true,
            isClearable: true
        }}
        fullWidth={true}
    />
);

export default MultipleSelect;
```

**TagsSelect** - a component for selecting multiple tag based on MultipleSelect. It can be imported with:
```js
import {TagsSelect} from 'react-select-multi-ui';
```

**ColorsSelect** - a component for selecting multiple HTML colors (with preview) based on MultipleSelect. It can be imported with:
```js
import {ColorsSelect} from 'react-select-multi-ui';
```

---

## Examples

The base component which allowes to create read-only or creatable select components for selecting only one or more values:
```js
import * as React from 'react';
import ReactSelectMaterialUi from 'react-select-material-ui';

class App extends React.Component {
  render() {
    const options: string[] = [
      "Africa", "America", "Asia", "Europe"
    ];

    return (
      <div className="App">
        <ReactSelectMaterialUi
          style={{ width: 100 }}
          value="Europe"
          options={options}
          onChange={this.handleChange}
        />
      </div>
    );
  }

  handleChange = (value: string) => {
    console.log(value);
  }
}

export default App;
```

The single select which creates a full width component for selecting a single value:
```js
import * as React from 'react';
import { SingleSelect } from 'react-select-material-ui';

class App extends React.Component {
  render() {
    const options: string[] = [
      "Africa", "America", "Asia", "Europe"
    ];

    return (
      <div className="App">
        <SingleSelect
          value="America"
          options={options}
          onChange={this.handleChange}
        />
      </div>
    );
  }

  handleChange = (value: string) => {
    console.log(value);
  }
}

export default App;
```

The multiple select which creates a full width component for selecting multiple values:
```js
import * as React from 'react';
import { MultipleSelect } from 'react-select-material-ui';

class App extends React.Component {
  render() {
    const options: string[] = [
      "New York", "London", "Vienna", "Budapest"
    ];

    return (
      <div className="App">
        <MultipleSelect
          label="Choose some cities"
          values={["London","Vienna"]}
          options={options}
          helperText="You can add a new city by writing its name and pressing enter"
          onChange={this.handleChange}
          SelectProps={{
            isCreatable: true,
            msgNoOptionsAvailable: 'All cities are selected',
            msgNoOptionsMatchFilter: 'No city name matches the filter'
          }}
        />
      </div>
    );
  }

  handleChange = (values: string[]) => {
    console.log(values);
  }
}

export default App;
```

The select multiple tags component:
```js
import * as React from 'react';
import { TagsSelect } from 'react-select-material-ui';

class App extends React.Component {
  render() {
    const options: string[] = [
      "Personal", "Work", "Important", "Optional", "Required"
    ];

    return (
      <div className="App">
        <TagsSelect
          label="Tags"
          options={options}
          onChange={this.handleChange}
          SelectProps={{
            isCreatable: true,
            msgNoOptionsAvailable: 'All tags are selected',
            msgNoOptionsMatchFilter: 'No tag matches the filter'
          }}
        />
      </div>
    );
  }

  handleChange = (values: string[]) => {
    console.log(values);
  }
}

export default App;
```

The select multiple colors component:
```js
import * as React from 'react';
import { ColorsSelect } from 'react-select-material-ui';

class App extends React.Component {
  render() {
    const options: string[] = [
      "red", "#123456", "yellow", "#fedcba"
    ];

    return (
      <div className="App">
        <ColorsSelect
          label="Colors"
          options={options}
          helperText="You can add a new color as long as it is a valid HTML color"
          onChange={this.handleChange}
          SelectProps={{
            isCreatable: true
          }}
        />
      </div>
    );
  }

  handleChange = (values: string[]) => {
    console.log(values);
  }
}

export default App;
```

---

## Changelog

### 1.0.0

* Improved README.md
* Changed the code to be conform to the behaviour described in Readme

### 1.0.3

* Added subcomponents for: TagsSelect and ColorsSelect
