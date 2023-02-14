import React from 'react';
import './ChatHeader.css';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded'
import EditLocationRoundedIcon from '@mui/icons-material/EditLocationRounded'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import HelpRoundedIcon from '@mui/icons-material/HelpRounded'


function ChatHeader() {
  return (
    <div className='chatHeader'>
        <div className="chatHeader__left">
            <h3>
                <span className="chatHeader__hash">#</span>
                test channel name 
            </h3>
        </div>

        <div className="chatHeader__right">
            <NotificationsIcon />
            <EditLocationRoundedIcon />
            <PeopleAltRoundedIcon />

            <div className="chatHeader__search">
                <input placeholder='Search' />
                <SearchRoundedIcon />
            </div>

            <SendRoundedIcon />
            <HelpRoundedIcon />



        </div>
    </div>
  )
}

export default ChatHeader
