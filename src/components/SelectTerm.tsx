import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
  MenuItem,
} from "@mui/material";
import { termIdToString } from "../common/utils";

interface SelectTermProps {
  termIds: string[];
  currentSelection: string;
  handleChange: (term: string) => void;
}

const SelectTerm: React.FC<SelectTermProps> = ({
  termIds,
  currentSelection,
  handleChange,
}) => {
  const handleLocalChange = (event: SelectChangeEvent) => {
    const newSelection = event.target.value as string;
    handleChange(newSelection);
    console.log(newSelection);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Select Term</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={currentSelection}
        label="Age"
        onChange={handleLocalChange}
      >
        {termIds.map((term) => (
          <MenuItem key={term} value={term}>
            {termIdToString(term)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectTerm;
