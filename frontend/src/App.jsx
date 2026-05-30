import React, { useState } from 'react';
import { 
  User, 
  Code, 
  Briefcase, 
  GraduationCap, 
  FolderOpen, 
  Sparkles, 
  Award, 
  FileText,
  HelpCircle,
  Play
} from 'lucide-react';
import DesktopIcon from './components/DesktopIcon';
import Dashboard from './components/Dashboard';
import Taskbar from './components/Taskbar';
import StartMenu from './components/StartMenu';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDashboardOpen, setIsDashboardOpen] = useState(true);
  const [isDashboardMaximized, setIsDashboardMaximized] = useState(false);
  const [isDashboardMinimized, setIsDashboardMinimized] = useState(false);
  const [isStartOpen, setIsStartOpen] = useState(false);
  const [isShutdown, setIsShutdown] = useState(false);
  const [isBooting, setIsBooting] = useState(false);

  // List of desktop icons linked to portfolio sections
  const desktopIcons = [
    { id: 'personal', label: 'Personal Details - Alex Chen', icon: User, isAvatar: true },
    { id: 'skills', label: 'My Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'extra', label: 'Extra-Curricular Hackathons', icon: Sparkles },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'resume', label: 'Resume.pdf', icon: FileText }
  ];

  const handleIconClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsDashboardOpen(true);
    setIsDashboardMinimized(false);
    setIsStartOpen(false);
  };

  const handleTaskbarDashboardClick = () => {
    if (isDashboardMinimized) {
      setIsDashboardMinimized(false);
    } else {
      setIsDashboardMinimized(true);
    }
  };

  const handlePowerOff = () => {
    setIsStartOpen(false);
    setIsShutdown(true);
    
    // Simulate a restart after 4 seconds
    setTimeout(() => {
      setIsShutdown(false);
      setIsBooting(true);
      setTimeout(() => {
        setIsBooting(false);
        setIsDashboardOpen(true);
        setIsDashboardMinimized(false);
        setActiveSection('home');
      }, 3000);
    }, 4000);
  };

  // Alert actions for standard Windows taskbar buttons
  const showWindowsAlert = (appName) => {
    alert(`Opening ${appName} is disabled. This is a portfolio environment showcasing Alex Chen's profile. Please interact with the Portfolio Dashboard or Resume icons!`);
  };

  // Click handler on the screen background to close windows or overlays (e.g. Start Menu)
  const handleDesktopClick = () => {
    setIsStartOpen(false);
  };

  if (isShutdown) {
    return (
      <div style={{
        height: '100vh',
        width: '100vw',
        background: '#005a9e',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-family)',
        textAlign: 'center',
        padding: '24px'
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          border: '6px solid rgba(255,255,255,0.2)',
          borderTop: '6px solid #fff',
          borderRadius: '50%',
          animation: 'spin 1.5s linear infinite',
          marginBottom: '24px'
        }}></div>
        <h1 style={{ fontSize: '28px', fontWeight: '500', marginBottom: '12px' }}>Restarting</h1>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '14px' }}>Please keep your computer on.</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (isBooting) {
    return (
      <div style={{
        height: '100vh',
        width: '100vw',
        background: '#000',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-family)'
      }}>
        {/* Simple Windows Logo Replication */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '4px',
          width: '64px',
          height: '64px',
          marginBottom: '60px'
        }}>
          <div style={{ background: '#f25022' }}></div>
          <div style={{ background: '#7fba00' }}></div>
          <div style={{ background: '#00a4ef' }}></div>
          <div style={{ background: '#ffb900' }}></div>
        </div>

        <div style={{
          width: '32px',
          height: '32px',
          border: '3.5px solid rgba(255,255,255,0.1)',
          borderTop: '3.5px solid #00a4ef',
          borderRadius: '50%',
          animation: 'spin 1.2s linear infinite'
        }}></div>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="desktop-environment" onClick={handleDesktopClick}>
      {/* Grid of desktop shortcuts */}
      <div className="desktop-grid">
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            id={icon.id}
            label={icon.label}
            icon={icon.icon}
            isAvatar={icon.isAvatar}
            active={isDashboardOpen && !isDashboardMinimized && activeSection === icon.id}
            onClick={() => handleIconClick(icon.id)}
          />
        ))}
      </div>

      {/* Main Portfolio Dashboard Window */}
      {isDashboardOpen && (
        <div style={{ display: isDashboardMinimized ? 'none' : 'block' }}>
          <Dashboard
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            isOpen={isDashboardOpen}
            onClose={() => setIsDashboardOpen(false)}
            isMaximized={isDashboardMaximized}
            toggleMaximize={() => setIsDashboardMaximized(!isDashboardMaximized)}
            onMinimize={() => setIsDashboardMinimized(true)}
          />
        </div>
      )}

      {/* Start Menu Popup */}
      <StartMenu
        isOpen={isStartOpen}
        onClose={() => setIsStartOpen(false)}
        openDashboard={handleIconClick}
        onPowerOff={handlePowerOff}
      />

      {/* Windows bottom Taskbar */}
      <Taskbar
        isDashboardOpen={isDashboardOpen}
        isDashboardMinimized={isDashboardMinimized}
        onStartClick={(e) => {
          e.stopPropagation();
          setIsStartOpen(!isStartOpen);
        }}
        onDashboardTaskbarClick={handleTaskbarDashboardClick}
        onSearchClick={() => showWindowsAlert('Windows Search')}
        onFolderClick={() => showWindowsAlert('File Explorer')}
        onBrowserClick={() => showWindowsAlert('Web Browser')}
        onVSCodeClick={() => showWindowsAlert('VS Code')}
      />
    </div>
  );
}

export default App;
