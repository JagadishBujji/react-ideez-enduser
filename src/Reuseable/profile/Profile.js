const Profile = () => {
  return (
    <>
      {" "}
      <div className="card p-5 profile-card">
        <img src="/images/profile.png" alt="" className="profile_img" />
        <p className="text-center ">Jagadish Kumar</p>
        <p className="text-center ">UI/UX Desiner</p>
        <a href="" className="text-center edit-profile">
          Edit Profile
        </a>
      </div>
    </>
  );
};

export default Profile;
