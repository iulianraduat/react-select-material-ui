import MaterialUiCreatable, {
  MaterialUiCreatableProps,
} from '../MaterialUiCreatable';

const MultipleSelect = (props: MaterialUiCreatableProps) => (
  <MaterialUiCreatable
    {...props}
    SelectProps={{
      ...props.SelectProps,
      isMulti: true,
      isClearable: true,
    }}
    fullWidth={true}
  />
);

export default MultipleSelect;
