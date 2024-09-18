import React from 'react';

function InnerSideBar({ data,isActive, onClick }) {
  return (
    <div
      className={`w-11/12 h-14 bg-slate-200 text-gray-800 rounded-md text-[15px] font-semibold flex justify-center items-center cursor-pointer ${
        isActive ? 'active-Side-Bar' : ''
      } `}
      onClick={onClick}
      
    >
      {data}
    </div>
  );
}

export default InnerSideBar;
