import { useEffect, useState } from "react";
import AddSizeForm from "./components/AddSizeForm";
import Button from "./components/Button";
import Grids from "./components/Grids";
import Modal from "./components/Modal";
import Popup from "./components/Popup";

function App() {
  const [size, setSize] = useState<number>(8);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [neighbours, setNeighbours] = useState<number[]>([]);
  const [selected, setSelected] = useState<number[]>([]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  function handleRestartGame() {
    setNeighbours([]);
    setSelected([]);
  }

  useEffect(() => {
    handleRestartGame();
  }, [size]);

  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col items-center justify-center bg-primaryBg font-dmSans">
        {isModalOpen && (
          <Modal closeModal={handleCloseModal} isOpen={isModalOpen}>
            <Popup closePopup={handleCloseModal}>
              <AddSizeForm
                setSize={setSize}
                size={size}
                handleCloseModal={handleCloseModal}
              />
            </Popup>
          </Modal>
        )}

        {!isModalOpen && (
          <div className="pb-[20px] flex flex-col sm:flex-row">
            <Button
              type="button"
              variant="restart"
              handleClick={handleModalOpen}
              className=""
            >
              Change Grid Size
            </Button>

            <Button
              type="button"
              variant="restart"
              handleClick={handleRestartGame}
            >
              Restart Game
            </Button>
          </div>
        )}

        <Grids
          size={size}
          neighbours={neighbours}
          selected={selected}
          setNeighbours={setNeighbours}
          setSelected={setSelected}
        />
      </div>
    </>
  );
}

export default App;
