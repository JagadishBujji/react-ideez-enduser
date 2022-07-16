import Applicant from "../../Reuseable/Applicant";
import Experience from "../../Reuseable/Experience";
import JobFilter from "../../Reuseable/JobFilter";
import JobLocation from "../../Reuseable/JobLocation";
import JobType from "../../Reuseable/JobType";
import Profile from "../../Reuseable/profile/Profile";
import Search from "../../Reuseable/Search/Search";
import JobPostCard from "./JobPostCard";

const JobPosts = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-3 jobsearch">
          <Profile />
        </div>
        <div className="col-md-6 ">
          <h1 className="px-5 py-3 title">Job Post</h1>
          <Search />
          <div className="post-card">
            <JobPostCard />
            <JobPostCard />
            <JobPostCard />
            <JobPostCard />
            <JobPostCard />
            <JobPostCard />
          </div>
        </div>
        <div className="col-md-3 jobsearch">
          <JobFilter />
          <Experience />
          <JobLocation />
          <JobType />
          <Applicant />
        </div>
      </div>
    </>
  );
};

export default JobPosts;
