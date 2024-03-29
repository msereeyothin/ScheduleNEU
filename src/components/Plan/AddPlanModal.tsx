import React, { useEffect } from "react";
import { Campus, Plan, campusValues } from "../../common/types";
import GenericButton from "../Generic/GenericButton";
import GenericModal from "../Generic/GenericModal";
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
import { termIds, termIdToString, generateID } from "../../common/utils";

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
        id: generateID(),
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
      <GenericButton onClick={handleOpen}>
        <Typography>Add Plan</Typography>
      </GenericButton>
      <GenericModal open={open} onClose={handleClose}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography>Add Plan</Typography>

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
            <Select value={term} label="Term" onChange={handleTermChange}>
              {termIds.map((term) => (
                <MenuItem key={term} value={term}>
                  {termIdToString(term)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="dense">
            <InputLabel>Select Campus</InputLabel>
            <Select value={campus} label="Campus" onChange={handleCampusChange}>
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
              Add Plan
            </GenericButton>
          </Box>
        </Box>
      </GenericModal>
    </>
  );
}

export default AddPlanModal;
