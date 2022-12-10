import React, { useContext } from 'react';
import { TextGeneratorContext } from '../context/TextGeneratorContext';

const Result = () => {
  const { generatedText } = useContext(TextGeneratorContext);

  return (
    <div>
      <textarea
        id="result"
        cols={30}
        rows={10}
        value={generatedText}
        placeholder="Your customized lorem ipsum..."
        className="w-full rounded-md border border-slate-300 py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 sm:text-sm"
        disabled
      ></textarea>
    </div>
  );
};

export default Result;
