// import ActionAreaCard from "../../Reuseable/ActionAreaCard";
// import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import EditModal from "../../Reuseable/EditModal";

const JobPostCard = () => {
  const apply = {
    background: "#eeb5eb",
    color: "#fff",
    border: "1px solid #eeb5eb",
    fontSize: "14px",
    // "&:hover": {
    //   border: "1px solid #eeb5eb",
    //   color: "#eeb5eb",
    // },
  };
  const save = {
    background: "#fff",
    color: "#c26dbc",
    border: "1px solid #eeb5eb",
    fontSize: "14px",
    "&:hover": {
      border: "1px solid #c26dbc",
      color: "#c26dbc",
    },
  };
  return (
    <>
      <div className="row container-fluid m-auto">
        <div className="Card jobpost">
          <div className="row">
            <div className="col-md-3">
              <img src="/images/team.png" alt="" className="companylogo" />
            </div>
            <div className="col-md-9 pl-5">
              <div className="edit">
                <h2>
                  <b>Data Associate, Alexa Shopping</b>
                </h2>
                {/* <EditModal /> */}
              </div>
              <p>tech solution</p>
              <div className="row">
                <div className="col-4">0-2 Years</div>
                <div className="col-8">Chennai</div>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <p>1.5 to 2.5 PA</p>
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
export default JobPostCard;
