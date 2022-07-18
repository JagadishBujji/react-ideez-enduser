const Profile = () => {
  return (
    <>
      {" "}
      <div className="card p-5 profile-card">
        <img src="/images/profile.png" alt="" className="profile_img" />
        <p className="text-center ">
          <b>Jagadish Kumar</b>
        </p>
        <p className="text-center ">UI/UX Desiner</p>
        <a href="user-profile" className="text-center edit-profile">
          Edit Profile
        </a>
      </div>
    </>
  );
};

export default Profile;
