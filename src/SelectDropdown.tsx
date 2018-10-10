import * as React from 'react';
import {isEmpty, isNil} from 'lodash';
import {Props as ReactSelectProps} from 'react-select/lib/Select';
import SelectReadOnly from 'react-select';
import SelectCreatable from 'react-select/lib/Creatable';
import {getStyles} from './SelectDropdownStyles';

class SelectDropdown extends React.Component<SelectDropdownProps> {
    private static spaces: RegExp = /\s/;

    public render() {
        const {value, options, selectProps, onChange, onFocus, onBlur} = this.props;

        const Select = (selectProps && selectProps.isCreatable) ? SelectCreatable : SelectReadOnly;

        return (
            <Select
                {...selectProps}
                value={value}
                options={options}
                placeholder=''
                createOptionPosition='first'
                styles={getStyles(this.props)}
                noOptionsMessage={this.noOptionsMessage}
                isValidNewOption={this.isValidNewOption}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        );
    }

    private noOptionsMessage = (obj: { inputValue: string }) => {
        const {selectProps} = this.props;

        if (isNil(selectProps)) {
            return null;
        }

        if (isEmpty(obj) || isEmpty(obj.inputValue)) {
            return selectProps.msgNoOptionsAvailable || 'No more options are available';
        }

        if (selectProps.isCreatable) {
            return selectProps.msgNoValidValue || 'The new value is not valid (contains space)';
        }

        return selectProps.msgNoOptionsMatchFilter || 'No options match the filter';
    };

    private isValidNewOption = (inputValue: string) => {
        if (isEmpty(inputValue)) {
            return false;
        }

        const hasSpaces = SelectDropdown.spaces.test(inputValue);
        return hasSpaces === false;
    };
}

interface SelectDropdownProps {
    hasInputFocus?: boolean;
    isCreatable?: boolean;
    value?: SelectOption | SelectOption[];
    options?: SelectOption[];
    selectProps?: SelectProps;
    onChange?: (value: SelectOption | SelectOption[]) => void;
    onFocus?: (event: any) => void;
    onBlur?: (event: any) => void;
}

export interface SelectProps extends ReactSelectProps<SelectOption> {
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
