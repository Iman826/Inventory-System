import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const CardWrapper = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  const style = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '20px',
    margin: '15px 0',
    backgroundColor: theme === 'light' ? '#ffffff' : '#2a2a2a',
    color: theme === 'light' ? '#333333' : '#f5f5f5',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease'
  };

  return <div style={style}>{children}</div>;
};

export default CardWrapper;
