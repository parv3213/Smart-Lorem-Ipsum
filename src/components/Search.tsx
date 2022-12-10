import React from 'react';

const Search = () => {
  return (
    <form action="" className="relative mb-20">
      <label htmlFor="keywords" className="text-gray-700">
        Enter a sentence or keywords
      </label>
      <br />
      <div className="flex h-10 items-center justify-between">
        <input
          type="text"
          id="keywords"
          placeholder="Ram is a good frontend developer"
          className="h-full w-full rounded-md rounded-r-none border border-r-0 border-slate-300 py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:shadow-lg focus:outline-none sm:text-sm"
        />
        <button className="flex h-full w-[5rem] items-center justify-center rounded-md rounded-l-none border-l-0 border-slate-300 bg-gray-800 text-white">
          Go!
        </button>
      </div>
    </form>
  );
};

export default Search;
