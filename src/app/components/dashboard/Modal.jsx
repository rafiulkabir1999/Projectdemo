"use client";
import React, { Children, useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";
function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="w-[100vw] h-[100vh] fixed z-[1000] bg-[rgba(255, 255, 255, 0.14)]  flex justify-center items-center shadow-xl backdrop-blur-sm">
      <div className="flex flex-col  justify-end w-[65%] rounded-xl border bg-white shadow-md p-3">
        {/* <button onClick={onClose} className=" size-5 ">
          <FontAwesomeIcon icon={faXmark} />
        </button> */}
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
