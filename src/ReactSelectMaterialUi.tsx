import * as React from 'react';
import FormControl from '@material-ui/core/FormControl/FormControl';
import SelectDropdown, { SelectOption, SelectProps } from './SelectDropdown';
import SelectHelperText from './SelectHelperText';
import SelectLabel from './SelectLabel';
import { BaseTextFieldProps } from '@material-ui/core/TextField';
import {
	find,
	isArray,
	isEmpty,
	isFunction,
	isNil,
	isObject,
	isString,
	map,
	reject,
	size
	} from 'lodash';


class ReactSelectMaterialUi extends React.Component<ReactSelectMaterialUiProps, ReactSelectMaterialUiState> {
	constructor(props: ReactSelectMaterialUiProps) {
		super(props);

		const value: string | string[] = (props.values as string[]) || (props.value as string);

		this.state = {
			filter: '',
			hasInputFocus: false,
			selectedOption: isNil(value) ? undefined : this.getOneOrMoreSelectOptions(value)
		};
	}

	public render() {
		const {
			autoComplete,
			autoFocus,
			children,
			className,
			defaultValue,
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
			options,
			...other
		} = this.props;

		const helperTextId = id && helperText ? `${id}-helper-text` : undefined;
		const shrink: boolean = this.hasInputFocus() || this.hasFilter() || this.hasValue();
		const { hasInputFocus, selectedOption } = this.state;

		const isClearable: boolean = !!SelectProps && SelectProps.isClearable && this.isClearable();
		const isDisabled: boolean = disabled || (!!SelectProps && SelectProps.isDisabled);
		const selectPlaceholder: string | undefined = label ? '' : placeholder;

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

	private getOneOrMoreSelectOptions(value: string | string[]): SelectOption | SelectOption[] | undefined {
		if (isArray(value)) {
			return reject(map(value, this.getOptionForValue), isNil);
		}

		return this.getOptionForValue(value);
	}

	private getOptionForValue = (value: string | any): SelectOption | undefined => {
		const option: string | SelectOption | undefined = find(this.props.options, this.matchOptionValue(value));

		if (isNil(option)) {
			return;
		}

		return this.getSelectOption(option);
	};

	private matchOptionValue = (value: string | any) => (option: string | SelectOption): boolean => {
		if (isString(option)) {
			return value === option;
		}

		if (isObject(option)) {
			return value === option.value;
		}

		return false;
	};

	private isClearable() {
		const { selectedOption } = this.state;

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

	private hasValue(): boolean {
		return isEmpty(this.state.selectedOption) === false;
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

	private handleChangeSelect = (value: SelectOption | SelectOption[] | null) => {
		this.setState({
			filter: '',
			selectedOption: value
		});

		const { onChange } = this.props;

		if (isFunction(onChange)) {
			onChange(this.getValues(value));
		}
	};

	private getValues(value: SelectOption | SelectOption[] | null): string | string[] | null {
		if (isNil(value)) {
			return null;
		}

		if (isArray(value)) {
			return map(value, this.getValue);
		}

		return this.getValue(value);
	}

	private getValue(option: SelectOption): string {
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
	value?: string;
	values?: string[];
	options: (string | SelectOption)[];
	onChange: (value: string | string[] | React.ChangeEvent<any>) => void;
	SelectProps?: SelectProps | any;
}

export default ReactSelectMaterialUi;

export { SelectOption };
