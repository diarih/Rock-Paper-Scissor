import React, {useContext, useState} from 'react';
import ChooseButton from "./ChooseButton.jsx";
import RockIcon from '../assets/images/icon-rock.svg'
import PaperIcon from '../assets/images/icon-paper.svg'
import ScissorIcon from '../assets/images/icon-scissors.svg'
import Triangle from '../assets/images/bg-triangle.svg'
import Picked from "./Picked.jsx";

const MainMenu = () => {
  const [pick, setPick] = useState("")
  const pickHandler = (val) => {
    setPick(val)
  }
  return (
    <div className={'relative p-12'}>
      {!pick ? (
        <div>
          <div>
            <img alt={'triangle'} src={Triangle}/>
          </div>
          <ChooseButton onClick={() => pickHandler("paper")} icon={PaperIcon} colorBorder={'border-blue-500'}
                        className={'absolute top-0 left-0'}/>
          <ChooseButton onClick={() => pickHandler("rock")} icon={RockIcon} colorBorder={'border-red-500'}
                        className={'absolute bottom-0 left-1/2 transform -translate-x-1/2'}/>
          <ChooseButton onClick={() => pickHandler("scissor")} icon={ScissorIcon} colorBorder={'border-yellow-500'}
                        className={'absolute top-0 right-0'}/>
        </div>
      ) : (
        <Picked pick={pick} onReset={() => setPick('')}/>
      )
      }

    </div>
  );
};

export default MainMenu;