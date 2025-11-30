import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg hover:shadow-blue-500/25 border border-transparent",
    secondary: "bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 hover:border-slate-600",
    outline: "bg-transparent text-white border border-slate-600 hover:border-white"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;