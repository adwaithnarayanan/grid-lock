import Button from "./Button";

type GridProps = {
  index: number;
  selected: number[];
  neighbours: number[];
  handleClick: (value: number) => void;
};

const Grid = ({ index, selected, neighbours, handleClick }: GridProps) => {
  let value: "primary" | "selected" | "neighbour";

  if (selected.includes(index)) value = "selected";
  else if (neighbours.includes(index)) value = "neighbour";
  else value = "primary";

  return (
    <Button
      type="button"
      className="h-20 w-20 border border-red-400"
      variant="grid"
      handleClick={() => handleClick(index)}
      value={value}
    >
      {index}
    </Button>
  );
};

export default Grid;
