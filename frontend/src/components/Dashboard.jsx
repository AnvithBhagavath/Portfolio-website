import React from 'react';
import image from "./image.png";

import { 
  Minus, 
  Square, 
  X, 
  Mail, 
  MapPin, 
  ExternalLink,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  Sparkles,
  User,
  Info,
  Calendar,
  FileText
} from 'lucide-react';
import ResumeManager from './ResumeManager';

const Github = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 24} height={props.size || 24} fill="currentColor" {...props}>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const Linkedin = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 24} height={props.size || 24} fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const Monitor = (props) => (
  <svg viewBox="0 0 24 24" width={props.size || 24} height={props.size || 24} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="14" x="2" y="3" rx="2"/>
    <line x1="8" x2="16" y1="21" y2="21"/>
    <line x1="12" x2="12" y1="17" y2="21"/>
  </svg>
);

const Dashboard = ({ 
  activeSection, 
  setActiveSection, 
  isOpen, 
  onClose, 
  isMaximized, 
  toggleMaximize, 
  onMinimize 
}) => {
  if (!isOpen) return null;

  // Static portfolio data from user's resume
  const profile = {
    name: 'Anvith C Bhagavath',
    title: 'Internship Aspirant',
    location: 'Udupi, Karnataka',
    email: 'scbhagavath@gmail.com',
    github: 'https://github.com/AnvithBhagavath',
    linkedin: 'linkedin.com/in/Anvithbhagavath',
    summary: 'Highly motivated software developer with a strong foundation in programming, problem-solving. Passionate about continuous learning and leveraging innovative solutions to tackle complex challenges, with focus on delivering high-quality, efficient, and user-centric software.'
  };

  const skills = [
    { category: 'Programming Languages', items: ['Java', 'C'] },
    { category: 'Web Technologies', items: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js'] },
    { category: 'Databases & APIs', items: ['MySQL', 'Zoho Online APIs'] }
  ];

  const experience = [
    {
      role: 'Summer Intern',
      company: 'Tetherfi Technologies',
      period: 'Second Year Summer',
      desc: 'Built a full-stack web application that automates Weekly Status Reports for project managers, with several fields seamlessly fetched through Zoho Online APIs.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology - CC',
      school: 'Nitte University, Nitte',
      period: '2023 - 2027',
      desc: 'Current CGPA: 8.87 / 10'
    },
    {
      degree: 'Pre-University Education - PCM',
      school: 'Poornaprajna College, Udupi',
      period: '2020 - 2022',
      desc: 'Completed with 93.5% marks.'
    }
  ];

  const projects = [
    {
      name: 'Library Management System (DBMS Mini Project)',
      tech: 'HTML, CSS, JS, Node.js, Express.js, MySQL',
      desc: 'Built a Library Management System with user/staff authentication, hosted locally. Enabled book borrowing, returning, and availability checks.',
      link: 'https://github.com/AnvithBhagavath?tab=repositories'
    },
     {
     name: 'Automatic Pet Feeder (IoT Project)',
    tech: 'ESP32, DS3231 RTC, Servo Motor, HX711, Load Cell, Android  , IoT',
  desc: 'Developed an IoT-based automatic pet feeder with remote scheduling and precise portion control using a load cell and servo motor.',
  link: 'https://github.com/AnvithBhagavath?tab=repositories'
   },
   {
  name: 'AgriSense (AI-Powered Smart Agriculture System)',
  tech: 'Python, CNN, Random Forest, Machine Learning, Deep Learning',
  desc: 'Built an AI-driven agriculture system that identifies soil types and recommends suitable crops and fertilizers using computer vision and machine learning.',
  link: 'https://github.com/AnvithBhagavath?tab=repositories'
}
    
  ];

  const extraCurriculars = [
    {
      title: 'Active Member',
      org: 'Finite Loop Club',
      desc: 'Participate in various techno events and coding challenges to enhance problem-solving and technical skills.'
    },
    {
      title: 'Active Member',
      org: 'HackerEarth',
      desc: 'Regularly participate in weekly contests and aptitude practice to improve problem-solving skills.'
    }
  ];

  const certifications = [
    { name: 'Introduction to HTML', issuer: 'University of Michigan (Coursera)', date: 'Foundational course' },
    { name: 'Java Integrated Course', issuer: 'Younity Group', date: 'Core Java fundamentals' }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="dashboard-grid">
            <div className="dash-card">
              <div className="dash-card-header">
                <Code size={16} /> Skills Summary
              </div>
              <div className="dash-card-body">
                React,HTML,CSS,JavaScript,Node.js,Java,C,Cloud Services Click on "My Skills" on the desktop or sidebar to see details.
              </div>
            </div>
            
            <div className="dash-card">
              <div className="dash-card-header">
                <Briefcase size={16} /> Experience Preview
              </div>
              <div className="dash-card-body">
                <strong>Btech Student @NMAMIT</strong> (2023-Present)
                <br />
                <strong>Full-Stack Intern @Tetherfi Technologies</strong> (June 2025-August 2025)
              </div>
            </div>

            <div className="dash-card" style={{ gridColumn: 'span 2' }}>
              <div className="dash-card-header">
                <Sparkles size={16} /> Featured Projects
              </div>
              <div className="dash-card-body">
                <div className="projects-preview-grid">
                  {projects.map((p, i) => (
                    <div key={i} className="project-prev-card">
                      <strong style={{ color: 'var(--win-accent-light)' }}>{p.name}</strong>
                      <p style={{ fontSize: '10.5px', marginTop: '4px' }}>{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'skills':
        return (
          <div className="skills-grid">
            {skills.map((category, idx) => (
              <div key={idx} className="skill-category-card" style={{ gridColumn: idx === 2 ? 'span 2' : 'span 1' }}>
                <div className="skill-category-title">{category.category}</div>
                <div className="skill-tags">
                  {category.items.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-tag">
                      <Sparkles size={10} color="var(--win-accent-light)" /> {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'experience':
        return (
          <div className="timeline">
            {experience.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <div className="timeline-role">{item.role}</div>
                      <div className="timeline-company">{item.company}</div>
                    </div>
                    <div className="timeline-date">
                      <Calendar size={10} style={{ marginRight: '4px', display: 'inline' }} />
                      {item.period}
                    </div>
                  </div>
                  <div className="timeline-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'education':
        return (
          <div className="timeline">
            {education.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot" style={{ backgroundColor: '#a855f7' }}></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <div className="timeline-role">{item.degree}</div>
                      <div className="timeline-company">{item.school}</div>
                    </div>
                    <div className="timeline-date">{item.period}</div>
                  </div>
                  <div className="timeline-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'projects':
        return (
          <div className="projects-grid">
            {projects.map((item, idx) => (
              <div key={idx} className="project-card">
                <div className="project-img-placeholder">
                  <Code size={30} />
                  <span className="project-tech-badge">{item.tech}</span>
                </div>
                <div className="project-details">
                  <div className="project-name">{item.name}</div>
                  <div className="project-desc">{item.desc}</div>
                  <div className="project-links">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={12} /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'extra':
        return (
          <div className="timeline">
            {extraCurriculars.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot" style={{ backgroundColor: '#10b981' }}></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <div>
                      <div className="timeline-role">{item.title}</div>
                      <div className="timeline-company">{item.org}</div>
                    </div>
                  </div>
                  <div className="timeline-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        );

      case 'certifications':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {certifications.map((item, idx) => (
              <div key={idx} style={{ 
                background: 'rgba(255, 255, 255, 0.02)', 
                border: '1px solid var(--win-border)',
                borderRadius: '8px',
                padding: '12px 16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Award size={22} color="#fbbf24" />
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '600' }}>{item.name}</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{item.issuer}</div>
                  </div>
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.date}</div>
              </div>
            ))}
          </div>
        );

      case 'personal':
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', lineHeight: '1.5' }}>
            <p>
              Hi there! I'm <strong>Anvith</strong>, an aspiring software developer passionate about building clean, efficient, and user-centric software solutions. I am currently pursuing my Bachelor of Technology (B.Tech) in Computer & Communication at Nitte University.
            </p>
            <p>
              Beyond coding, I enjoy learning about database systems, full-stack web applications, and algorithmic problem-solving. I actively participate in coding contests to sharpen my logical capabilities.
            </p>
            <div style={{ 
              marginTop: '12px',
              padding: '12px',
              borderRadius: '6px',
              background: 'rgba(0, 120, 212, 0.05)',
              border: '1px solid rgba(0, 120, 212, 0.15)',
              display: 'flex',
              gap: '10px',
              alignItems: 'flex-start'
            }}>
              <Info size={16} color="var(--win-accent-light)" style={{ marginTop: '2px' }} />
              <div>
                <strong style={{ color: 'var(--win-accent-light)' }}>Interests & Hobbies:</strong>
                <ul style={{ listStyleType: 'disc', paddingLeft: '16px', marginTop: '6px', color: 'var(--text-secondary)' }}>
                  <li>Participating in hackathons and coding challenges</li>
                  <li>Practicing weekly challenges on HackerEarth</li>
                  <li>Exploring full-stack web automation and APIs</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'resume':
        return <ResumeManager />;

      default:
        return <div>Select a section to view details.</div>;
    }
  };

  const getSectionTitle = () => {
    switch (activeSection) {
      case 'home': return 'Portfolio Overview';
      case 'skills': return 'My Technical Skills';
      case 'experience': return 'Professional Experience';
      case 'education': return 'Education & Background';
      case 'projects': return 'Creative Projects';
      case 'extra': return 'Extra-Curricular Hackathons';
      case 'certifications': return 'Professional Certifications';
      case 'personal': return 'Personal Details';
      case 'resume': return 'Resume Manager';
      default: return 'Details';
    }
  };

  return (
    <div className={`dashboard-window ${isMaximized ? 'maximized' : ''}`}>
      {/* Title bar */}
      <div className="window-titlebar" onDoubleClick={toggleMaximize}>
        <div className="window-title">
          <Monitor size={14} color="#60a5fa" />
          <span>Portfolio Dashboard - Anvith Bhagavath</span>
        </div>
        <div className="window-controls">
          <button className="win-btn" onClick={onMinimize} title="Minimize">
            <Minus size={14} />
          </button>
          <button className="win-btn" onClick={toggleMaximize} title={isMaximized ? "Restore Down" : "Maximize"}>
            <Square size={12} />
          </button>
          <button className="win-btn close" onClick={onClose} title="Close">
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Main body */}
      <div className="window-content">
        {/* Left Column Profile */}
        <div className="profile-column">
          <div className="avatar-container">
            {/* Adding a key trigger for animation reload on component mount */}
           <img
  key={activeSection}
  src={image}
  alt={profile.name}
  className="profile-avatar"
/>
            <div className="avatar-badge">
              <Sparkles size={14} />
            </div>
          </div>
          <h2 className="profile-name">{profile.name}</h2>
          <div className="profile-title">{profile.title}</div>
          
          <p style={{ fontSize: '11.5px', color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '16px' }}>
            {profile.summary}
          </p>

          <div className="divider"></div>

          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={14} /> <span>{profile.location}</span>
            </div>
            <a href={`mailto:${profile.email}`} className="contact-item">
              <Mail size={14} /> <span>{profile.email}</span>
            </a>
            <a href={`https://${profile.github}`} target="_blank" rel="noopener noreferrer" className="contact-item">
              <Github size={14} /> <span>GitHub</span>
            </a>
            <a href={`https://${profile.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-item">
              <Linkedin size={14} /> <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Right Column details */}
        <div className="detail-panel">
          <div className="panel-header">
            <h1 className="panel-title">{getSectionTitle()}</h1>
            <div className="panel-subtitle">Windows-themed developer workspace</div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
