import * as React from 'react';
import { isArray, isEmpty, isNil, some } from 'lodash';
import SelectReadOnly from 'react-select';
import { Props as ReactSelectProps } from 'react-select/lib/Select';
import SelectCreatable, { CreatableProps } from 'react-select/lib/Creatable';
import { getStyles } from './SelectDropdownStyles';

class SelectDropdown extends React.Component<SelectDropdownProps> {
	private static spaces: RegExp = /\s/;
	private static SENSITIVITY = { sensitivity: 'base' };

	public render() {
		const { value, options, selectProps, onChange, onFocus, onBlur } = this.props;

		const Select: React.ComponentClass<any> =
			selectProps && selectProps.isCreatable ? SelectCreatable : SelectReadOnly;

		return (
			<Select
				isValidNewOption={this.isValidNewOption}
				captureMenuScroll={false}
				createOptionPosition="first"
				{...selectProps}
				value={value}
				options={options}
				placeholder=""
				styles={getStyles(this.props)}
				noOptionsMessage={this.noOptionsMessage}
				onChange={onChange}
				onFocus={onFocus}
				onBlur={onBlur}
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

	private equalsIgnoringCase(a: string, b: string) {
		return a.localeCompare(b, undefined, SelectDropdown.SENSITIVITY) === 0;
	}
}

export interface SelectDropdownProps {
	value?: SelectOption | SelectOption[] | null;
	options?: SelectOption[];
	selectProps?: SelectProps;
	onChange?: (value: SelectOption | SelectOption[] | null) => void;
	onFocus?: (event: any) => void;
	onBlur?: (event: any) => void;
}

export interface SelectProps extends ReactSelectProps<SelectOption>, CreatableProps<SelectOption> {
	isCreatable?: boolean;
	msgNoOptionsAvailable?: string;
	msgNoOptionsMatchFilter?: string;
	msgNoValidValue?: string;
}

export interface SelectOption {
	label: string;
	value: any;
}

export default SelectDropdown;
