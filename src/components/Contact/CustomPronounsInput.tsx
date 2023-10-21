import React from "react";

export default function SelectCustomPronouns() {
  return (
    <>
      <label className="w-full text-sm font-bold text-gray-300">
        Your pronous
      </label>
      <input
        className="w-full bg-black/20 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        type="text"
        // required
        name="customPronounsValue"
        placeholder="Please enter your pronouns"
        autoComplete="new-password"
      />
    </>
  );
}
