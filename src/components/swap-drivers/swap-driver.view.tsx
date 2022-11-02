import React, { ChangeEvent, useState } from "react";

type Props = {
  driversCount: number;
  currentIndex: number;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const SwapDrivers = ({ driversCount, onChange, currentIndex }: Props) => {
  const [selected, setSelected] = useState("");
  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
    if (onChange && e.target.value !== "") {
      onChange(e);
      setSelected("");
    }
  };
  return (
    <select
      value={selected}
      className="bg-gray-50 ml-2 w-36 border border-primary-600 text-primary-900 text-sm rounded-lg  block p-2.5"
      onChange={handleOnChange}
    >
      <option placeholder="set place" value="">
        Set New Place
      </option>
      {Array.from(Array(driversCount)).map((v, index) => {
        if (currentIndex !== index) {
          return (
            <option key={index} value={index}>
              {index + 1}
            </option>
          );
        }
      })}
    </select>
  );
};
export default SwapDrivers;
