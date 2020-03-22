import * as React from 'react';
import InputLabel, { InputLabelProps } from '@material-ui/core/InputLabel/InputLabel';
import SelectLabel from './SelectLabel';
import { colorFocus, colorNoFocus } from './ColorConstants';
import { shallow, ShallowWrapper } from 'enzyme';

describe('SelectLabel', () => {
  it('does not render if label is missing', () => {
    const wrapper: ShallowWrapper = shallow(<SelectLabel />);
    expect(wrapper.html()).toBeNull();
  });

  it('uses the label', () => {
    const label: string = 'label';
    const wrapper: ShallowWrapper = shallow(<SelectLabel label={label} />);
    expect(
      wrapper
        .find(InputLabel)
        .childAt(0)
        .text()
    ).toEqual(label);
  });

  it('passes id to child', () => {
    const id: string = 'id';
    const label: string = 'label';
    const wrapper: ShallowWrapper = shallow(<SelectLabel inputId={id} label={label} />);
    expect(wrapper.find(InputLabel).prop('htmlFor')).toEqual(id);
  });

  it('passes shrink to child', () => {
    const label: string = 'label';
    let shrink: boolean = true;
    let wrapper: ShallowWrapper = shallow(<SelectLabel label={label} shrink={shrink} />);
    expect(wrapper.find(InputLabel).prop('shrink')).toEqual(shrink);

    shrink = false;
    wrapper = shallow(<SelectLabel label={label} shrink={shrink} />);
    expect(wrapper.find(InputLabel).prop('shrink')).toEqual(shrink);
  });

  it('uses the correct color for (no) focus', () => {
    const label: string = 'label';
    let hasInputFocus: boolean = true;
    let wrapper: ShallowWrapper = shallow(<SelectLabel label={label} hasInputFocus={hasInputFocus} />);
    expect(wrapper.find(InputLabel).prop('style')).toBeDefined();
    expect(wrapper.find(InputLabel).prop('style')!.color).toEqual(colorFocus);

    hasInputFocus = false;
    wrapper = shallow(<SelectLabel label={label} hasInputFocus={hasInputFocus} />);
    expect(wrapper.find(InputLabel).prop('style')).toBeDefined();
    expect(wrapper.find(InputLabel).prop('style')!.color).toEqual(colorNoFocus);
  });

  it('passes inputLabelProps to child', () => {
    const label: string = 'label';
    const inputLabelProps: InputLabelProps = { disabled: true, required: true };
    let wrapper: ShallowWrapper = shallow(<SelectLabel label={label} inputLabelProps={inputLabelProps} />);
    expect(wrapper.find(InputLabel).props()).toMatchObject(inputLabelProps);
  });
});
