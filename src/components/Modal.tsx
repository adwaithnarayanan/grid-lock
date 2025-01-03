import { useRef } from "react";

type ModalProps = {
  children: React.ReactNode;
  closeModal: () => void;
  isOpen: boolean;
};

const Modal = ({ children, closeModal, isOpen }: ModalProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    console.log({ event: e.target });
    if (ref.current && !ref.current.contains(e.target as Node)) {
      closeModal();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-20 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center"
      onClick={(e) => handleClickOutside(e)}
    >
      <div ref={ref} className="w-fit">
        {children}
      </div>
    </div>
  );
};

export default Modal;
