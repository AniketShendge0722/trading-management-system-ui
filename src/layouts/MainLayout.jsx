import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const MainLayout = ({children}) => {

 return (

  <div
    style={{
      display:"flex"
    }}>

    <Sidebar />

    <div
      style={{
        flex:1,
        marginLeft:240
      }}>

      <Navbar />

      <div
        style={{
          padding:20
        }}>

        {children}

      </div>

    </div>

  </div>
 );
};

export default MainLayout;