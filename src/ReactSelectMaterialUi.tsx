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

		const value: string | string[] | undefined = (props.values as string[]) || (props.value as string) ||
			(props.defaultValues as string[]) || (props.defaultValue as string);

		this.state = {
			filter: '',
			hasInputFocus: false,
			selectedOption: isEmpty(value) ? undefined : this.getOneOrMoreSelectOptions(value)
		};
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

		const isClearable: boolean = !!SelectProps && SelectProps.isClearable === true && this.isClearable();
		const isDisabled: boolean = disabled || (!!SelectProps && SelectProps.isDisabled);
		const selectPlaceholder: string | undefined = label ? '' : placeholder;
		const shrink: boolean = this.isShrinked(selectedOption);

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
					value={selectedOption}
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

	private getOneOrMoreSelectOptions(value: string | string[] | undefined): SelectOption | SelectOption[] | undefined {
		if (isArray(value)) {
			return reject(map(value, this.getOptionForValue), isNil);
		}

		return this.getOptionForValue(value);
	}

	private getOptionForValue = (value: string | SelectOptionValue | undefined): SelectOption | undefined => {
		const option: string | SelectOption | undefined = find(this.props.options, this.matchOptionValue(value));

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

	private handleChangeSelect = (newValue: SelectOption | SelectOption[] | null) => {
		const { onChange, value, values } = this.props;
		
		if (isEmpty(value) && isEmpty(values)) {
			this.setState({
				filter: '',
				selectedOption: newValue
			});
		}

		if (isFunction(onChange)) {
			onChange(this.getValues(newValue));
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

export interface ReactSelectMaterialUiProps extends React.Props<ReactSelectMaterialUi>, BaseTextFieldProps {
	defaltValue?: SelectOptionValue;
	defaultValues?: SelectOptionValue[];
	options: (string | SelectOption)[];
	onChange: ((value: SelectOptionValue | SelectOptionValue[]) => void) | ((value: React.ChangeEvent<any>) => never);
	ref?: any;
	SelectProps?: SelectProps | any;
	value?: SelectOptionValue;
	values?: SelectOptionValue[];
}

export default ReactSelectMaterialUi;

export { SelectOption };
