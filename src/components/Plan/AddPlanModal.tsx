import React, { useEffect, useState } from "react";
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
// import { termIds, termIdToString, generateID } from "../../common/utils";
import { termIdToString, generateID } from "../../common/utils";
import { SearchAPI } from "../../api/search.api";

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
  const [fetchedTermIds, setFetchedTermIds] = useState([]);
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

  // useEffect hook to fetch term information from the API
  useEffect(() => {
    const subCollege = "NEU";
    const fetchTermInfos = async () => {
      try {
        let termInfos = await SearchAPI.fetchTermInfos(subCollege);
        // only display first 10 terms
        termInfos = termInfos.slice(0, 10);
        setFetchedTermIds(termInfos);
        if (termInfos.length > 0) {
          setTerm(termInfos[0].termId);// Defaults to the first term
        }
      } catch (error) {
        console.error("Failed to fetch term infos", error);
      }
    };

    fetchTermInfos();
  }, []);


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
              {fetchedTermIds.map(({ termId, text }) => (
                <MenuItem key={termId} value={termId}>
                  {text} {/* Uses text from the API*/}
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
