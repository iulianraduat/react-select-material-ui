import React, { useState } from 'react';
import ReactSelectMaterialUi from '../src/ReactSelectMaterialUi';

const ATDynamicUpdateValuesControlledComponent: React.FC = () => {
  const [form, setForm] = useState({ selectedOption: 'America' });

  const options = ['Africa', 'America', 'Asia', 'Europe', 'Australia'];

  /* simulate update of the options in a controlled mode */
  setTimeout(() => {
    const selectedOption: string = pickRandomOption(options);
    console.log({ selectedOption });
    setForm({ ...form, selectedOption });
  }, 500);

  const handleChange = (selectedOption:string) => {
    setForm({ ...form, selectedOption });
  };

  return (
    <ReactSelectMaterialUi
      value={form.selectedOption}
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

export default ATDynamicUpdateValuesControlledComponent;
