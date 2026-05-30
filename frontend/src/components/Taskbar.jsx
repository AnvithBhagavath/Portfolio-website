import React, { useState, useEffect } from 'react';
import { 
  Wifi, 
  Volume2, 
  Battery, 
  Search, 
  Folder, 
  Globe, 
  Terminal,
  Monitor
} from 'lucide-react';

const Taskbar = ({ 
  isDashboardOpen, 
  isDashboardMinimized, 
  onStartClick, 
  onDashboardTaskbarClick,
  onSearchClick,
  onFolderClick,
  onBrowserClick,
  onVSCodeClick
}) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  };

  const formatDate = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}/${year}`;
  };

  return (
    <div className="taskbar">
      {/* Start Button & Search - Left Spacer */}
      <div style={{ width: '120px' }}></div>

      {/* Taskbar Icons Centered */}
      <div className="taskbar-center">
        {/* Start Logo */}
        <button 
          className="taskbar-btn" 
          onClick={onStartClick} 
          title="Start"
        >
          {/* Replicating Windows 11 blue/cyan logo grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2px',
            width: '18px',
            height: '18px'
          }}>
            <div style={{ background: '#00adef', borderRadius: '1px' }}></div>
            <div style={{ background: '#00adef', borderRadius: '1px' }}></div>
            <div style={{ background: '#00adef', borderRadius: '1px' }}></div>
            <div style={{ background: '#00adef', borderRadius: '1px' }}></div>
          </div>
        </button>

        {/* Search */}
        <button className="taskbar-btn" onClick={onSearchClick} title="Search">
          <Search size={18} color="#f3f4f6" />
        </button>

        {/* File Explorer / Folders */}
        <button className="taskbar-btn" onClick={onFolderClick} title="File Explorer">
          <Folder size={18} color="#fbc02d" />
        </button>

        {/* Chrome / Browser */}
        <button className="taskbar-btn" onClick={onBrowserClick} title="Web Browser">
          <Globe size={18} color="#4caf50" />
        </button>

        {/* Terminal / VS Code */}
        <button className="taskbar-btn" onClick={onVSCodeClick} title="VS Code">
          <Terminal size={18} color="#007acc" />
        </button>

        {/* Dashboard Instance (Indicates active/open state with badge and underline) */}
        {isDashboardOpen && (
          <button 
            className={`taskbar-btn ${!isDashboardMinimized ? 'active' : ''}`}
            onClick={onDashboardTaskbarClick}
            title="Portfolio Dashboard"
          >
            <Monitor size={18} color="#60a5fa" />
          </button>
        )}
      </div>

      {/* System Tray (Clock & Control Center indicators) */}
      <div className="system-tray">
        <div className="tray-icons">
          <Wifi size={14} />
          <Volume2 size={14} />
          <Battery size={14} />
        </div>
        
        <div className="tray-clock" title={time.toLocaleDateString()}>
          <span>{formatTime(time)}</span>
          <span>{formatDate(time)}</span>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
