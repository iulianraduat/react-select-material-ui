import React, { useState } from "react";
import ReactSelectMaterialUi from "../src/ReactSelectMaterialUi";
import { Button } from "@material-ui/core";

const styles: { [key: string]: React.CSSProperties } = {
  dropdown: {
    margin: 10,
    width: "40%"
  }
};

const flavours = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "mocha", label: "Mocha" }
];

interface ClearValuesProps {
  disabled: boolean;
}

const ClearValues: React.FC<ClearValuesProps> = ({ disabled }) => {
  const [singleValue, setSingleValue] = useState(flavours[1].value);
  const [multiValue, setMultiValue] = useState([
    flavours[1].value,
    flavours[2].value
  ]);

  const clearValue = () => {
    setSingleValue(null);
    setMultiValue([]);
  };

  return (
    <div>
      <div>
        <Button onClick={clearValue} color="primary">
          Clear
        </Button>
      </div>

      <div>
        <ReactSelectMaterialUi
          label="Flavours (single)"
          value={singleValue}
          options={flavours}
          SelectProps={{
            isClearable: true,
            isMulti: false
          }}
          disabled={disabled}
          onChange={(v: any) => setSingleValue(v)}
          fullWidth={false}
          style={styles.dropdown}
        />

        <ReactSelectMaterialUi
          label="Flavours (multi)"
          values={multiValue}
          options={flavours}
          SelectProps={{
            isClearable: true,
            isMulti: true
          }}
          disabled={disabled}
          onChange={(v: any) => setMultiValue(v)}
          fullWidth={false}
          style={styles.dropdown}
        />
      </div>
    </div>
  );
};

export default ClearValues;
