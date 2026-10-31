import React from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";

function UserLayout(props) {
  return (
    <div>
      {/* header */}
      <Header />
      
      {/* main section */}
      <main>
        <Outlet />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}

export default UserLayout;
