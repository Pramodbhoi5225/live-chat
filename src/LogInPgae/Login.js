import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Login = () => {
  return (
    <section>
      <div className="main-app">
        <div className="container">
          <h1>SignIn</h1>

          <div>
            <button type="button" class="btn btn-link btn-floating mx-1 ">
              <i class="fa-brands fa-square-facebook"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fa-brands fa-linkedin"></i>
            </button>
          </div>

          <div>
            <p>Or Use Your Account</p>
          </div>

          <form>
            {/* <!-- Email input --> */}
            <div class="form-outline mb-4">
              <input
                type="email"
                id="form2Example1"
                class="form-control"
                placeholder="Email address"
              />
            </div>

            {/* <!-- Password input --> */}
            <div class="form-outline mb-4">
              <input
                type="password"
                id="form2Example2"
                class="form-control"
                placeholder="Password"
              />
            </div>

            <div class="text-center">
              <p>Forgot Password ? </p>
            </div>

            <div>
              <button class="btn btn-danger" type="signin">
                SignIn
              </button>
            </div>
          </form>
        </div>

        <div></div>
      </div>

      <div>
        <div className="main-app1">
          <div className="container">
            <h1 className="inner">Hello Friend</h1>

            <p className="para">Enter Your Personal detaails And Start journey with us</p>
          </div>

          <div>
              <button class="btn btn-danger" type="signin" className="btn2">
                SignUp
              </button>
            </div>

        
        </div>
      </div>
    </section>
  );
};

export default Login;
