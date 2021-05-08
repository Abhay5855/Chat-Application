import React from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AddIcon from "@material-ui/icons/Add";
import HomeIcon from "@material-ui/icons/Home";
import CreateIcon from '@material-ui/icons/Create';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
       
        <div className="sidebar__info">

         <h2>Abhay Patil</h2>
        
          <h3>
            <FiberManualRecordIcon />
          
            Abhay patil
          </h3>

         
          

        </div>
      
      </div>

      <div className="sidebar__addchannels">
        {/* <ArrowDropDownIcon /> */}
        {/* Channnel */}
        {/* <h3>Channels</h3> */}

        {/* Addicon */}

        {/* < AddIcon /> */}
      </div>

      <div className="sidebar__channels">
        {/* <HomeIcon />
            <h4>React Help</h4> */}
      </div>
    </div>
  );
}

export default Sidebar;
