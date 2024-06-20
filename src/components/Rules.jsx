import React, {useState} from 'react';
import CloseIcon from '../assets/images/icon-close.svg'
import RulesImage from '../assets/images/image-rules.svg'

const Rules = () => {

  const [openModal, setOpenModal] = useState(false)
  const openModalHandler = () => {
    setOpenModal((e) => !openModal)
  }
  const showModal = openModal ? 'opacity-100' : 'opacity-0 pointer-events-none';

  return (
    <div>
      <div data-dialog-backdrop="dialog" data-dialog-backdrop-close="true"
           className={`${showModal} fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black
        bg-opacity-60 backdrop-blur-sm ease-out transition-all duration-300`}>
        <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
             onClick={() => setOpenModal(false)}></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-md sm:w-full">
          <div className="p-6 text-gray-300 space-y-8">
            <div className={'flex items-center justify-between'}>
              <h2 className="text-2xl font-semibold uppercase darkText">rules</h2>
              <button
                onClick={() => setOpenModal(false)}
                className="px-4 py-2 text-white rounded transition-all duration-300 hover:scale-125"
              >
                <img src={CloseIcon}  alt={'close icon'}/>
              </button>
            </div>
            <div className={'flex items-center justify-center'}>
              <img src={RulesImage}  alt={'rules'}/>
            </div>
          </div>
        </div>
      </div>
      <div className={'fixed bottom-4 right-4'}>
        <button
          className={'hover:bg-white hover:text-gray-700 transition ease-in-out duration-500 hover:-translate-y-1 ' +
            'hover:scale-110 px-8 py-2 rounded border border-gray-100'}
          onClick={openModalHandler}>Rules
        </button>
      </div>
    </div>
  )
    ;
};

export default Rules;