import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import React from "react";
import { Button } from "@mui/material";
import { CourseNode } from "../../common/types";
import { useSearchCourses } from "../../hooks/useSearchCourses";
import SearchCoursesInput from "./SearchCoursesInput";
import CourseDropdown from "../Course/CourseDropdown";

interface AddCourseModalProps {
  courseList: CourseNode[];
  setCourseList: React.Dispatch<React.SetStateAction<CourseNode[]>>;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  maxHeight: "80vh",
  overflow: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AddCourseModal: React.FC<AddCourseModalProps> = ({
  courseList,
  setCourseList,
}) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSearchQuery("");
  };

  const { courses, error, isLoading } = useSearchCourses(searchQuery, "202430");

  return (
    <div>
      <div className="relative top"></div>
      <Button onClick={handleOpen} variant="contained">
        Add Course
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <SearchCoursesInput
            setSearchQuery={setSearchQuery}
          ></SearchCoursesInput>
          {isLoading && <div>Loading...</div>}
          {error && <div>Trouble finding classes!</div>}
          {courses &&
            courses.map((course: CourseNode) => (
              <CourseDropdown
                courseList={courseList}
                course={course}
                setCourseList={setCourseList}
              ></CourseDropdown>
            ))}
        </Box>
      </Modal>
    </div>
  );
};

export default AddCourseModal;
