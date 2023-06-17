import React, { useEffect, useState } from "react";

const ErrorMsg = ({ message, duration = 5000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <small
      className={`absolute bg-white rounded-full shadow-lg px-4 top-[10px] z-30 text-xs text-rose-500 transition-opacity ${
        visible ? "opacity-100 duration-500" : "opacity-0"
      }`}
    >
      {message}
    </small>
  );
};

export default ErrorMsg;
