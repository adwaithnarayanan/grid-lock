type ModalProps = {
  children: React.ReactNode;
  closeModal: () => void;
};

const Modal = ({ children, closeModal }: ModalProps) => {
  return (
    <div
      className="fixed inset-0 z-20 w-full h-full bg-[rgba(0,0,0,0.5)]"
      onClick={closeModal}
    >
      {children}
    </div>
  );
};

export default Modal;
