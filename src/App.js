import "./styles.css";
// import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import JobPosts from "./components/jobpost/JobPosts";
import EventPosts from "./components/EventPost/EventPosts";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="/recruiter" element={<Home />}>
          <Route path="job-post" element={<JobPosts />} />
          <Route path="event-post" element={<EventPosts />} />
        </Route>
      </Routes>
    </div>
  );
}
