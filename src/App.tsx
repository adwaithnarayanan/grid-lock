import { useState } from "react";
import Grids from "./components/Grids";
import Modal from "./components/Modal";
import Popup from "./components/Popup";
import Button from "./components/Button";

function App() {
  const [size, setSize] = useState<number>(8);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleSetSize = (value: number) => {
    setSize(value);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleRestartGame = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col items-center justify-center">
        {isModalOpen && (
          <Modal closeModal={handleCloseModal}>
            <Popup closePopup={handleCloseModal}></Popup>
          </Modal>
        )}

        <Button type="button" variant="restart" handleClick={handleRestartGame}>
          Restart
        </Button>
        <Grids size={size} />
      </div>
    </>
  );
}

export default App;
