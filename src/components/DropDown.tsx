import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

// const options = [
//   { key: "1", label: "Option 1" },
//   { key: "2", label: "Option 2" },
//   { key: "3", label: "Option 3" },
// ]

// const defaultSelectedKeys = "1"


const DropDown = ({
  options,
  defaultSelectedKeys,
  selectStyles,
  insideStyles,
}: {
  options: { key: string; label: string }[];
  defaultSelectedKeys: string;
  selectStyles?: string;
  insideStyles?: string;
}) => {
  return (
    <div className="flex items-center">
      <div>
        <Select
          classNames={{
            mainWrapper: [
              `${selectStyles} border-1 border-[#D2D5D6]  rounded-[5px] text-mainGray`,
            ],
            trigger: [`${insideStyles}  bg-[#ffffff] `],
            value: ["text-[12px] "],
          }}
          disallowEmptySelection={true}
          defaultSelectedKeys={[defaultSelectedKeys]}
          aria-label="Toggle selection"
        >
          {options.map((option) => (
            <SelectItem key={option.key}>{option.label}</SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default DropDown;
