import { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const AVATAR = {
  height: "30px",
  width: " 30px",
  borderRadius: "50%",
  backgroundColor: " rgb(255, 255, 255)",
  textAlign: "center",
};

const Header = () => {
  const { user } = useContext(AuthContext);
  const { totalProducts } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  return (
    <div className="row bg-primary align-items-center">
      <div
        role="button"
        className="col-md-3 d-flex justify-content-center align-items-center p-3"
        onClick={() => navigate("/")}
      >
        <h4 className="text-light">Co</h4>
        <h4 className="text-warning">mart</h4>
      </div>
      <div className="col-md-5">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="search_productFilter"
            placeholder="search"
          />
          <span className="input-group-text material-icons">search</span>
        </div>
      </div>
      <div className="col-md-4 d-flex justify-content-center align-items-center">
        {!user ? (
          <button
            type="button"
            className="btn btn-sm btn-light me-5"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        ) : (
          <>
            <div
              role="button"
              className="d-flex text-light align-items-center me-5 dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div style={AVATAR} className="me-2">
                <img
                  src="https://robohash.org/autquiaut.png?size=50x50&set=set1"
                  alt="kminchelle"
                  width="25"
                  style={{ borderRadius: "50%" }}
                />
              </div>
              <div className=" ">
                <small>Hi kminchelle</small>
                <small className="d-block">Account</small>
              </div>
            </div>
            <ul className="dropdown-menu ">
              <li className="dropdown-item">Profile</li>
              <li className="dropdown-item">About us</li>
              <hr className="dropdown-divider" />
              <li className="dropdown-item">Logout</li>
            </ul>
          </>
        )}
        <span role="button" className="material-icons text-light me-5">
          favorite
        </span>
        <div
          role="button"
          onClick={() => navigate("/cart")}
          className="position-relative"
        >
          <span className="material-icons text-light ">shopping_cart</span>
          {totalProducts !== 0 && (
            <span className="position-absolute fs-6 px-2 top-0 start-100 translate-middle text-dark bg-warning border border-light rounded-circle">
              {totalProducts}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
