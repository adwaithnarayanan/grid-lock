import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./Button";

type AddSizeFormProps = {
  size: number;
  setSize: React.Dispatch<React.SetStateAction<number>>;
  handleCloseModal: () => void;
};

const AddSizeForm = ({ size, setSize, handleCloseModal }: AddSizeFormProps) => {
  const [value, setValue] = useState<number>(size);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("submitted");

    if (value <= 0 || value > 10)
      alert("Value should be greater than 1 and less than or equal to 10");
    else {
      setSize(value);
      handleCloseModal();
    }
  };

  function handleSizeChange(e: ChangeEvent<HTMLInputElement>) {
    const num = Number(e.target.value);

    setValue(num);
  }

  return (
    <div className="py-5">
      <div>
        <h2 className="text-xl font-medium">Select a size</h2>
        <div>
          <form
            action=""
            onSubmit={handleFormSubmit}
            className="flex justify-between flex-col md:flex-row"
          >
            <input
              type="number"
              min={2}
              max={10}
              className="w-full border px-3 py-1 my-3 md:max-w-[70%]"
              value={value}
              onChange={handleSizeChange}
            />
            <Button
              handleClick={() => {}}
              className="bg-slate-600 text-white px-3 py-1 my-2"
              type="submit"
            >
              Start Game
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSizeForm;
