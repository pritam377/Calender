import React from "react";
import { useNavigate } from "react-router-dom";
import Dashboardfile from "../components/SidebarComponents/DashboardFile";
import Attendancefile from "../components/SidebarComponents/AttendanceFile";
import Projectsfile from "./SidebarComponents/ProjectsFile";
import Ticketsfile from "./SidebarComponents/TicketsFile";
import Worksheetsfile from "./SidebarComponents/WorksheetsFile";
import Financefile from "./SidebarComponents/FinanceFile";
import Organisationfile from "./SidebarComponents/OrganisationFile";
import Performancefile from "./SidebarComponents/PerformanceFile";
import Trainingfile from "./SidebarComponents/TrainingFile";

const SideBar = ({ menu, setMenu }) => {
  const navigation = useNavigate();
  const classBtnName = menu ? "mobile-sidebar-container" : "";
  const classSidebarName = menu ? "mobile-sidebar" : "";
  console.log(menu);
  return (
    <>
      <div className={`sidebar-btn-container ${classBtnName}`}>
        <div className={`sidebar-container ${classSidebarName}`}>
          <Dashboardfile  />
          <Attendancefile  />
          <Projectsfile  />
          <Ticketsfile  />
          <Worksheetsfile />
          <Financefile  />
          <Organisationfile />
          <Performancefile />
          <Trainingfile />
        </div>
        <button id="logout-hrms-btn" onClick={() => navigation("/")}>
          Logout<i class="bx bx-log-out"></i>
        </button>
      </div>
    </>
  );
};

export default SideBar;
