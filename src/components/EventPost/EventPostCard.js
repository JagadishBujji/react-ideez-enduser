// import ActionAreaCard from "../../Reuseable/ActionAreaCard";
// import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
// import EventEditModal from "../../Reuseable/EventEditModal";

const EventPostCard = () => {
  const apply = {
    background: "#eeb5eb",
    color: "#fff",
    border: "1px solid #eeb5eb",
    fontSize: "14px",
    fontWeight: "600",
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
    <>
      <div className="row container m-auto p-0">
        <div className="Card jobpost">
          <div className="row">
            <div className="col-md-3">
              <img src="/images/team.png" alt="" className="companylogo" />
            </div>
            <div className="col-md-9 pl-5">
              <div className="edit">
                <h2>
                  <b>Event Planning Program</b>
                </h2>
                {/* <EventEditModal /> */}
              </div>
              <p className="m-0">TCS Technologien</p>
              <div className="row">
                <div className="col-4">21st Aug 2022</div>
                <div className="col-8">Chennai</div>
              </div>
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              <p>Rs.2000</p>
              <Divider />
              <br />
              <div className="row btnrow">
                {/* <Button variant="outlined">View Applicant</Button> */}
                <div className="job-button">
                  <Button sx={save} variant="outlined" className="mr-2">
                    Save
                  </Button>
                  <Button sx={apply} variant="outlined">
                    Apply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EventPostCard;
