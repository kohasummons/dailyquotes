import React from 'react';

const banner = ({ className }) => {
  return (
    <aside className={`${className} banner text-[#C1C1C1] px-5 py-2 bg-[#F4F4F4] text-center max-w-72`}>
      dailyQuotes is now opensource!
    </aside>
  );
};

export default banner;
