import React from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Item = ({ task }) => {
  const { _id, title, description, date, iscompleted, isimportant } = task;
  // console.log(date);

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
              <button className="block py-1 px-4 bg-indigo-500 text-sm rounded-md">
                Completed
              </button>
              <button className="block py-1 px-4 bg-red-400 text-sm rounded-md">
                Inportant
              </button>
            </div>

            <div className="item-footer-right flex gap-x-4 items-center">
              <button>
                <FaRegEdit className="w-6 h-6" />
              </button>
              <button>
                <RiDeleteBin5Line className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
