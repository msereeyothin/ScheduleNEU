import React, { useEffect } from "react";
import { Campus, Plan, campusValues } from "../../common/types";
import GenericButton from "../Generic/GenericButton";
import GenericModal from "../Generic/GenericModal";
import { useTermInfos } from "../../hooks/useTermInfos";
import {
  Typography,
  Box,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { generateID } from "../../common/utils";

interface AddPlanModalProps {
  addPlan: (newPlan: Plan) => void;
  setPlan: (newPlan: Plan) => void;
}

function AddPlanModal({ addPlan, setPlan }: AddPlanModalProps) {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [term, setTerm] = React.useState("");
  const [campus, setCampus] = React.useState<Campus>();
  const [valid, setValid] = React.useState(false);
  const { termInfos, isLoading, error } = useTermInfos();
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const handleTermChange = (event: SelectChangeEvent) => {
    setTerm(event.target.value as string);
  };

  const handleCampusChange = (event: SelectChangeEvent) => {
    setCampus(event.target.value as Campus);
  };

  useEffect(() => {
    if (name !== "" && term !== "" && campus) {
      setValid(true);
    } else {
      setValid(false);
    }
  }, [name, term, campus]);

  const handleAddPlan = () => {
    if (campus) {
      const newPlan = {
        _id: generateID(),
        name: name,
        term: term,
        isEmpty: false,
        campus: campus,
        courses: [],
        sections: [],
      };
      addPlan(newPlan);
      setPlan(newPlan);
    }
    setName("");
    setTerm("");
    setCampus(undefined);
  };

  return (
    <>
      <GenericButton onClick={handleOpen}>Add Plan</GenericButton>
      <GenericModal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography variant="subtitle1">Add a new plan</Typography>

          <TextField
            margin="dense"
            type="text"
            placeholder="Plan Name"
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setName(event.target.value);
            }}
            fullWidth
          ></TextField>

          <FormControl fullWidth margin="dense">
            <InputLabel>Select Term</InputLabel>
            <Select
              value={term}
              label="Select Term"
              onChange={handleTermChange}
            >
              {isLoading ? (
                <MenuItem disabled>Loading...</MenuItem>
              ) : error ? (
                <MenuItem disabled>Error fetching terms</MenuItem>
              ) : termInfos.length === 0 ? (
                <MenuItem disabled>Empty terms returned</MenuItem>
              ) : (
                termInfos.map(({ termId, text }) => (
                  <MenuItem key={termId} value={termId}>
                    {text}
                  </MenuItem>
                ))
              )}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel>Select Campus</InputLabel>
            <Select
              value={campus}
              label={"Select Campus"}
              onChange={handleCampusChange}
            >
              {campusValues.map((campus) => (
                <MenuItem key={campus} value={campus}>
                  {campus}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box sx={{ paddingTop: 1 }}>
            <GenericButton
              disabled={!valid}
              onClick={() => {
                handleClose();
                handleAddPlan();
              }}
            >
              <Typography variant="button">Add Plan</Typography>
            </GenericButton>
          </Box>
        </Box>
      </GenericModal>
    </>
  );
}

export default AddPlanModal;
