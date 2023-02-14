import React from 'react'
import "./Sidebar.css";
import SidebarChannel from './SidebarChannel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import CallIcon from '@mui/icons-material/Call'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { Avatar } from '@mui/material';
import MicIcon from '@mui/icons-material/Mic'
import HeadsetIcon from '@mui/icons-material/Headset'
import SettingsIcon from '@mui/icons-material/Settings'
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';

function Sidebar() {
    const user = useSelector(selectUser);

  return (
    <div className="sidebar">;
      <div className="sidebar__top">
          <h3> Clever Programmer</h3>
          <ExpandMoreIcon />
        </div>

      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />          
            <h4>Text Channel</h4>
          </div>

          <AddIcon className="sidebar__addChannel"/> 
        </div>
        

        <div className="sidebar__channelsList">
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
        <SidebarChannel />
      </div>
      </div>

        <div className="sidebar__voice">
          <SignalCellularAltIcon classname="sidebar__voiceIcon" fontSize="large"
          />
          <div className="sidebar__voiceInfo">
            <h3>Voice Connected</h3>
            <p>Stream</p>
          </div>

          <div className="sidebar__voiceIcons">
            <InfoOutlinedIcon/>
            <CallIcon/>
          </div>
        </div>

        {/* avatar code fucked up*/}
        <div className="sidebar__profile">
          {/* <Avatar onClick=(() = auth.signOut()) src={user.photo}/> */}
          <div className="sidebar__profileInfo">
            <p>#{user.uid.substring(0, 5)}</p>
            <h3>{user.displayName}</h3>
          </div>

          <div className="sidebar__profileIcons">
            <MicIcon />
            <HeadsetIcon />
            <SettingsIcon />
          </div>
        </div>
      </div>
  );
}

export default Sidebar;


//2:16:13 / 2:53:38 on the video 