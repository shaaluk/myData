import React, { useState } from 'react';
import MyModal from './Showmodel';

const Modal = () => {

  const [showModal, setshowModal] = useState(false);
  const Closemenu = () => setshowModal(false);


  return (
    <div>Modal

      <div>
        <button onClick={() =>
          setshowModal(true)
        }>
          Open Modal</button>

        {showModal && <MyModal Closemenu={Closemenu} />}
      </div>


    </div>
  )
}

export default Modal;