# Versions

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
|                        7.0.x |    3.2.0     |   4.11.3    | 16.9.0 or 17.0.0 |
|                        7.1.x |    4.3.1     |   4.12.3    | 16.9.0 or 17.0.0 |
|                        8.0.x |    4.3.1     |    5.0.3    | 16.9.0 or 17.0.0 |

## About versioning schema used for ReactSelectMaterialUi

- Major - it will be increased if any major version of any dependat package changes or there are breaking changes in this package
- Minor - it will be increased if any minor or patch version of any dependat package changes or there is added functionality in a backwards compatible manner
- Patch - it will be increased if there are backwards compatible bug fixes

---

# Changelog

## 1.0.0

- Improved README.md
- Changed the code to be conform to the behaviour described in Readme

## 1.0.4

- Added subcomponents for: TagsSelect and ColorsSelect

## 1.0.5

- Made SelectProps to accept also the props of Creatable besides of the normal ReactSelect

## 1.0.6

- When adding a new value, it must be different than the existing values and options

## 1.0.7

- Fixed a low severity vulnerability

## 1.1.0

- Updated the react and material-ui packages

## 1.1.1

- Hide the remove option in multiple select when it is disabled
- Setting disabled or SelectProps.isDisabled to true will make the select disabled

## 1.1.2

- Handle the case when the user removes the selected value and react-select returns null as selected value

## 1.2.0

- Updated packages

## 1.2.1

- Implemented support for placeholder when there is no label set

## 1.2.2

- Added subcomponents for: TagSelect and ColorSelect (the single select versions of TagsSelect and ColorsSelect)

## 1.3.0

- Updated packages

## 2.0.0

- Fixed the display of values when using SelectOption instead of string

Breaking changes:

- SelectOption accepts only strings for value

| props                      | in 1.x is ... for react-select | in 2.x is ... for react-select |
| -------------------------- | ------------------------------ | ------------------------------ |
| defaultValue/defaultValues | _ignored_                      | defaultValue                   |
| value/values               | defaultValue                   | value                          |

## 2.0.1

- Enabled SelectOption.value to be of type any instead of string

## 2.1.0

- Fixed bug related to: setting value to undefined displays the label over the previously selected value
- If options are provided as SelectOption and there is one option having the value set to undefined, we will display its label if value is set to undefined

## 2.1.1

- Fixed bug introduced with 2.1.0 related to: a selected value is not displayed when using the uncontrolled mode

## 3.0.0

- Added the possibility to style the label using InputLabelProps.className (position and color will be overridden) or InputLabelProps.style

## 4.0.0

- Reverted package react-select from v3 to v2 because of the mismatch between its types and structure of distributed package
- Fixed using defaultValue(s) and value(s)
- Added a storybook for this component

## 4.1.0

- Change on behavior of onChange when value(s) is set. Before no call was triggered. Now it is called with the new selection. The component is controlled so there is no change in the visual if value(s) keep(s) the previous value
- Updated packages

## 4.1.1

- Fixed bug related to component not updating the selected value in the controlled mode

## 4.2.0

- Updated packages

## 4.2.1

- onChange returns as second argument the selected option(s)
- corrected in index.d.ts the type of the value for onChange

## 4.2.2

- Fixed the bug related to defaultValue(s) behaves as value(s)

## 4.2.3

- Fixed the bug related to a new value(s) is ignored
- Added more demo in storybook for controlled components

## 4.3.0

- Updated the documentation
- Added a storybook for styling the component
- Updated packages

## 5.0.0

- Starting with this version, react and react-dom are no longer dependencies, which means they will no longer be installed in node_modules of this component
- Updated the packages

## 5.0.1

- Fixed the dependency version of react

## 5.0.2

- Removed the source maps from generated package

## 5.1.0

- Added support for group of options

## 6.0.0

- Setting SelectProps.isClearable to true will display the clear button also when the value is set via value(s) prop
- Fixed the remove of the selected option(s) when the provided value(s) prop is null or values prop is an empty array
- When the component is disabled, there is no clear button displayed
- Fixed index.d.ts to include onBlur and onFocus

## 6.0.1

- Fixed bug related to clear button not correctly displayed when the values of a multi select are changed

## 6.1.0

- Fixed missing tslint package
- Keep only the lock file for installing packages via npm
- Improved the storybook

## 6.2.0

- Updated packages
- Added a storybook for keeping or not open at add time the multiple select options menu

## 6.3.0

- Updated packages

## 6.4.0

- Updated packages
- Moved from npm to yarn

## 6.4.1

- Fixed the typescript definition

## 6.4.2

- Fixed the association between label and input field using the provided id

## 6.5.0

- Fixed the selection of (default)value(s) based on the select type (single/multi)
- Updated packages

## 6.6.0

- Updated packages

## 6.6.1

- Fixed the use of an empty string as initial value, value which matches a value defined in an option

## 6.6.2

- Fixed the broken index.js produced by typescript 3.9.5 because of the "export \*"

## 6.6.3

- Fixed the issue when the value is not matched by any option

## 6.7.0

- Updated packages

## 6.8.0

- Accepting React 17 as peerDependencies
- Fixed security warnings

## 7.0.0

- Breaking change: the component uses the colors provided by material-ui theme or CSS instead of some hard-coded values

## 7.1.0

- Using react-select 4.3 instead of 3.2

## 8.0.0

- Using material-ui 5
- Fixed the bug related to label overwriting the dropdown button
- Fixed the bug related to passing custom components
- Fixed the ColorsSelect to display the color preview

## 8.0.1

- Corrected the location of the label
