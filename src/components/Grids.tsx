import { useState } from "react";
import Grid from "./Grid";

type GridsProps = {
  size: number;
};

const Grids = ({ size }: GridsProps) => {
  const arr = new Array(size ** 2).fill(undefined);

  const [selected, setSelected] = useState<number[]>([]);
  const [neighbours, setNeighbours] = useState<number[]>([]);

  function handleSetSelected(value: number) {
    setSelected((prev) => [...prev, value]);
    handleSetNeighbour(value);
  }

  function handleSetNeighbour(value: number) {
    let temp = value;

    while (temp > 0) {
      temp = temp - size;
      setNeighbours((prev) => [...prev, temp]);
    }

    temp = value;

    while (temp > 0) {
      if (temp % size === 0) break;

      temp = temp - (size - 1);

      console.log(10000, { temp });

      if (!neighbours.includes(temp)) {
        console.log("nowwwwwwwwwwwww", { temp });
        setNeighbours((prev) => {
          console.log({ prev, temp });
          return [...prev, temp];
        });
        console.log("heeeeeeeeeeeeeeeeee");
      }
    }

    console.log("########333", neighbours);

    temp = value;

    while (temp > 0) {
      if (temp % size === 1) break;
      temp = temp - (size + 1);
      if (!neighbours.includes(temp)) setNeighbours((prev) => [...prev, temp]);
    }

    temp = value;

    while (temp < size ** 2) {
      if (temp % size === 0) break;
      temp = temp + (size + 1);
      if (!neighbours.includes(temp)) setNeighbours((prev) => [...prev, temp]);
    }

    temp = value;
    while (temp < size ** 2) {
      if (temp % size === 1) break;
      temp = temp + (size - 1);
      if (!neighbours.includes(temp)) setNeighbours((prev) => [...prev, temp]);
    }
  }

  console.log({ neighbours, selected });

  //   const gridSize = `grid-cols-${size}`;
  const gridSize = `grid-cols-8`;

  return (
    <div
      className={`grid ${gridSize} w-full max-w-fit max-h-fit h-full gap-1 `}
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
