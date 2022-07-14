import { useEffect } from "react";

const Signup = () => {
  const eyeClick = document.querySelector("[data-password]");
  const password_elem = document.getElementById("password");

  useEffect(() => {
    if (eyeClick !== null) {
      eyeClick.onClick = () => {
        const icon = eyeClick.children[0];
        icon.classList.toggle("fa-eye-slash");
        if (password_elem.type === "password") {
          password_elem.type = "text";
        } else if (password_elem.type === "text") {
          password_elem.type = "password";
        }
      };
    }
  }, []);

  return (
    <>
      <div class="container  login">
        <main class="signup-container row">
          <p class="text-mute">START FOR FREE</p>
          <h1 class="heading-primary">
            Create new account<span class="custom-dot">.</span>
          </h1>
          <p class="text-mute">
            Already A Member? <a href="/">Log in</a>
          </p>
          <form class="signup-form">
            <div class="row input-wrapper">
              <label class="inp">
                <input type="text" class="input-text" placeholder="&nbsp;" />
                <span class="label">First name</span>
                <span class="input-icon">
                <i class="fas fa-address-card"></i>
                </span>
              </label>
              <label class="inp mt-4">
                <input type="text" class="input-text" placeholder="&nbsp;" />
                <span class="label">Last name</span>
                <span class="input-icon">
                  <i class="fas fa-address-card"></i>
                </span>
              </label>
              <label class="inp mt-4">
                <input type="email" class="input-text" placeholder="&nbsp;" />
                <span class="label">Email</span>
                <span class="input-icon">
                <i class="far fa-envelope"></i>
                </span>
              </label>
              <label class="inp mt-4">
                <input
                  type="password"
                  class="input-text"
                  placeholder="&nbsp;"
                  id="password"
                />
                <span class="label">Password</span>
                <span class="input-icon input-icon-password" data-password>
                <i class="fas fa-eye"></i>
                </span>
              </label>
              <button class="btn btn-signup w-100 mt-4">Create account</button>
            </div>
          </form>
        </main>
        <div class="welcome-container">
          <h1 class="heading-secondary">
            Welcome to <span class="lg">IDEEZ!</span>
          </h1>
          <img
            src="https://png2.cleanpng.com/sh/82506800d9e08bf14cb0a38d53322fea/L0KzQYm3VsI1N6Rug5H0aYP2gLBuTfxieKV0iJ9taYPzfLLCTfRmfppofZ92dXz3eb7shPliNZ1miOZ4cD3wf7TylgAuPZM3fqNsMEC4RIKAUsQvOmU5SaUBMkm0RYOCWME1OGI7S6Y9NT7zfri=/kisspng-laptop-display-device-multimedia-laptop-mockup-5b2f1c00541724.2441362915298140163445.png"
            alt=""
          />
        </div>
      </div>
      ;
    </>
  );
};

export default Signup;
