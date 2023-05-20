import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const LoginPage = () => {
  const [state, setState] = useState({ username: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    login(state, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
    });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    setState({ ...state, [name]: event.target.value });
  };
  return (
    <div className="vh-100  row justify-content-center align-items-center">
      <div className="card col-12 col-md-8 col-lg-5">
        <form className="card-body" autoComplete="off" onSubmit={handleSubmit}>
          <h5 className="card-title text-center mb-4">Login</h5>
          <div className="mb-3 row">
            <label htmlFor="staticusername" className="col-4 col-form-label">
              Username
            </label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                id="staticusername"
                name="username"
                value={state.username}
                onChange={handleChange}
                placeholder="username@example.com"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-4 col-form-label">
              Password
            </label>
            <div className="col-8">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary float-end">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
