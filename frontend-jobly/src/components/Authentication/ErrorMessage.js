import React, { useState, useEffect, Fragment } from "react";
import { Transition } from "@headlessui/react";

const Message = ({ message }) => {
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    if (message) {
      setIsShowing(true);
    }
  }, [message]);

  if (isShowing) {
    setTimeout(() => {
      setIsShowing(false);
    }, 2500);
  }

  return (
    <>
      <Transition
        as={Fragment}
        show={isShowing}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-1000"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className=" fixed z-10 flex items-center justify-center rounded bg-black/70">
          <p className="px-6 py-2 text-center text-2xl font-bold text-teal-400">
            {message}
          </p>
        </div>
      </Transition>
    </>
  );
};

export default Message;
