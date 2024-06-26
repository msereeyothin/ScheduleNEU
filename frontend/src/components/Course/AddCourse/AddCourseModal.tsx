import React from "react";
import { Campus, Course } from "../../../utils/types";
import { useSearchCourses } from "../../../hooks/useSearchCourses";
import SearchCoursesInput from "./SearchCoursesInput";
import GenericModal from "../../Generic/GenericModal";
import GenericButton from "../../Generic/GenericButton";
import AddCourseDisplay from "./AddCourseDisplay";
import { alreadyExists } from "../../../utils/utils";
import ClipLoader from "react-spinners/ClipLoader";
import { Typography } from "@mui/material";

interface AddCourseModalProps {
  campus: Campus;
  term: string;
  addCourse: (course: Course) => void;
  existingCourses: Course[];
}

const AddCourseModal: React.FC<AddCourseModalProps> = ({
  campus,
  term,
  addCourse,
  existingCourses,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSearchQuery("");
  };

  const { courses, error, isLoading } = useSearchCourses(
    searchQuery,
    term,
    campus
  );

  return (
    <>
      <GenericButton onClick={handleOpen}>
        <Typography variant="button">Add Course</Typography>
      </GenericButton>
      <GenericModal open={open} onClose={handleClose}>
        <SearchCoursesInput
          setSearchQuery={setSearchQuery}
        ></SearchCoursesInput>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            marginTop: "10px",
          }}
        >
          {isLoading && <ClipLoader size={30} />}
        </div>
        {error && <div>Trouble finding classes!</div>}
        {searchQuery &&
          courses &&
          courses.map((course: Course) => (
            <AddCourseDisplay
              course={course}
              alreadyAdded={alreadyExists(course, existingCourses)}
              addCourse={addCourse}
            ></AddCourseDisplay>
          ))}
      </GenericModal>
    </>
  );
};

export default AddCourseModal;
