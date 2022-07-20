import { Link, NavLink } from "react-router-dom";
import AccountMenu from "../.././src/Reuseable/AccountMenu";

const Navbar = () => {
  function open() {
    document.getElementById("mySidebar").style.display = "block";
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-4 ">
          {/* <button className="btn-primary" onClick={open}>
              ☰
            </button> */}
          <a className="navbar-brand" href="#/">
            {/* <img src="images/logo.png" alt="" className="Logo-img"  /> */}
            <h1>
              <b>IDEEZ</b>
            </h1>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link  px-4" to="job-post">
                  <i className="fas fa-briefcase mr-3"></i>
                  <b>Jobs</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-4" to="event-post">
                  <i className="fas fa-calendar mr-3"></i>
                  <b>Events</b>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link   px-4" to="user-profile">
                  <i className="fas fa-user mr-3"></i>
                  <b>Profile</b>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link   px-4" to="networking">
                  <i className="fas fa-user mr-3"></i>
                  <b>NetWorking</b>
                </Link>
              </li>
            </ul>
            <div id="panel">
              <div class="username">
                {/* <h5>Jagadish Kumar</h5> */}

                <div id="container-avatar">
                  {/* <div id="badge">12</div> */}
                  <img src="/images/profile.png" />
                  <span class="entypo-menu"></span>

                  <div class="avatar">
                    <ul>
                      <li>
                        <a href="user-profile">
                          <span class="entypo-cog"></span>Profile
                        </a>
                      </li>
                      <li>
                        <a href="/">
                          <span class="entypo-logout"></span>Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
