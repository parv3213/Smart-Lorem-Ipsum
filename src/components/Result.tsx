import React from 'react';

const Result = () => {
  return (
    <div>
      <textarea
        id="result"
        cols={30}
        rows={10}
        value=""
        placeholder="Your customized lorem ipsum..."
        className="w-full rounded-md border border-slate-300 py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 sm:text-sm"
        disabled
      ></textarea>
    </div>
  );
};

export default Result;
