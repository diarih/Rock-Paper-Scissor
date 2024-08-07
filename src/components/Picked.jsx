import React, {useContext, useEffect, useRef, useState} from 'react';
import RockIcon from '../assets/images/icon-rock.svg'
import PaperIcon from '../assets/images/icon-paper.svg'
import ScissorIcon from '../assets/images/icon-scissors.svg'
import ChooseButton from "./ChooseButton.jsx";
import {ScoreContext} from "../App.jsx";

const list = ['paper', 'scissor', 'rock'];
const choices = {
  rock: {name: 'Rock', beats: 'scissor'},
  paper: {name: 'Paper', beats: 'rock'},
  scissor: {name: 'Scissors', beats: 'paper'},
};

const determineWinner = (playerChoice, houseChoice) => {
  if (playerChoice === houseChoice) {
    return 'draw';
  } else if (choices[playerChoice].beats === houseChoice) {
    return 'win';
  } else {
    return 'lose';
  }
};

const Picked = ({pick, onReset}) => {
  const [loading, setLoading] = useState(true);
  const [house, setHouse] = useState();
  const [result, setResult] = useState('');
  const [score, setScore] = useContext(ScoreContext);
  const hasEffectRun = useRef(false);

  const Icons = {
    paper: {
      color: 'border-blue-500',
      icon: PaperIcon,
    },
    rock: {
      color: 'border-red-500',
      icon: RockIcon,
    },
    scissor: {
      color: 'border-yellow-500',
      icon: ScissorIcon,
    }
  };

  const housePicked = () => {
    const randomSelect = Math.floor(Math.random() * 3);
    const matchHouse = list[randomSelect];

    setHouse(Icons[matchHouse]);
    setLoading(false);

    console.log('picked', pick);
    console.log('com', matchHouse);

    const gameResult = determineWinner(pick, matchHouse);
    if (gameResult === 'win') {
      let scoreUp = parseInt(score) + 1
      setScore(scoreUp);
      localStorage.setItem('score', scoreUp)
    }
    setResult(gameResult);
  };

  useEffect(() => {
    if (!hasEffectRun.current) {
      setTimeout(housePicked, 3000);
      hasEffectRun.current = true;
    }
  }, []);

  return (
    <div className={'space-y-5'}>
      <div className={'flex lg:gap-14 gap-2 lg:p-4 p-1'}>
        <div>
          <p className={'text-center mb-8 uppercase font-semibold'}>You Picked</p>
          <div>
            <ChooseButton icon={Icons[pick]?.icon} colorBorder={Icons[pick]?.color}/>
          </div>
        </div>
        {house && (
          <div className={'hidden lg:flex flex-col gap-4 items-center justify-center transition'}>
            <p className={'lg:text-4xl font-bold uppercase'}>YOU {result}</p>
            <button
              onClick={onReset}
              className={'rounded p-8 w-full py-4 bg-white hover:text-red-500 text-gray-700 transition uppercase font-semibold text-xs'}>
              play again
            </button>
          </div>
        )}
        <div>
          <p className={'text-center mb-8 uppercase font-semibold'}>The House Picked</p>
          <div className={'flex items-center justify-center'}>
            {loading ? (
              <div className="animate-ping mt-14 md:h-20 md:w-20 h-16 w-16 rounded-full bg-sky-400 opacity-75"></div>
            ) : (
              <ChooseButton icon={house.icon} colorBorder={house.color}/>
            )}
          </div>
        </div>
      </div>
      {house && (
        <div className={'flex lg:hidden flex-col gap-4 items-center justify-center transition'}>
          <p className={'text-4xl font-bold uppercase'}>YOU {result}</p>
          <button
            onClick={onReset}
            className={'rounded p-8 w-full py-4 bg-white hover:text-red-500 text-gray-700 transition uppercase font-semibold text-xs'}>
            play again
          </button>
        </div>
      )}
    </div>
  );
};

export default Picked;
