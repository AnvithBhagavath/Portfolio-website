import React from 'react';
import image from "./image.png";

const DesktopIcon = ({ id, label, icon: IconComponent, isAvatar, avatarUrl, active, onClick }) => {
  return (
    <div 
      className={`desktop-icon ${active ? 'selected' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      title={`Open ${label}`}
    >
      <div className="desktop-icon-img-wrapper">
        {isAvatar ? (
          <>
            <img 
              
              src={image} 
              alt="Alex Chen" 
              className="desktop-icon-avatar"
            />
            <div className="desktop-icon-avatar-badge">
              <IconComponent size={10} color="#fff" />
            </div>
          </>
        ) : (
          <IconComponent size={34} color={active ? '#60a5fa' : '#93c5fd'} />
        )}
      </div>
      <span className="desktop-icon-label">{label}</span>
    </div>
  );
};

export default DesktopIcon;
