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
    }, 5000);
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
        <p className="absolute left-2 top-20 z-30 rounded-sm bg-white px-6 py-2 text-2xl font-bold text-teal-400">
          {message}
        </p>
      </Transition>
    </>
  );
};

export default Message;
