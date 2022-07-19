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
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

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

export default function ExperienceEdit() {
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
        Add Experience
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
          <div className="row delete-edit">
            {" "}
            <h1 className="mb-4">
              <b>Experience</b>
            </h1>
            <IconButton aria-label="delete" size="large">
              <DeleteIcon fontSize="inherit" />
            </IconButton>
          </div>
          <Divider sx={{ mb: 5 }} />
          <TextField
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
          />
          <TextField
            type="text"
            fullWidth
            id="outlined-basic"
            label="Current Company Name"
            // defaultValue="Normal"
            variant="outlined"
            // size="Normal"
            className="mb-5"
            InputProps={{ style: { fontSize: 16 } }}
            InputLabelProps={{ style: { fontSize: 16 } }}
          />
          <div className="row mb-5">
            <div className="col-12 mb-4">
              <span>Is this your current company?</span>
            </div>
            <div className="col-4">
              <div className="row pl-4">
                <input type="radio" id="yes" name="fav_language" value="YES" />
                <label className="mb-0 pl-2" for="yes">
                  Yes
                </label>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <input type="radio" id="no" name="fav_language" value="NO" />
                <label className="mb-0 pl-2" for="no">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 mb-4">
              <span>Joining Date</span>
            </div>
            <div className="col-4">
              <div className="row pl-4">
                <SelectOption />
              </div>
            </div>
            <div className="col-4">
              <div className="row pl-4">
                <SelectOption />
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-12 mb-4">
              <span>Current Annual Salary</span>
            </div>
            <div className="col-4">
              <div className="row pl-4">
                <input
                  type="radio"
                  id="Indian"
                  name="fav_language"
                  value="indian"
                />
                <label className="mb-0 pl-2" for="Indian">
                  Indian Rupees
                </label>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <input
                  type="radio"
                  id="Dollars"
                  name="fav_language"
                  value="dollars"
                />
                <label className="mb-0 pl-2" for="Dollars">
                  Dollars
                </label>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-4">
              <div className="row pl-4">
                <SelectOption />
                {/* 2lac */}
              </div>
            </div>
            <div className="col-4">
              <div className="row pl-4">
                <SelectOption />
                {/* thousand */}
              </div>
            </div>
          </div>
          <TextField
            type="text"
            fullWidth
            id="outlined-basic"
            label="Skills used"
            // defaultValue="Normal"
            variant="outlined"
            // size="Normal"
            className="mb-5"
            InputProps={{ style: { fontSize: 16 } }}
            InputLabelProps={{ style: { fontSize: 16 } }}
          />

          <TextareaAutosize
            aria-label="minimum height"
            placeholder="Job Title"
            minRows={3}
            style={{
              width: 615,
              padding: "10px",
              borderRadius: "5px",
            }}
            fullWidth
            className="mb-5 text-left"
          />
          <div className="row mb-5">
            <div className="col-12 mb-4">
              <span>Joining Date</span>
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
