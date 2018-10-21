import * as React from "react";
import { ShallowWrapper, shallow } from "enzyme";
import FormHelperText, { FormHelperTextProps } from "@material-ui/core/FormHelperText/FormHelperText";
import SelectHelperText from "./SelectHelperText";

describe("SelectHelperText", () => {
  it("does not render if helperText is missing", () => {
    const wrapper: ShallowWrapper = shallow(<SelectHelperText />);
    expect(wrapper.html()).toBeNull();
  });

  it("uses the helperText", () => {
    const helperText: string = "helperText";
    const wrapper: ShallowWrapper = shallow(<SelectHelperText helperText={helperText} />);
    expect(
      wrapper
        .find(FormHelperText)
        .childAt(0)
        .text()
    ).toEqual(helperText);
  });

  it("passes helperTextId to child", () => {
    const id: string = "id";
    const helperText: string = "helperText";
    const wrapper: ShallowWrapper = shallow(<SelectHelperText id={id} helperText={helperText} />);
    expect(wrapper.find(FormHelperText).prop("id")).toEqual(id);
  });

  it("passes FormHelperTextProps to child", () => {
    const helperText: string = "helperText";
    const formHelperTextProps: FormHelperTextProps = { disabled: true, required: true };
    let wrapper: ShallowWrapper = shallow(
      <SelectHelperText helperText={helperText} formHelperTextProps={formHelperTextProps} />
    );
    expect(wrapper.find(FormHelperText).props()).toMatchObject(formHelperTextProps);
  });
});
