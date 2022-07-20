const Profile = () => {
  return (
    <>
      {" "}
      <div className="card p-5 profile-card">
        {/* <div className="upload-img"> */}
        {/* <input
            type="file"
            id="img"
            name="profile_img"
            accept=".img, .jpg, .gif"
          />
          <label for="img" id="uploadbutton"></label> */}
        <img src="/images/profile.png" alt="" className="profile_img" />
        {/* </div> */}
        <p className="text-center ">
          <b>Jagadish Kumar</b>
        </p>
        <p className="text-center ">UI/UX Desiner</p>
        <a href="user-profile" className="text-center edit-profile">
          View Profile
        </a>
      </div>
    </>
  );
};

export default Profile;
