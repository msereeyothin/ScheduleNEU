import React from "react";
import SelectTerm from "../components/SelectTerm";

const termIds = ["2023", "2024"]
  .map((year) => [
    `${year}10`,
    `${year}30`,
    `${year}40`,
    `${year}50`,
    `${year}60`,
  ])
  .flat();

const SchedulePage = () => {
  const [selectedTerm, setSelectedTerm] = React.useState("");

  return (
    <SelectTerm
      termIds={termIds}
      currentSelection={selectedTerm}
      handleChange={setSelectedTerm}
    ></SelectTerm>
  );
};

export default SchedulePage;
