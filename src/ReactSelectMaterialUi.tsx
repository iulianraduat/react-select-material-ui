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
			selectedOption: isEmpty(value) ? undefined : ReactSelectMaterialUi.getOneOrMoreSelectOptions(props.options, value)
		};
	}

	public static getDerivedStateFromProps(nextProps:ReactSelectMaterialUiProps, prevState:ReactSelectMaterialUiState) {
		const value: string | string[] | undefined = (nextProps.values as string[]) || (nextProps.value as string) ||
			(nextProps.defaultValues as string[]) || (nextProps.defaultValue as string);

		if(!value){
			return null;
		}

		return {
			selectedOption: ReactSelectMaterialUi.getOneOrMoreSelectOptions(nextProps.options, value)
		}
	}

	private static getOneOrMoreSelectOptions(options:(string | SelectOption)[], value: string | string[] | undefined): SelectOption | SelectOption[] | undefined {
		if (isArray(value)) {
			return reject(map(value, ReactSelectMaterialUi.getOptionForValue(options)), isNil);
		}

		return ReactSelectMaterialUi.getOptionForValue(options)(value);
	}

	private static getOptionForValue = (options:(string | SelectOption)[]) => (value: string | SelectOptionValue | undefined): SelectOption | undefined => {
		const option: string | SelectOption | undefined = find(options, ReactSelectMaterialUi.matchOptionValue(value));

		if (isNil(option)) {
			return;
		}

		return ReactSelectMaterialUi.getSelectOption(option);
	};

	private static matchOptionValue = (value: string | SelectOptionValue) => (option: string | SelectOption): boolean => {
		if (isString(option)) {
			return value === option;
		}

		return isEqual(value, option.value);
	};

	private static getOptions(options: (string | SelectOption)[]): SelectOption[] {
		return map(options, ReactSelectMaterialUi.getSelectOption);
	}

	private static getSelectOption(option: string | SelectOption): SelectOption {
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
					options={ReactSelectMaterialUi.getOptions(options)}
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
