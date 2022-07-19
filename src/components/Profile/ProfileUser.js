import EmploymentExperience from "../../Reuseable/profile/EmploymentExperience";
import Resume from "../../Reuseable/profile/Resume";
import Skills from "../../Reuseable/profile/Skills";
import ProfileCard from "./ProfileCard";

const ProfileUser = () => {
  return (
    <>
      <ProfileCard />
      <Resume />
      <Skills />
      <EmploymentExperience />
    </>
  );
};

export default ProfileUser;
