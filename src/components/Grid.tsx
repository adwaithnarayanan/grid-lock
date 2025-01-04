import Button from "./Button";

type GridProps = {
  index: number;
  selected: number[];
  neighbours: number[];
  handleClick: (value: number) => void;
};

let clicked: number = 0;

const Grid = ({ index, selected, neighbours, handleClick }: GridProps) => {
  let value: "primary" | "selected" | "neighbour";
  if (selected.includes(index)) value = "selected";
  else if (neighbours.includes(index)) value = "neighbour";
  else value = "primary";

  function handleDoubleClick() {
    clicked += 1;

    setTimeout(() => (clicked = 0), 500);

    if (clicked == 2) handleClick(index);
  }

  return (
    <Button
      type="button"
      className="h-8 w-8 sm:h-10 sm:w-10 md:h-20 md:w-20 rounded-sm md:rounded-md border border-red-400"
      variant="grid"
      handleClick={handleDoubleClick}
      value={value}
      disabled={
        selected.includes(index) || neighbours.includes(index) ? true : false
      }
    ></Button>
  );
};

export default Grid;
