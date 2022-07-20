const Search = () => {
  return (
    <>
      <div className="container-fluid search px-2 py-2">
        {/* <h2>Search Jobs</h2> */}
        <section>
          <form className="form" action="submit">
            {/* <label class="head-jobs" for="search">
                  Jobs
                  <br /> Search?
                </label> */}
            <div class="search-container">
              <i class="fa fa-search"></i>
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search Jobs...."
              />
            </div>
            <button className="sea" type="submit">
              Search
            </button>
          </form>
        </section>
        {/* <p>55 jobs</p> */}
      </div>
    </>
  );
};

export default Search;
