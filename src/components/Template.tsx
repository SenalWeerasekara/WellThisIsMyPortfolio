import React from 'react';

type ButtonProps = {
  label: string;
};

const AlertButton: React.FC<ButtonProps> = ({ label }) => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button 
      onClick={handleClick} 
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
    >
      {label}
    </button>
  );
};

export default AlertButton;