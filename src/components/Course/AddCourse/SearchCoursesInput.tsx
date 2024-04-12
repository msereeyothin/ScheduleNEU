import { IconButton, TextField } from "@mui/material";
import {
  Dispatch,
  SetStateAction,
  KeyboardEventHandler,
  useState,
  useEffect,
} from "react";
import React from "react";
import { FormControl, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import _ from "lodash";

interface SearchCoursesInputProps {
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

const debouncedSetSearchQuery = _.debounce((query, setSearchQuery) => {
  setSearchQuery(query);
}, 500);

const SearchCoursesInput: React.FC<SearchCoursesInputProps> = ({
  setSearchQuery,
}) => {
  const [searchKey, setSearchKey] = useState("");


  useEffect(() => {
    debouncedSetSearchQuery(searchKey, setSearchQuery);
    return () => {
      debouncedSetSearchQuery.cancel();
    };
  }, [searchKey, setSearchQuery]);


  const onKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      debouncedSetSearchQuery.cancel();
      setSearchQuery(searchKey);
    }
  };


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKey(e.target.value);
  };


  return (
    <FormControl fullWidth>
      <TextField
        label="Search Course"
        value={searchKey}
        onChange={onChange}
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
