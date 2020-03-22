import * as React from "react";
import SelectReadOnly from "react-select";
import Creatable from "react-select/creatable";
import { shallow, ShallowWrapper } from "enzyme";
import SelectDropdown, {
  SelectDropdownProps,
  SelectOption,
  SelectProps
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
    expect(wrapper.find(Creatable).exists()).toBeTruthy;
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
      <SelectDropdown {...selectDropdownProps} selectProps={selectProps} />
    );
    const props: SelectDropdownProps = wrapper.find<any>(Creatable).props();
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
    const wrapper: ShallowWrapper = shallow(
      <SelectDropdown {...selectDropdownProps} />
    );
    expect(wrapper.find(SelectReadOnly).prop("isValidNewOption")).toEqual(
      isValidNewOption
    );
  });

  it("has the correct value for prop createOptionPosition", () => {
    const wrapper: ShallowWrapper = shallow(<SelectDropdown />);
    expect(wrapper.find(SelectReadOnly).prop("createOptionPosition")).toEqual(
      "first"
    );
  });

  it("allowes to overwrite prop createOptionPosition", () => {
    const createOptionPosition = "last";
    const selectDropdownProps: SelectDropdownProps = {
      selectProps: {
        createOptionPosition
      }
    };
    const wrapper: ShallowWrapper = shallow(
      <SelectDropdown {...selectDropdownProps} />
    );
    expect(wrapper.find(SelectReadOnly).prop("createOptionPosition")).toEqual(
      createOptionPosition
    );
  });
});
