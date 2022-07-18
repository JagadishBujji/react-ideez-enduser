import { Link } from "react-router-dom";
import AccountMenu from "../.././src/Reuseable/AccountMenu";

const Navbar = () => {
  function open() {
    document.getElementById("mySidebar").style.display = "block";
  }

  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light fixed-top py-4 ">
          {/* <button class="btn-primary" onClick={open}>
              ☰
            </button> */}
          <a class="navbar-brand" href="#/">
            {/* <img src="images/logo.png" alt="" class="Logo-img"  /> */}
            <h1>
              <b>IDEEZ</b>
            </h1>
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link class="nav-link font px-4" to="job-post">
                  <i class="fas fa-briefcase mr-3"></i>
                  <b>Jobs</b>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link  about-nav px-4" to="event-post">
                  <i class="fas fa-calendar mr-3"></i>
                  <b>Events</b>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link   px-4" to="user-profile">
                  <i class="fas fa-user mr-3"></i>
                  <b>Profile</b>
                </Link>
              </li>
            </ul>
            <div className="row nav-all">
              <AccountMenu />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
