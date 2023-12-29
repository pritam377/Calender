import "./App.css";
import Calender from "../src/components/Calender";
import EventList from "./components/EventList";
import React, { useEffect } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import "./styles.css";

function App() {
  return (
    <div>
      <div id="header-container" className="header-container">
        {/* <CompanyLogoFile /> */}
        <Header />
      </div>
      <div className="dashboard-container">
        <SideBar />
        <div className="head-foot-part" >
          <div style={{ display: "flex" }} >
            <div className="events-list-cal"  >
           <EventList/>
            
            </div>
            <Calender />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
