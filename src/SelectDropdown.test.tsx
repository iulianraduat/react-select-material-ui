import * as React from "react";
import { ShallowWrapper, shallow } from "enzyme";
import SelectReadOnly from "react-select";
import SelectCreatable from "react-select/lib/Creatable";
import SelectDropdown, {
  SelectProps,
  SelectDropdownProps,
  SelectOption
} from "./SelectDropdown";

describe("SelectDropdown", () => {
  it("produces a normal select", () => {
    const wrapper: ShallowWrapper = shallow(<SelectDropdown />);
    expect(wrapper.find(SelectReadOnly).exists()).toBeTruthy;
  });

  it("produces a creatable select", () => {
    const selectProps: SelectProps = { isCreatable: true };
    const wrapper: ShallowWrapper = shallow(
      <SelectDropdown selectProps={selectProps} />
    );
    expect(wrapper.find(SelectCreatable).exists()).toBeTruthy;
  });

  it("passes all expected props to the child", () => {
    const selectProps: SelectProps = { isCreatable: true };
    const selectDropdownProps: SelectDropdownProps = {
      value: [],
      options: [],
      onChange: (value: SelectOption | SelectOption[]) => {},
      onFocus: (event: any) => {},
      onBlur: (event: any) => {}
    };
    const wrapper: ShallowWrapper = shallow(
      <SelectDropdown {...selectDropdownProps} selectProps={selectProps}/>
    );
    const props: SelectDropdownProps = wrapper.find(SelectCreatable).props();
    expect(props).toMatchObject(selectDropdownProps);
    expect(props).toMatchObject(selectProps);
  });

  it("allowes to overwrite prop isValidNewOption", () => {
    const isValidNewOption = (inputValue: string) => true;
    const selectDropdownProps: SelectDropdownProps = {
      selectProps: {
        isValidNewOption
      }
    };
    const wrapper: ShallowWrapper = shallow(<SelectDropdown {...selectDropdownProps}/>);
    expect(wrapper.find(SelectReadOnly).prop("isValidNewOption")).toEqual(isValidNewOption);
  });

  it("has the correct value for prop createOptionPosition", () => {
    const wrapper: ShallowWrapper = shallow(<SelectDropdown/>);
    expect(wrapper.find(SelectReadOnly).prop("createOptionPosition")).toEqual("first");
  });

  it("allowes to overwrite prop createOptionPosition", () => {
    const createOptionPosition = "last";
    const selectDropdownProps: SelectDropdownProps = {
      selectProps: {
        createOptionPosition
      }
    };
    const wrapper: ShallowWrapper = shallow(<SelectDropdown {...selectDropdownProps}/>);
    expect(wrapper.find(SelectReadOnly).prop("createOptionPosition")).toEqual(createOptionPosition);
  });
});
