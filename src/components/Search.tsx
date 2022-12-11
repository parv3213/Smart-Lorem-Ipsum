import React, { useContext, useState } from 'react';
import { TagsInput } from 'react-tag-input-component';

import { TextGeneratorContext } from '../context/TextGeneratorContext';

const Search = () => {
  const { maxTokens, setSearchText, setMaxTokens, fetching } = useContext(TextGeneratorContext);

  const [textAmount, setTextAmount] = useState(5);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [textAmountType, setTextAmountType] = useState('paragraph');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSearchText(`Write ${textAmount} ${textAmountType} about ${keywords.toString()}`);
  };

  return (
    <form className="relative mb-20" onSubmit={e => handleSubmit(e)}>
      <div className="flex flex-1 flex-col flex-wrap items-center justify-between pb-4 md:flex-row">
        <div className="flex-1">
          <label htmlFor="keywords" className="text-gray-500">
            Enter keywords
          </label>
          <TagsInput value={keywords} onChange={setKeywords} name="keywords" placeHolder="Penguins" />
          <em className="text-xs text-gray-500">press enter to add new tag</em>
        </div>

        <div className="ml-4 mt-4 flex flex-col">
          <div className="flex md:mt-0">
            <input
              min={1}
              type="number"
              className="h-full w-full rounded-md border border-slate-300 py-2 pl-2 shadow-sm focus:outline-black sm:text-sm"
              value={textAmount}
              onChange={e => {
                e.preventDefault();
                setTextAmount(() => Number(e.target.value));
              }}
              onBlur={() => {
                if (maxTokens < 1) setMaxTokens(1);
              }}
            />
            <select
              value={textAmountType}
              onChange={e => {
                setTextAmountType(e.target.value);
              }}
            >
              <option value="paragraphs">paragraphs</option>
              <option value="words">words</option>
              <option value="lists">lists</option>
            </select>
          </div>
          <em className="text-xs text-gray-500">max word count is 500</em>
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
            <button className="h-full w-full disabled:opacity-50" disabled={keywords.length === 0}>
              Go
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default Search;
