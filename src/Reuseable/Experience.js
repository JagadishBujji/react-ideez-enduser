const Experience = () => {
  return (
    <>
      <div className="card jobfilter ">
        <div className="row job-filter">
          <p className="job"> Experience</p>
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
          <label for="vehicle1"> Entry Level</label>
          <br />
          <input
            type="checkbox"
            className="mr-2"
            id="vehicle2"
            name="vehicle2"
            value="Car"
          />
          <label for="vehicle2"> Intermediate</label>
          <br />

          <input
            type="checkbox"
            className="mr-2"
            id="vehicle3"
            name="vehicle3"
            value="Boat"
          />
          <label for="vehicle3"> Expert</label>

          {/* <p>256 jobs</p> */}
          <br />
          <br />
          {/* <input type="submit" value="Submit" /> */}
        </form>
      </div>
    </>
  );
};

export default Experience;
