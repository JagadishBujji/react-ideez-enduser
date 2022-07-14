const JobLocation = () => {
  return (
    <>
      <div className="card jobfilter ">
        <div className="row job-filter">
          <p className="job"> Job Location</p>
          <a href="/">Clear all</a>
        </div>
        <form className="exper-input" action="/action_page.php">
          <input
            type="checkbox"
            className="mr-2"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label for="vehicle1"> On Site</label>

          {/* search */}
          <form className="joblocation" action="submit">
            <div class="search-container">
              <i class="fa fa-search"></i>
              <input
                type="text"
                name="searchlocation"
                id="searchlocation"
                placeholder="Search Location"
              />
            </div>
            {/* <button className="sea" type="submit">
              Search
            </button> */}
          </form>

          <input
            type="checkbox"
            className="mr-2"
            id="vehicle3"
            name="vehicle3"
            value="Boat"
          />
          <label for="vehicle3"> Remote</label>

          {/* <p>256 jobs</p> */}
          <br />
          <br />
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </div>
    </>
  );
};

export default JobLocation;
