import React from 'react';
import MyLogo from '/src/assets/images/logo.svg';

const Header = () => {
  return (
    <header className={'border-2 headerOutline p-4 rounded-md w-full max-w-2xl'}>
      <div className={'flex items-center justify-between'}>
        <div>
          <img src={MyLogo} alt="logo"/>
        </div>
        <div className={'bg-white text-center p-4 rounded'}>
          <p className={'scoreText text-xs'}>Score</p>
          <p className={'darkText text-4xl font-bold'}>12</p>
        </div>
      </div>
    </header>
  );
};

export default Header;