import { IconButton, TextField } from "@mui/material";
import {
  Dispatch,
  SetStateAction,
  KeyboardEventHandler,
  useState,
} from "react";
import React from "react";
import { FormControl, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchCoursesInputProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const SearchCoursesInput: React.FC<SearchCoursesInputProps> = ({
  setSearchQuery,
}) => {
  const [searchKey, setSearchKey] = useState("");

  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      setSearchQuery(searchKey);
    }
  };

  return (
    <FormControl fullWidth>
      <TextField
        label="Search Course"
        value={searchKey}
        onChange={(e) => {
          setSearchKey(e.target.value);
        }}
        onKeyDown={onKeyDown}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setSearchQuery(searchKey)}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
};

export default SearchCoursesInput;
