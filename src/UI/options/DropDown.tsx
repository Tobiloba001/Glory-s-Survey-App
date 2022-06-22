import React from "react";

interface IOptions {
  value: string;
  name: string;
}

function SelectOptions(optionsArr: IOptions[]): any {
  return optionsArr.map((item: IOptions, index: number) => {
    return (
      <option key={index + item.value} value={item.value}>
        {item.name}
      </option>
    );
  });
}

function DropDown(props: IOptions[]) {
  return (
    <select>
      <SelectOptions {...props} />
    </select>
  );
}

export default DropDown;
