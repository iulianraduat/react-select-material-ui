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

const flavours = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "mocha", label: "Mocha" },
];

const Issue32: React.FC = () => {
  const [singleValue, setSingleValue] = useState(flavours[1].value);
  const [multiValue, setMultiValue] = useState([
    flavours[1].value,
    flavours[2].value,
  ]);

  const clearValue = () => {
    setSingleValue(null);
    setMultiValue([]);
  };

  return (
    <div>
      <div style={styles.link}>
        <a
          href="https://github.com/iulian-radu-at/react-select-material-ui/issues/32"
          target="_blank"
        >
          Issue #32 in Github
        </a>
      </div>

      <div>
        <Button onClick={clearValue} color="primary">
          Clear
        </Button>
      </div>

      <div>
        <ReactSelectMaterialUi
          label="Flavours (single)"
          value={singleValue}
          values={[singleValue]}
          options={flavours}
          SelectProps={{
            isClearable: true,
            isMulti: false,
          }}
          disabled={false}
          onChange={(v: any) => setSingleValue(v)}
          fullWidth={false}
          style={styles.dropdown}
        />

        <ReactSelectMaterialUi
          label="Flavours (multi)"
          value={multiValue?.[0]}
          values={multiValue}
          options={flavours}
          SelectProps={{
            isClearable: true,
            isMulti: true,
          }}
          disabled={false}
          onChange={(v: any) => setMultiValue(v)}
          fullWidth={false}
          style={styles.dropdown}
        />
      </div>
    </div>
  );
};

export default Issue32;
