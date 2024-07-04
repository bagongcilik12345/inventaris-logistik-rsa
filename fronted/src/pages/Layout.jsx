import React from "react";
import Navbar from "../componensts/Navbar";
import Sidebar from "../componensts/Sidebar";

const Layout = ({children}) => {
  return (
    <React.Fragment>
        <Navbar/>
        <div className="columns mt-6" Style={{ minHeight: "100vh" }}>
            <div className="colum is-2">
              <Sidebar />
              </div>
            <div className="column has-background-lignt">
                <main>{children}</main>
            </div>
        </div>
    </React.Fragment>
  );
}

export default Layout;