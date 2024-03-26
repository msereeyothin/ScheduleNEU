import Box from "@mui/material/Box";
import React from "react";
import { Campus, Course } from "../../../common/types";
import { useSearchCourses } from "../../../hooks/useSearchCourses";
import SearchCoursesInput from "./SearchCoursesInput";
import GenericModal from "../../Generic/GenericModal";
import GenericButton from "../../Generic/GenericButton";
import AddCourseDisplay from "./AddCourseDisplay";
import { alreadyExists } from "../../../common/utils";

interface AddCourseModalProps {
  addedCourses: Course[];
  setAddedCourses: React.Dispatch<React.SetStateAction<Course[]>>;
  campus: Campus;
  term: string;
}

const AddCourseModal: React.FC<AddCourseModalProps> = ({
  addedCourses,
  setAddedCourses,
  campus,
  term,
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

  const addCourseToCourses = (course: Course) => {
    setAddedCourses((prevCourses) => [...prevCourses, course]);
  };

  return (
    <>
      <GenericButton onClick={handleOpen}>Add Course</GenericButton>
      <GenericModal open={open} onClose={handleClose}>
        <SearchCoursesInput
          setSearchQuery={setSearchQuery}
        ></SearchCoursesInput>
        {isLoading && <div>Loading...</div>}
        {error && <div>Trouble finding classes!</div>}
        {courses &&
          courses.map((course: Course) => (
            <AddCourseDisplay
              course={course}
              alreadyAdded={alreadyExists(course, addedCourses)}
              setCourseList={() => addCourseToCourses(course)}
            ></AddCourseDisplay>
          ))}
      </GenericModal>
    </>
  );
};

export default AddCourseModal;
