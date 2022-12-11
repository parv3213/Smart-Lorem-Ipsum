import React from 'react';
import Result from './Result';
import Search from './Search';

const Main = () => {
  return (
    <div className="mt-[5rem] flex w-full justify-center">
      <div className="w-[80%] md:w-[70%]">
        <Search />
        <Result />
      </div>
    </div>
  );
};

export default Main;
