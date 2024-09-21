import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ApplicantSidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/job', icon: '🏠', label: 'Job Search' },
    { path: '/', icon: '👤', label: 'Home' },
    { path: '/review', icon: '💼', label: 'Review' },
    { path: '/applied', icon: '📝', label: 'Applied' },
    { path: '/filter', icon: '📝', label: 'filter jobs' },
    
    
    // { path: '/messages', icon: '💬', label: 'Messages' },
    // { path: '/discover', icon: '🔍', label: 'Discover' },
  ];

  return (
    <nav className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">W:</h1>
      </div>
      <ul>
        {navItems.map((item) => (
          <li key={item.path} className="mb-2">
            <Link
              to={item.path}
              className={`flex items-center p-2 rounded hover:bg-gray-700 ${
                location.pathname === item.path ? 'bg-gray-700' : ''
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ApplicantSidebar;