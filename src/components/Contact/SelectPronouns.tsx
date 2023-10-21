import React from "react";
import PronounsValues from "./pronouns-values";

type SelectPronounsProps = {
  onChange: React.ChangeEventHandler;
};

export default function SelectPronouns({ onChange }: SelectPronounsProps) {
  return (
    <select
      name="pronounsValue"
      onChange={onChange}
      className="border text-sm rounded-lg block w-fit p-3 bg-gray-800 border-gray-600 focus:border-white/50 focus:outline-none focus:shadow-outline"
    >
      {Object.keys(PronounsValues).map((key) => {
        const typedKey = key as keyof typeof PronounsValues;
        const isNone = PronounsValues[typedKey] === PronounsValues.None;
        return (
          <option
            key={key}
            defaultChecked={isNone}
            value={PronounsValues[typedKey]}
          >
            {isNone ? "Please select" : PronounsValues[typedKey]}
          </option>
        );
      })}
    </select>
  );
}
