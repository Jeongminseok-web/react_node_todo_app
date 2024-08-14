import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { closeModal } from '../redux/slices/ModalSlice';

const Modal = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="modal fixed bg-black bg-opacity-50 flex items-center justify-center w-full h-full left-0 top-0 z-50">
      <div className="form-wrapper bg-gray-500 rounded-md w-1/2 h-[70vh]">
        <FaWindowClose onClick={handleCloseModal} />
      </div>
    </div>
  );
};

export default Modal;
