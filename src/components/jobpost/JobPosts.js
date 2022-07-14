import Experience from "../../Reuseable/Experience";
import JobFilter from "../../Reuseable/JobFilter";
import JobLocation from "../../Reuseable/JobLocation";
import JobPostCard from "./JobPostCard";

const JobPosts = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6 post-card">
          <h1 className="px-5 py-3">Job Post</h1>
          <div className="container-fluid search px-5 py-5">
            <h2>Search Jobs</h2>
            <section>
              <form className="form" action="submit">
                <label class="head-jobs" for="search">
                  Jobs
                  <br /> Search?
                </label>
                <div class="search-container">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="skills, Companies...."
                  />
                </div>
                <button className="sea" type="submit">
                  Search
                </button>
              </form>
            </section>
            {/* <p>55 jobs</p> */}
          </div>
          <JobPostCard />
          <JobPostCard />
          <JobPostCard />
          <JobPostCard />
          <JobPostCard />
          <JobPostCard />
        </div>
        <div className="col-md-3 mt-5">
          <JobFilter />
          <Experience />
          <JobLocation />
        </div>
      </div>
    </>
  );
};

export default JobPosts;
