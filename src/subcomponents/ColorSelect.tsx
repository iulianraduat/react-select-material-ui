import { CSSProperties } from 'react';
import { MaterialUiCreatableProps } from '../MaterialUiCreatable';
import ColoredDot from './ColoredDot';
import ColoredOption from './ColoredOption';
import SingleSelect from './SingleSelect';

const label = (props: any) => {
  const value: string = props.data.value;
  const style: CSSProperties = {
    padding: '2px 5px 2px 0',
  };

  return (
    <div style={style}>
      <ColoredDot color={value} />
      {value}
    </div>
  );
};

const ColorSelect = (props: MaterialUiCreatableProps) => (
  <SingleSelect
    label="Choose a color"
    {...props}
    SelectProps={{
      msgNoOptionsMatchFilter: 'No colors match the filter',
      ...props.SelectProps,
      components: {
        Option: ColoredOption,
        SingleValue: label,
      },
    }}
  />
);

export default ColorSelect;
