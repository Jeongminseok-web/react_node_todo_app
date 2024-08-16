import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import {
  fetchDeleteItemData,
  fetchGetItemsData,
  fetchUpdateCompletedData,
} from '../redux/slices/apiSlice';

import { toast } from 'react-toastify';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Item = ({ task }) => {
  const { _id, title, description, date, iscompleted, isimportant, userid } =
    task;
  // console.log(userid);
  const dispetch = useDispatch();

  const [isCompleted, setIsCompleted] = useState(iscompleted);

  const deleteItem = async () => {
    const confirm = window.confirm('아이템을 삭제하시겠습니까 ?');

    if (!confirm) return;

    if (!_id) {
      toast.error('잘못된 사용자 접근 입니다.');
      return;
    }

    try {
      await dispetch(fetchDeleteItemData(_id)).unwrap();
      toast.success('아이템이 삭제되었습니다.');
      await dispetch(fetchGetItemsData(userid)).unwrap();
    } catch (error) {
      toast.error('아이템 삭제에 실패했습니다.');
      console.error(error);
    }
  };

  const changeCompleted = () => {
    setIsCompleted(!isCompleted);

    const updateCompletedData = {
      itemId: _id,
      isCompleted: isCompleted,
    };

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateCompletedData),
    };

    dispetch(fetchUpdateCompletedData(options));
  };
  return (
    <div className="item w-1/3 h-[25vh] p-1">
      <div className="w-full h-full border border-gay-500 rounded-md flex py-3 px-4 flex-col justify-between bg-neutral-950">
        <div className="upper">
          <h2 className="text-xl font-bold mb-3 relative pb-2">
            <span className="w-full h-[1px] bg-gray-400 absolute bottom-0"></span>
            {title}
          </h2>
          <p>{description}</p>
        </div>

        <div className="lower">
          <p className="text-sm mb-1">{date}</p>
          <div className="item-footer flex justify-between">
            <div className="item-footer-left flex gap-x-2">
              {isCompleted ? (
                <button
                  className="block py-1 px-4 bg-gradient-to-r from-indigo-400 to-blue-700 text-sm rounded-md"
                  onClick={changeCompleted}
                >
                  Completed
                </button>
              ) : (
                <button
                  className="block py-1 px-4 bg-gradient-to-r from-purple-500 to-yellow-500 text-sm rounded-md"
                  onClick={changeCompleted}
                >
                  incompleted
                </button>
              )}

              <button className="block py-1 px-4 bg-gradient-to-r from-sky-500 to-lime-600 text-sm rounded-md hover:from-sky-500 hover:to-lime-600">
                Inportant
              </button>
            </div>

            <div className="item-footer-right flex gap-x-4 items-center">
              <button>
                <FaRegEdit className="w-6 h-6" />
              </button>
              <button>
                <RiDeleteBin5Line className="w-6 h-6" onClick={deleteItem} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
