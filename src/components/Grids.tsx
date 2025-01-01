import { useState } from "react";
import Grid from "./Grid";

type GridsProps = {
  size: number;
};

const Grids = ({ size }: GridsProps) => {
  const arr = new Array(size ** 2).fill(undefined);

  const [selected, setSelected] = useState<number[]>([]);
  const [neighbours, setNeighbours] = useState<number[]>([]);

  const gridSize = `grid-cols-${String(size)}`;

  return (
    <div
      className={`grid ${gridSize} w-full max-w-fit max-h-fit h-full gap-1 `}
    >
      {arr.map((_grid, index) => (
        <Grid key={index} index={index} />
      ))}
    </div>
  );
};

export default Grids;
