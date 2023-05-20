import React, { useEffect } from "react";
import AxiosInstance from "../axios";

export const AuthContext = React.createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    const TOKEN = localStorage.getItem("jwt_token");
    if (TOKEN !== undefined) {
      setUser(JSON.parse(TOKEN));
    }
  }, []);

  const login = (arg, callback) => {
    AxiosInstance.post("/auth/login", arg)
      .then((res) => {
        console.log(res);
        setUser(res.data);
        if (Object.keys(res.data).length > 0) {
          localStorage.setItem("jwt_token", JSON.stringify(res.data));
        }
        callback();
      })
      .catch((err) => console.log(err));
  };

  //   let signout = (callback) => {
  //     return fakeAuthProvider.signout(() => {
  //       setUser(null);
  //       callback();
  //     });
  //   };

  let value = { user, login };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider };
