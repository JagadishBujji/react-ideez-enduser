import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { Divider } from "@mui/material";

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

export default function ProfileEditModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
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
            <b>Profile Edit</b>
            <Divider />
          </h1>
          <TextField
            type="text"
            fullWidth
            id="outlined-basic"
            label="Name"
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
            label="Location"
            // defaultValue="Normal"
            variant="outlined"
            // size="Normal"
            className="mb-5"
            InputProps={{ style: { fontSize: 16 } }}
            InputLabelProps={{ style: { fontSize: 16 } }}
          />
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Description"
            style={{ width: 634, padding: 10 }}
            className="mb-5"
          />
          <TextField
            type="email"
            fullWidth
            id="outlined-basic"
            label="Email"
            // defaultValue="Normal"
            variant="outlined"
            // size="Normal"
            className="mb-5"
            InputProps={{ style: { fontSize: 16 } }}
            InputLabelProps={{ style: { fontSize: 16 } }}
          />
          <TextField
            type="tel"
            fullWidth
            id="outlined-basic"
            label="Phone"
            // defaultValue="Normal"
            variant="outlined"
            // size="Normal"
            className="mb-5"
            InputProps={{ style: { fontSize: 16 } }}
            InputLabelProps={{ style: { fontSize: 16 } }}
          />

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
