import { Link } from "react-router-dom";

const Sidebar = () => {
  function close() {
    document.getElementById("mySidebar").style.display = "none";
  }

  return (
    <>
      <div
        class="sidebar "
        style={{ display: "block" }}
        id="mySidebar"
      >
        <button onClick={close} class="w3-bar-item w3-large">
          Close &times;
        </button>
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link font px-4" to="job-post">
              <i class="fas fa-briefcase mr-3"></i>
              Job Post
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link  about-nav px-4" to="event-post">
              <i class="fas fa-calendar mr-3"></i>
              Event Post
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link   px-4" to="">
              <i class="fas fa-user mr-3"></i>
              profile
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
