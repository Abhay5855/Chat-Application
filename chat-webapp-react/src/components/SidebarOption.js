import React from "react";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom"
import db from "../Firebase";
function SidebarOption({ Icon, title, id, addChannelOption }) {

   
   let history = useHistory();
   const selectChannel = () => {

    if(id) {
      history.push(`/room/${id}`);

    }else {
      history.push(title);
    } 
      
   }

   const addChannel = () => {

    const channelName = prompt("please enter channel name");

    if(channelName){
      db.collection('rooms').add({
        name: channelName
      })
    }

   }















  return (
    <div className="SidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon className="SidebarOption__icon" />}

      {Icon ? <h3>{title}</h3> : <h3>
      <span className="SidebarOption__hash">#</span> {title}
      </h3>}
    </div>
  );
}

export default SidebarOption;
