import React, { useState } from 'react';

const fewOptions = ['Africa', 'America', 'Asia', 'Europe', 'Australia'];
const manyOptions = Array.from(Array(1000), (x, index) => `Option ${index + 1} / 1000`);

const ATDynamicUpdateValuesControlledComponent: React.FC<ATDynamicUpdateValuesControlledComponentProps> = ({
  Comp,
  options,
  useHugeOptionsList,
}) => {
  if (!options) {
    options = useHugeOptionsList ? manyOptions : fewOptions;
  }
  const [form, setForm] = useState({
    selectedOption: options[0],
    selectedOption2: options[1],
  });

  /* simulate update of the options in a controlled mode */
  setTimeout(() => {
    const selectedOption: string = pickRandomOption(options);
    const selectedOption2: string = pickRandomOption(options);
    setForm({ ...form, selectedOption, selectedOption2 });
  }, 500);

  const handleChange = (selectedOption: string) => {
    setForm({ ...form, selectedOption, selectedOption2: null });
  };

  return (
    <Comp
      value={form.selectedOption}
      values={[form.selectedOption, form.selectedOption2]}
      options={options}
      placeholder="Dynamically update of values of a controlled component"
      fullWidth={true}
      onChange={handleChange}
    />
  );
};

let index: number = 0;

const pickRandomOption = (selectOptions: string[]): string => {
  index = (index + 1) % selectOptions.length;
  return selectOptions[index];
};

interface ATDynamicUpdateValuesControlledComponentProps {
  Comp: typeof React.Component | React.FC<any>;
  options?: string[];
  useHugeOptionsList?: boolean;
}

export default ATDynamicUpdateValuesControlledComponent;
