import { isArray, isEmpty, isNil, some, toString } from 'lodash';
import * as React from 'react';
import SelectReadOnly, { Props as ReactSelectProps, SelectComponentsConfig, StylesConfig } from 'react-select';
import Creatable, { CreatableProps } from 'react-select/creatable';
import { MySingleValue } from './MySingleValue';
import { getStyles } from './SelectDropdownStyles';

const components: SelectComponentsConfig<any, boolean> = {
  SingleValue: MySingleValue,
};

class SelectDropdown extends React.Component<SelectDropdownProps> {
  private static spaces: RegExp = /\s/;
  private static SENSITIVITY: Intl.CollatorOptions = { sensitivity: 'base' };

  public render() {
    const { inputId, placeholder, onChange, onFocus, onBlur, options, selectProps, value } = this.props;

    const styles = getStyles(selectProps);
    const comps = selectProps?.components ? { ...components, ...selectProps?.components } : components;

    if (selectProps?.isCreatable) {
      return (
        <Creatable
          inputId={inputId}
          isValidNewOption={this.isValidNewOption}
          captureMenuScroll={false}
          createOptionPosition="first"
          {...selectProps}
          value={value}
          placeholder={placeholder}
          options={options}
          styles={styles}
          noOptionsMessage={this.noOptionsMessage}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          components={comps}
        />
      );
    }

    return (
      <SelectReadOnly
        inputId={inputId}
        isValidNewOption={this.isValidNewOption}
        captureMenuScroll={false}
        createOptionPosition="first"
        {...selectProps}
        value={value}
        placeholder={placeholder}
        options={options}
        styles={styles}
        noOptionsMessage={this.noOptionsMessage}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        components={comps}
      />
    );
  }

  private noOptionsMessage = (obj: { inputValue: string }) => {
    const { selectProps } = this.props;

    if (isNil(selectProps)) {
      return null;
    }

    if (isEmpty(obj) || isEmpty(obj.inputValue)) {
      return selectProps.msgNoOptionsAvailable || 'No more options are available';
    }

    const { inputValue } = obj;

    if (selectProps.isCreatable !== true || this.containsValue(inputValue) || this.containsOptions(inputValue)) {
      return selectProps.msgNoOptionsMatchFilter || 'No options match the filter';
    }

    return selectProps.msgNoValidValue || 'The new value is not valid (contains space)';
  };

  private isValidNewOption = (inputValue: string) => {
    if (isEmpty(inputValue)) {
      return false;
    }

    if (this.containsOptions(inputValue)) {
      return false;
    }

    const hasSpaces = SelectDropdown.spaces.test(inputValue);
    return hasSpaces === false;
  };

  private containsOptions(inputValue: string): boolean {
    return some(this.props.options, (option: SelectOption) => this.equalsIgnoringCase(inputValue, option.value));
  }

  private containsValue(inputValue: string): boolean {
    const { value } = this.props;

    if (isArray(value) === false) {
      return false;
    }

    return some(value, (option: SelectOption) => this.equalsIgnoringCase(inputValue, option.value));
  }

  private equalsIgnoringCase(a: string, b: any) {
    return a.localeCompare(toString(b), undefined, SelectDropdown.SENSITIVITY) === 0;
  }
}

export interface SelectDropdownProps {
  hasInputFocus?: boolean;
  inputId?: string;
  onBlur?: (event: any) => void;
  onChange?: (value: SelectOption | SelectOption[] | null) => void;
  onFocus?: (event: any) => void;
  options?: SelectOption[];
  placeholder?: string;
  selectProps?: SelectProps;
  value?: SelectOption | SelectOption[] | null;
}

export type SelectProps =
  | (ReactSelectProps<SelectOption> & SelectCommonProps)
  | (CreatableProps<SelectOption, any, any> & SelectCommonProps);

interface SelectCommonProps {
  components?: SelectComponentsConfig<any, boolean>;
  isClearable?: boolean;
  isCreatable?: boolean;
  isDisabled?: boolean;
  msgNoOptionsAvailable?: string;
  msgNoOptionsMatchFilter?: string;
  msgNoValidValue?: string;
  styles?: StylesConfig<any, boolean>;
}

export interface SelectOption {
  label: string;
  options?: SelectOption[];
  value?: any;
}

export default SelectDropdown;
