import React, { useContext } from 'react';
import copy from 'copy-to-clipboard';
import { TextGeneratorContext } from '../context/TextGeneratorContext';
import copyIcon from '../assets/copy-icon.png';

const Result = () => {
  const { generatedText } = useContext(TextGeneratorContext);

  return (
    <div className="relative">
      <textarea
        id="result"
        cols={30}
        rows={10}
        value={generatedText}
        placeholder="Your customized lorem ipsum..."
        className="w-full rounded-md border border-slate-300 py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 sm:text-sm"
        disabled
      />
      {generatedText ? (
        <img
          src={copyIcon}
          alt="copyIcon"
          className="absolute top-0 right-0 scale-50	cursor-pointer"
          onClick={() => {
            copy(generatedText);
          }}
        />
      ) : null}
    </div>
  );
};

export default Result;
