import React, { useContext, useState } from 'react';
import { TextGeneratorContext } from '../context/TextGeneratorContext';

const Search = () => {
  const { searchText, setSearchText, generateText, maxTokens, setMaxTokens, fetching } =
    useContext(TextGeneratorContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    generateText();
  };

  return (
    <form className="relative mb-20" onSubmit={e => handleSubmit(e)}>
      <div className="flex items-center justify-between pb-4">
        <div className="flex-1">
          <label htmlFor="keywords" className="text-gray-500">
            Enter a sentence or keywords
          </label>
          <input
            type="text"
            id="keywords"
            placeholder="Ram is a good frontend developer"
            className="h-full w-full rounded-md border border-slate-300 py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:shadow-lg focus:outline-none sm:text-sm"
            value={searchText}
            onChange={e => {
              e.preventDefault();
              setSearchText(() => e.target.value);
            }}
          />
        </div>

        <div className="ml-4 max-w-[10rem]">
          <label htmlFor="maxWords" className="text-gray-500">
            Max word count
          </label>
          <input
            min={10}
            type="number"
            id="maxWords"
            className="h-full w-full rounded-md border border-slate-300 py-2 pl-9 pr-3 shadow-sm focus:shadow-lg focus:outline-none sm:text-sm"
            value={maxTokens}
            onChange={e => {
              e.preventDefault();
              setMaxTokens(() => Number(e.target.value));
            }}
            onBlur={() => {
              if (maxTokens < 10) setMaxTokens(10);
            }}
          />
        </div>
      </div>

      <div className="flex h-[2rem] w-full justify-center">
        <div className="flex w-[20%] items-center justify-center rounded-md border-slate-300 bg-gray-700 text-white">
          {fetching ? (
            <svg
              className="h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            <button className="h-full w-full disabled:opacity-50" disabled={searchText.length < 1}>
              Go
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Search;
