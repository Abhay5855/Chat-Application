import React, {useState, useEffect } from "react";
import "./Sidebar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AddIcon from "@material-ui/icons/Add";
import SidebarOption from "./SidebarOption";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CollectionsIcon from '@material-ui/icons/Collections';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import db from '../Firebase';


function Sidebar() {


  const [channels,setChannels] = useState([]);


  useEffect(() => {

    db.collection('rooms').onSnapshot(
      snapshot => {
        console.log(snapshot.docs);
        setChannels(
          snapshot.docs.map(doc=> ({


            id:doc.id,
            name: doc.data().name

          }))
        )
      }
    )


  },[])











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
       

       < SidebarOption Icon={BookmarkBorderIcon} title="Save"  /> 
       < SidebarOption Icon={FavoriteIcon} title="Liked" />
       < SidebarOption Icon={CollectionsIcon} title="Gallery" />
       < SidebarOption Icon={ArrowDropUpIcon} title="Show Less" />
       <hr />
       < SidebarOption Icon={ArrowDropDownIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} addChannelOption title="Add Channels"/>

      
      {
        channels.map((channel) => {
          return (
            < SidebarOption title={channel.name} id={channel.id} />
          )
        })
      }

      
    </div>
  );
}

export default Sidebar;
