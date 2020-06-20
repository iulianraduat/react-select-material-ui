import React, { useState } from "react";
import ReactSelectMaterialUi from "../src/ReactSelectMaterialUi";
import { Button } from "@material-ui/core";

const styles: { [key: string]: React.CSSProperties } = {
  dropdown: {
    margin: 10,
    width: "40%",
  },
  link: {
    marginLeft: 20,
    marginBottom: 20,
  },
};

const options: string[] = ["Option 1", "Option 2", "Option 3"];

const Issue37: React.FC = () => {
  const [singleValue, setSingleValue] = useState();
  const [multiValue, setMultiValue] = useState();

  const clearValue = () => {
    setSingleValue(undefined);
    setMultiValue(undefined);
  };

  return (
    <div>
      <div style={styles.link}>
        <a
          href="https://github.com/iulian-radu-at/react-select-material-ui/issues/37"
          target="_blank"
        >
          Issue #37 in Github
        </a>
      </div>

      <div>
        <Button onClick={clearValue} color="primary">
          Clear
        </Button>
      </div>

      <div>
        <ReactSelectMaterialUi
          label="SingleSelect with prop value set to a value not matching an option"
          helperText="Add a new option to see if it is ignored when the options do not include it"
          options={options}
          value={singleValue ? "missing option" : null}
          SelectProps={{
            isCreatable: true,
            isClearable: true,
            isSearchable: true,
          }}
          onChange={(v: any) => setSingleValue(v)}
          fullWidth={true}
        />
        <ReactSelectMaterialUi
          label="MultipleSelect with prop value set to a value not matching an option"
          helperText="Add a new option to see if it is ignored when the options do not include it"
          options={options}
          values={multiValue ? ["missing option"] : null}
          SelectProps={{
            isMulti: true,
            isCreatable: true,
            isClearable: true,
            isSearchable: true,
          }}
          onChange={(v: any) => setMultiValue(v)}
          fullWidth={true}
        />
      </div>
    </div>
  );
};

export default Issue37;
