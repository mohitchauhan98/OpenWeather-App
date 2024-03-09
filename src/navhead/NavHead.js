import React from 'react'
import './NavHead.css'
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import WifiIcon from '@mui/icons-material/Wifi';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';

const NavHead = ({color}) => {
    return (
        <nav>
          <div className='nav-box'>
            <div><span className='nav-time' style={{ color }}>9.41</span></div>
            <div className='nav-icons'>
              <span><SignalCellularAltIcon style={{ color }}/></span>
              <span><WifiIcon style={{ color }}/></span>
              <span className='battery'><BatteryFullIcon style={{ color }}/></span>
            </div>
          </div>
        </nav>
    )
  }
  
  export default NavHead;
  