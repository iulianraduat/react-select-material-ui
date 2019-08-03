import * as React from 'react';
import FormControl from '@material-ui/core/FormControl/FormControl';
import SelectDropdown, { SelectOption, SelectOptionValue, SelectProps } from './SelectDropdown';
import SelectHelperText from './SelectHelperText';
import SelectLabel from './SelectLabel';
import { BaseTextFieldProps } from '@material-ui/core/TextField';
import {
	find,
	isArray,
	isEmpty,
	isEqual,
	isFunction,
	isNil,
	isString,
	map,
	reject,
	size
	} from 'lodash';

class ReactSelectMaterialUi extends React.PureComponent<ReactSelectMaterialUiProps, ReactSelectMaterialUiState> {
	constructor(props: ReactSelectMaterialUiProps) {
		super(props);

		const {defaultValue, defaultValues, value, values, } = props;
		const finalValue: string | string[] | undefined = this.getFinalValue(value as string, values as string[], 
			defaultValue as string, defaultValues as string[]);

		this.state = {
			filter: '',
			hasInputFocus: false,
			selectedOption: this.getSelectedOption(props.options, finalValue)
		};
	}

	private getFinalValue = (value?: string, values?: string[], defaultValue?: string, defaultValues?: string[]): string | string[] | undefined => {
		return values || value || defaultValues || defaultValue;
	}

	private getSelectedOption = (options: string[] | SelectOption[], value?: string | string[]) => {
		return isEmpty(value) ? undefined : this.getOneOrMoreSelectOptions(options, value);
	}

	private getOneOrMoreSelectOptions(options:(string | SelectOption)[], value: string | string[] | undefined): SelectOption | SelectOption[] | undefined {
		if (isArray(value)) {
			return reject(map(value, this.getOptionForValue(options)), isNil);
		}

		return this.getOptionForValue(options)(value);
	}

	private getOptionForValue = (options:(string | SelectOption)[]) => (value: string | SelectOptionValue | undefined): SelectOption | undefined => {
		const option: string | SelectOption | undefined = find(options, this.matchOptionValue(value));

		if (isNil(option)) {
			return;
		}

		return this.getSelectOption(option);
	};

	private matchOptionValue = (value: string | SelectOptionValue) => (option: string | SelectOption): boolean => {
		if (isString(option)) {
			return value === option;
		}

		return isEqual(value, option.value);
	};

	private getOptions(options: (string | SelectOption)[]): SelectOption[] {
		return map(options, this.getSelectOption);
	}

	private getSelectOption(option: string | SelectOption): SelectOption {
		if (isString(option)) {
			return {
				label: option,
				value: option
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

		let dropdownOption: SelectOption | SelectOption[] | null | undefined = selectedOption;
		if(value || values){
			const finalValue: string | string[] | undefined = this.getFinalValue(value as string, values as string[]);
			dropdownOption = this.getSelectedOption(options, finalValue);
		}

		const isClearable: boolean = !!SelectProps && SelectProps.isClearable === true && this.isClearable();
		const isDisabled: boolean = disabled || (!!SelectProps && SelectProps.isDisabled);
		const selectPlaceholder: string | undefined = label ? '' : placeholder;
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
					id={id}
					label={label}
					shrink={shrink}
					hasInputFocus={hasInputFocus}
					inputLabelProps={InputLabelProps}
				/>
				<SelectDropdown
					value={dropdownOption}
					placeholder={selectPlaceholder}
					options={this.getOptions(options)}
					selectProps={{
						...SelectProps,
						isClearable,
						isDisabled
					}}
					onChange={this.handleChangeSelect}
					onFocus={this.handleGotFocus}
					onBlur={this.handleLostFocus}
				/>
				<SelectHelperText id={helperTextId} helperText={helperText} formHelperTextProps={FormHelperTextProps} />
			</FormControl>
		);
	}

	private isShrinked(selectedOption?: SelectOption | SelectOption[] | null): boolean {
		if(this.hasInputFocus() || this.hasFilter()){
			return true;
		}
		
		return isEmpty(selectedOption) === false;
	}

	private isClearable() {
		const { value, values } = this.props;
		const { selectedOption } = this.state;

		if (value || values) {
			return false;
		}

		if (isEmpty(selectedOption)) {
			return false;
		}

		if (isArray(selectedOption) && size(selectedOption) <= 1) {
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

	private handleChangeSelect = (newValue: SelectOption | SelectOption[] | null) => {
		const { onChange, value, values } = this.props;
		
		if (isEmpty(value) && isEmpty(values)) {
			this.setState({
				filter: '',
				selectedOption: newValue
			});
		}

		if (isFunction(onChange)) {
			onChange(this.getValues(newValue), newValue === null ? undefined : newValue);
		}
	};

	private getValues(value: SelectOption | SelectOption[] | null): SelectOptionValue | SelectOptionValue[] | null {
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

	private handleGotFocus = (event: any) => {
		this.setState({
			hasInputFocus: true
		});

		const { onFocus } = this.props;

		if (isFunction(onFocus)) {
			onFocus(event);
		}
	};

	private handleLostFocus = (event: any) => {
		this.setState({
			hasInputFocus: false
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

export interface ReactSelectMaterialUiProps extends React.Props<ReactSelectMaterialUi>, Omit<BaseTextFieldProps, 'onChange'> {
	defaltValue?: SelectOptionValue;
	defaultValues?: SelectOptionValue[];
	options: string[] | SelectOption[];
	onChange: (value: SelectOptionValue | SelectOptionValue[], option?: SelectOption | SelectOption[]) => void;
	ref?: any;
	SelectProps?: SelectProps | any;
	value?: SelectOptionValue;
	values?: SelectOptionValue[];
}

type Omit<T, K> = Pick<T, Exclude<keyof T, K>>

export default ReactSelectMaterialUi;

export { SelectOption };
