import * as React from "react";
import FormControl from "@material-ui/core/FormControl/FormControl";
import SelectDropdown, {
  SelectOption,
  SelectOptionValue,
  SelectProps,
} from "./SelectDropdown";
import SelectHelperText from "./SelectHelperText";
import SelectLabel from "./SelectLabel";
import { BaseTextFieldProps } from "@material-ui/core/TextField";
import {
  filter,
  find,
  flatMap,
  isArray,
  isEmpty,
  isEqual,
  isFunction,
  isNil,
  isString,
  map,
  reject,
  size,
} from "lodash";

class ReactSelectMaterialUi extends React.PureComponent<
  ReactSelectMaterialUiProps,
  ReactSelectMaterialUiState
> {
  constructor(props: ReactSelectMaterialUiProps) {
    super(props);

    const { defaultValue, defaultValues, SelectProps, value, values } = props;
    const finalValue: string | string[] | undefined = this.getFinalValue(
      SelectProps?.isMulti,
      value as string,
      values as string[],
      defaultValue as string,
      defaultValues as string[]
    );

    this.state = {
      filter: "",
      hasInputFocus: false,
      selectedOption: this.getSelectedOption(props.options, finalValue),
    };
  }

  private getFinalValue = (
    isMulti?: boolean,
    value?: string,
    values?: string[],
    defaultValue?: string,
    defaultValues?: string[]
  ): string | string[] | undefined => {
    if(isMulti) {
      if(values === undefined || values === null) {
        return defaultValues;
      } else {
        return values;
      }
    } else {
      if(value === undefined || value === null) {
        return defaultValue;
      } else {
        return value;
      }
    }
  };

  private getSelectedOption = (
    options: string[] | SelectOption[],
    value?: string | string[]
  ) => {
    return isNil(value)
      ? undefined
      : this.getOneOrMoreSelectOptions(options, value);
  };

  private getOneOrMoreSelectOptions(
    options: (string | SelectOption)[],
    value: string | string[] | undefined
  ): SelectOption | SelectOption[] | undefined {
    if (isArray(value)) {
      return reject(map(value, this.getOptionForValue(options)), isNil);
    }
    return this.getOptionForValue(options)(value);
  }

  private getOptionForValue = (options: (string | SelectOption)[]) => (
    value: string | SelectOptionValue | undefined
  ): SelectOption | undefined => {
    const option: string | SelectOption | undefined = find(
      options,
      this.matchOptionValue(value)
    );
    if (isNil(option)) {
      const subOptions: SelectOption[] = filter(
        options,
        this.hasSubOptions
      ) as SelectOption[];

      if (isEmpty(subOptions)) {
        return;
      }

      return this.getOptionForValue(flatMap(subOptions, this.getSubOption))(
        value
      );
    }

    return this.getSelectOption(option);
  };

  private matchOptionValue = (value: string | SelectOptionValue) => (
    option: string | SelectOption
  ): boolean => {
    if (isString(option)) {
      return value === option;
    }

    return isEqual(value, option.value);
  };

  private hasSubOptions = (option: string | SelectOption) => {
    return (
      isString(option) === false && isArray((option as SelectOption).options)
    );
  };

  private getSubOption = (option: SelectOption): SelectOption[] =>
    option.options!;

  private getOptions(options: (string | SelectOption)[]): SelectOption[] {
    return map(options, this.getSelectOption);
  }

  private getSelectOption(option: string | SelectOption): SelectOption {
    if (isString(option)) {
      return {
        label: option,
        value: option,
      };
    }

    return option;
  }

  public render() {
    const {
      autoComplete,
      autoFocus,
      children,
      className,
      defaultValue,
      defaultValues,
      disabled,
      error,
      FormHelperTextProps,
      fullWidth,
      helperText,
      id,
      InputLabelProps,
      inputRef,
      label,
      multiline,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required,
      rows,
      rowsMax,
      select,
      SelectProps,
      type,
      value,
      values,
      options,
      variant,
      ...other
    } = this.props;

    const helperTextId = id && helperText ? `${id}-helper-text` : undefined;
    const { hasInputFocus, selectedOption } = this.state;

    let dropdownOption:
      | SelectOption
      | SelectOption[]
      | null
      | undefined = selectedOption;
    if (value === null || values === null) {
      dropdownOption = null;
    } else if ((value !== undefined && value !== null) || values) {
      const propIsMulti = SelectProps?.isMulti;
      const finalValue: string | string[] | undefined = this.getFinalValue(
        propIsMulti,
        value as string,
        values as string[]
      );
      dropdownOption = this.getSelectedOption(options, finalValue);
    }

    const propIsClearable = SelectProps?.isClearable;
    const isClearable: boolean =
      propIsClearable === true && this.isClearable(dropdownOption);
    const isDisabled: boolean =
      disabled || (!!SelectProps && SelectProps.isDisabled);
    const selectPlaceholder: string | undefined = label ? "" : placeholder;
    const shrink: boolean = this.isShrinked(dropdownOption);
    return (
      <FormControl
        aria-describedby={helperTextId}
        className={className}
        error={error}
        fullWidth={fullWidth}
        required={required}
        {...other}
      >
        <SelectLabel
          inputId={id}
          label={label}
          shrink={shrink}
          hasInputFocus={hasInputFocus}
          inputLabelProps={InputLabelProps}
        />
        <SelectDropdown
          inputId={id}
          value={dropdownOption}
          placeholder={selectPlaceholder}
          options={this.getOptions(options)}
          selectProps={{
            ...SelectProps,
            isClearable,
            isDisabled,
          }}
          hasInputFocus={hasInputFocus}
          onChange={this.handleChangeSelect}
          onFocus={this.handleGotFocus}
          onBlur={this.handleLostFocus}
        />
        <SelectHelperText
          id={helperTextId}
          helperText={helperText}
          formHelperTextProps={FormHelperTextProps}
        />
      </FormControl>
    );
  }

  private isShrinked(
    selectedOption?: SelectOption | SelectOption[] | null
  ): boolean {
    if (this.hasInputFocus() || this.hasFilter()) {
      return true;
    }

    return isEmpty(selectedOption) === false;
  }

  private isClearable(
    dropdownOption: SelectOption | SelectOption[] | null | undefined
  ) {
    const { disabled } = this.props;

    if (disabled) {
      return false;
    }

    if (isEmpty(dropdownOption)) {
      return false;
    }

    if (isArray(dropdownOption) && size(dropdownOption) < 2) {
      return false;
    }

    return true;
  }

  private hasInputFocus(): boolean {
    return this.state.hasInputFocus === true;
  }

  private hasFilter(): boolean {
    return isEmpty(this.state.filter) === false;
  }

  private handleChangeSelect = (
    newValue: SelectOption | SelectOption[] | null
  ) => {
    const { onChange, value, values } = this.props;

    if (isEmpty(value) && isEmpty(values)) {
      this.setState({
        filter: "",
        selectedOption: newValue,
      });
    }

    if (isFunction(onChange)) {
      onChange(
        this.getValues(newValue),
        newValue === null ? undefined : newValue
      );
    }
  };

  private getValues(
    value: SelectOption | SelectOption[] | null
  ): SelectOptionValue | SelectOptionValue[] | null {
    if (isNil(value)) {
      return null;
    }

    if (isArray(value)) {
      return map(value, this.getValue);
    }

    return this.getValue(value);
  }

  private getValue(option: SelectOption): SelectOptionValue {
    return option.value;
  }

  private handleGotFocus = (event: React.FocusEvent<HTMLElement>) => {
    this.setState({
      hasInputFocus: true,
    });

    const { onFocus } = this.props;

    if (isFunction(onFocus)) {
      onFocus(event);
    }
  };

  private handleLostFocus = (event: React.FocusEvent<HTMLElement>) => {
    this.setState({
      hasInputFocus: false,
    });

    const { onBlur } = this.props;

    if (isFunction(onBlur)) {
      onBlur(event);
    }
  };
}

interface ReactSelectMaterialUiState {
  hasInputFocus?: boolean;
  filter?: string;
  selectedOption?: SelectOption | SelectOption[] | null;
}

export interface ReactSelectMaterialUiProps
  extends React.Props<ReactSelectMaterialUi>,
    Omit<BaseTextFieldProps, "onChange"> {
  defaltValue?: SelectOptionValue;
  defaultValues?: SelectOptionValue[];
  options: string[] | SelectOption[];
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
  onChange: (
    value: SelectOptionValue | SelectOptionValue[],
    option?: SelectOption | SelectOption[]
  ) => void;
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  ref?: any;
  SelectProps?: SelectProps | any;
  value?: SelectOptionValue;
  values?: SelectOptionValue[];
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;

export default ReactSelectMaterialUi;

export { SelectOption };
