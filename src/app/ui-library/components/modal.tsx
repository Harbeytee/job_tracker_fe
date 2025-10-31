"use client";
import { useRef } from "react";
import { useOutsideClick } from "../utils.ts/helper";

interface Modal {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: Modal) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef as React.RefObject<HTMLElement>, () => onClose());

  if (isOpen)
    return (
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-hidden max-h-screen bg-black-950/70 backdrop-blur-sm"
      >
        <div
          ref={modalRef}
          className={`bg-white shadow-lg flex flex-col w-[650px] p-8 rounded-lg rounded-xl`}
        >
          {children}
        </div>
      </div>
    );
};
