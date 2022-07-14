import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Sidebar/> */}
      <div className="out container-fluid">
        <div className="container pl-5 mb-3">
          <h1>Job Post</h1>
        </div>

        <Outlet />
      </div>
      
    </>
  );
};

export default Home;
