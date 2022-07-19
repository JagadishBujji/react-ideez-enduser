import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Divider } from "@mui/material";
import SelectOption from "../SelectOptions/SelectOption";
import SelectPeriod from "../SelectOptions/SelectPeriod";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  p: 4,
  maxHeight: "700px",
  overflowY: "scroll",
};

const apply = {
  background: "#eeb5eb",
  color: "#fff",
  border: "1px solid #eeb5eb",
  fontSize: "14px",
  fontWeight: "800",
  "&:hover": {
    background: "#eeb5eb",
    color: "#fff",
  },
};
const save = {
  background: "#fff",
  color: "#c26dbc",
  border: "1px solid #eeb5eb",
  fontSize: "14px",
  fontWeight: "600",
  "&:hover": {
    border: "1px solid #c26dbc",
    color: "#c26dbc",
  },
};

export default function EducationModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const Add = {
    fontSize: "16px",
    fontWeight: "800",
    color: "#eeb5eb",
    "&:focus": {
      outline: "none",
    },
  };

  const apply = {
    background: "#eeb5eb",
    color: "#fff",
    border: "1px solid #eeb5eb",
    fontSize: "14px",
    fontWeight: "800",
    "&:hover": {
      background: "#eeb5eb",
      color: "#fff",
    },
  };
  const save = {
    background: "#fff",
    color: "#c26dbc",
    border: "1px solid #eeb5eb",
    fontSize: "14px",
    fontWeight: "600",
    "&:hover": {
      border: "1px solid #c26dbc",
      color: "#c26dbc",
    },
  };

  return (
    <div>
      {/* <Button sx={Add} onClick={handleOpen}>
        Add Education
      </Button> */}
      <img
        onClick={handleOpen}
        src="/images/edit-button.png"
        alt=""
        className="profile-edit"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="mb-4">
            <b>Experience</b>
            <Divider />
          </h1>
          {/* <TextField
            type="text"
            fullWidth
            id="outlined-basic"
            label="Current Designation"
            // defaultValue="Normal"
            variant="outlined"
            // size="Normal"
            className="mb-5"
            InputProps={{ style: { fontSize: 16 } }}
            InputLabelProps={{ style: { fontSize: 16 } }}
          /> */}
          <div className="row mb-5">
            <div className="col-12 mb-4">
              <span>Education</span>
            </div>
            <div className="col-12 mb-4">
              <SelectPeriod />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 mb-4">
              <span>Course</span>
            </div>
            <div className="col-12 mb-4">
              <SelectPeriod />
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 mb-4">
              <span>Specialization</span>
            </div>
            <div className="col-12 mb-4">
              <SelectPeriod />
            </div>
          </div>
          <TextField
            type="text"
            fullWidth
            id="outlined-basic"
            label="University/Institute"
            // defaultValue="Normal"
            variant="outlined"
            // size="Normal"
            className="mb-5"
            InputProps={{ style: { fontSize: 16 } }}
            InputLabelProps={{ style: { fontSize: 16 } }}
          />
          <div className="row mb-5">
            <div className="col-12 mb-4">
              <span>Course Type</span>
            </div>
            <div className="col-4">
              <div className="row pl-4">
                <input
                  type="radio"
                  id="full"
                  name="fav_language"
                  value="FULL"
                />
                <label className="mb-0 pl-2" for="full">
                  Full-Time
                </label>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <input
                  type="radio"
                  id="Part"
                  name="fav_language"
                  value="PART"
                />
                <label className="mb-0 pl-2" for="Part">
                  Part-Time
                </label>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <input
                  type="radio"
                  id="Part"
                  name="fav_language"
                  value="PART"
                />
                <label className="mb-0 pl-2" for="Part">
                  FreeLance
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 mb-4">
              <span>Passing Out Year</span>
            </div>
            <div className="col-6">
              <div className="row pl-4">
                <SelectPeriod />
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-12 mb-4">
              <span>Grading System</span>
            </div>
            <div className="col-12 mb-4">
              <SelectPeriod />
            </div>
          </div>
          {/* <SelectPeriod /> */}
          <div className="row btnrow">
            {/* <Button variant="outlined">View Applicant</Button> */}
            <div className="job-button">
              <Button sx={save} variant="outlined" className="mr-2">
                Cancel
              </Button>
              <Button sx={apply} variant="outlined">
                Save
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
