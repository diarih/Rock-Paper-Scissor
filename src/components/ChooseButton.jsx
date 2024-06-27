import React from 'react';

const ChooseButton = ({icon, colorBorder = 'blue-500', className = '', ...props}) => {
  return (
    <div
      className={`hover:scale-105 transition-all cursor-pointer rounded-full bg-white p-8 border-[18px] shadow-[inset_0_3px_4px_rgba(0,0,0,0.6)] ${colorBorder} ${className}`} {...props}>
      <img src={icon} className="rounded-full md:h-20 md:w-20 h-16 w-16"/>
    </div>
  );
};

export default ChooseButton;