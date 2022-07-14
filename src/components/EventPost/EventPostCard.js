// import ActionAreaCard from "../../Reuseable/ActionAreaCard";
// import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import EventEditModal from "../../Reuseable/EventEditModal"


const EventPostCard = () => {
  return (
    <>
      <div className="row container m-auto">
        <div className="col-md-8">
          <div className="Card jobpost">
            <div className="row">
              <div className="col-md-2">
                <img src="/images/team.png" alt="" className="companylogo" />
              </div>
              <div className="col-md-10 pl-5">
                <div className="edit">
                  <h2>
                    <b>Data Associate, Alexa Shopping</b>
                  </h2>
                  <EventEditModal />
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
                    {/* <Button variant="outlined" className="mr-2">
                      close
                    </Button> */}
                    <Button variant="outlined">Apply</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
};
export default EventPostCard;
