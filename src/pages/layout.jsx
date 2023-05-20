import { Outlet } from "react-router-dom";
import Footer from "../core/footer";
import Header from "../core/header";

const Layout = () => (
  <div className="container-fluid">
    <Header />
    <div className="container">
      <Outlet />
    </div>
    <Footer />
  </div>
);

export default Layout;
