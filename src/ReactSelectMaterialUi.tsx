import * as React from 'react';
import { isArray, isEmpty, isFunction, isNil, isString, map, size } from 'lodash';
import { StandardTextFieldProps } from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl/FormControl';
import SelectLabel from './SelectLabel';
import SelectDropdown, { SelectOption, SelectProps } from './SelectDropdown';
import SelectHelperText from './SelectHelperText';

class ReactSelectMaterialUi extends React.Component<ReactSelectMaterialUiProps, ReactSelectMaterialUiState> {
    constructor(props: ReactSelectMaterialUiProps) {
        super(props);

        const value: string | string[] = props.values as string[] || props.value as string;

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
            error,
            FormHelperTextProps,
            fullWidth,
            helperText,
            id,
            InputLabelProps,
            inputProps,
            InputProps,
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

        const helperTextId = (id && helperText) ? `${id}-helper-text` : undefined;
        const shrink: boolean = this.hasInputFocus() || this.hasFilter() || this.hasValue();
        const { hasInputFocus, selectedOption } = this.state;

        const isClearable: boolean = !!SelectProps && SelectProps.isClearable && this.isClearable();

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
                    hasInputFocus={hasInputFocus}
                    value={selectedOption}
                    options={this.getOptions(options)}
                    selectProps={{
                        ...SelectProps,
                        isClearable
                    }}
                    onChange={this.hanldeChangeSelect}
                    onFocus={this.handleGotFocus}
                    onBlur={this.handleLostFocus}
                />
                <SelectHelperText
                    helperTextId={helperTextId}
                    helperText={helperText}
                    formHelperTextProps={FormHelperTextProps}
                />
            </FormControl>
        );
    }

    private getOneOrMoreSelectOptions(value: string | string[]) {
        if (isArray(value)) {
            return this.getOptions(value);
        }

        return this.getSelectOption(value);
    }

    private isClearable() {
        const { selectedOption } = this.state;

        if (isEmpty(selectedOption)) {
            return false;
        }

        if (isArray(selectedOption) && size(selectedOption) <= 1) {
            return false;
        }

        return true;
    };

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
            return ({
                label: option,
                value: option
            });
        }

        return option;
    }

    private hanldeChangeSelect = (value: SelectOption | SelectOption[]) => {
        this.setState({
            filter: '',
            selectedOption: value
        });

        const { onChange } = this.props;

        if (isFunction(onChange)) {
            onChange(this.getValues(value));
        }
    };

    private getValues(value: SelectOption | SelectOption[]): string | string[] {
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
    selectedOption?: SelectOption | SelectOption[];
}

export interface ReactSelectMaterialUiProps extends StandardTextFieldProps {
    isCreatable?: boolean;
    value?: string;
    values?: string[];
    options: (string | SelectOption)[];
    onChange: (value: string | string[] | React.ChangeEvent<any>) => void;
    SelectProps?: SelectProps | any;
}

export default ReactSelectMaterialUi;

export { SelectOption };
