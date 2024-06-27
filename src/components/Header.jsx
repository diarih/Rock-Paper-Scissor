import React, {useContext} from 'react';
import MyLogo from '/src/assets/images/logo.svg';
import {ScoreContext} from "../App.jsx";

const Header = () => {
  const [score] = useContext(ScoreContext)
  return (
    <header className={'border-2 headerOutline p-4 rounded-md w-full max-w-2xl'}>
      <div className={'flex items-center justify-between'}>
        <div>
          <img src={MyLogo} alt="logo"/>
        </div>
        <div className={'bg-white text-center p-4 rounded'}>
          <p className={'scoreText text-xs'}>Score</p>
          <p className={'darkText text-4xl font-bold'}>{score}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;