import Button from "./Button";

type GridProps = {
  index: number;
};

const Grid = ({ index }: GridProps) => {
  console.log(index);
  return (
    <Button
      type="button"
      className="h-20 w-20 border border-red-400"
      variant="grid"
      handleClick={() => {}}
      id={index}
    ></Button>
  );
};

export default Grid;
