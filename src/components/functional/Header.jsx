import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: theme === 'light' ? '#007bff' : '#1a1a1a',
    color: 'white',
    padding: '15px 25px',
    borderRadius: '8px',
    marginBottom: '20px'
  };

  const btnStyle = {
    padding: '8px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    backgroundColor: theme === 'light' ? '#222' : '#fff',
    color: theme === 'light' ? '#fff' : '#222'
  };

  return (
    <div style={headerStyle}>
      <h2 style={{ margin: 0 }}>📦 Stock Dashboard</h2>
      <button style={btnStyle} onClick={toggleTheme}>
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
};

export default Header;
