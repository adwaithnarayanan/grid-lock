import Grid from "./Grid";

type GridsProps = {
  size: number;
  neighbours: number[];
  selected: number[];
  setNeighbours: React.Dispatch<React.SetStateAction<number[]>>;
  setSelected: React.Dispatch<React.SetStateAction<number[]>>;
};

const Grids = ({
  size,
  neighbours,
  selected,
  setNeighbours,
  setSelected,
}: GridsProps) => {
  const arr = new Array(size ** 2).fill(undefined);

  function handleSetSelected(value: number) {
    setSelected((prev) => [...prev, value]);
    handleSetNeighbour(value);
  }

  function handleSetNeighbour(value: number) {
    let newArr: number[] = [];

    // To top
    let temp = value;
    while (temp > 0) {
      temp = temp - size;
      if (!neighbours.includes(temp)) newArr.push(temp);
    }

    // To bottom
    temp = value;
    while (temp < size ** 2) {
      temp = temp + size;
      if (!neighbours.includes(temp)) newArr.push(temp);
    }

    // left to right
    let start: number;
    let end: number;

    if (value % size === 0) {
      start = value / size;
      start = (start - 1) * size + 1;
      end = value;
    } else {
      start = Math.trunc(value / size) * size + 1;
      end = (Math.trunc(value / size) + 1) * size;
    }

    console.log({ start, end });

    while (start <= end) {
      if (!neighbours.includes(start)) newArr.push(start);
      start += 1;
    }

    // Diagonal top right
    temp = value;
    while (temp > 0) {
      if (temp % size === 0) break;

      temp = temp - (size - 1);
      if (!neighbours.includes(temp)) newArr.push(temp);
    }

    // Diagonal top left
    temp = value;
    while (temp > 0) {
      if (temp % size === 1) break;
      temp = temp - (size + 1);
      if (!neighbours.includes(temp)) newArr.push(temp);
    }

    // Diagonal bottom right
    temp = value;
    while (temp < size ** 2) {
      if (temp % size === 0) break;
      temp = temp + (size + 1);
      if (!neighbours.includes(temp)) newArr.push(temp);
    }

    // Diagonal bottom left
    temp = value;
    while (temp < size ** 2) {
      if (temp % size === 1) break;
      temp = temp + (size - 1);
      if (!neighbours.includes(temp)) newArr.push(temp);
    }
    setNeighbours((prev) => [...prev, ...newArr]);
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
      className={`grid w-full max-w-fit max-h-fit h-full gap-1 `}
    >
      {arr.map((_grid, index) => (
        <Grid
          key={index}
          index={index + 1}
          neighbours={neighbours}
          selected={selected}
          handleClick={handleSetSelected}
        />
      ))}
    </div>
  );
};

export default Grids;
