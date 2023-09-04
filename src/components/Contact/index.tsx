import React, { ChangeEvent, useState } from "react";
import PronounsValues, { Pronouns } from "./pronouns-values";
import SelectPronouns from "./SelectPronouns";
import CustomPronounsInput from "./CustomPronounsInput";

// TODO Store the message to db, send email to me and to the sender.
const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.currentTarget)) as Message;
  console.log(data);
  const object = {
    name: data.nameValue,
    pronouns: data.pronounsValue === PronounsValues.custom
      ? data.customPronounsValue
      : data.pronounsValue,
    email: data.emailValue,
    content: data.content,
    data: new Date(),
  };
  // console.log({ object });
};

export type Message = {
  nameValue: string;
  pronounsValue: Pronouns;
  customPronounsValue?: string;
  emailValue: string;
  content: string;
};

const messagePlaceholder =
  `Hello George,\n\nI'm excited to connect with you and discuss potential opportunities. Your work has left a strong impression, and we are very interested in exploring collaboration.
\nLooking forward to a productive conversation.    
\nBest regards,\n[Your Name]`;

export default function Contact() {
  const [isCustomPronouns, setIsPronouns] = useState(false);

  function handlePronounsChange(event: ChangeEvent<HTMLSelectElement>) {
    setIsPronouns(event.target.value === PronounsValues.custom);
  }

  return (
    <form onSubmit={handleFormSubmit} className="w-full">
      <div className=" flex flex-wrap items-center gap-3">
        <div className=" flex flex-col justify-around">
          <label
            htmlFor="pronouns"
            className="text-sm font-bold text-gray-300"
          >
            Your Name
          </label>

          <input
            className="w-full bg-black/20 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            name="nameValue"
            placeholder="E.g. Jane Doe"
            required
            autoComplete="new-password" // hack to hide the autocomplete suggestions in google chome
          />
        </div>

        <div className="">
          <label
            htmlFor="pronouns"
            className="block mb-2 text-sm font-medium text-gray-300"
          >
            Pronouns
            <span className="text-gray-500 pl-1">(Optional)</span>
          </label>

          <SelectPronouns onChange={handlePronounsChange} />
        </div>

        {isCustomPronouns && <CustomPronounsInput />}
      </div>

      <div className="flex flex-col">
        <label className="w-full text-sm font-bold text-gray-300 mt-2">
          Email
        </label>
        <input
          /*
           * TO FIX
           * name="email"
           * type="email"
           * I changed these attributtes because the autocomplete was turning the bg-color to white. this has as a result to not suggest
           * I tried to fixing it with with autofill by trying this solution but it didn't work
           * https://github.com/tailwindlabs/tailwindcss/discussions/8679#discussioncomment-4741637
           * Also autoComplete="off" didn't work
           * the only solution I found is by using autoComplete="new-password"
           * https://stackoverflow.com/questions/43132693/how-to-turn-off-html-input-form-field-suggestions
           */
          name="eddress"
          type="text"
          autoComplete="new-password"
          required
          placeholder="jane.doe@example.com"
          className="autofill:border-black/20 w-full bg-black/20 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="w-full mt-2">
        <label className="text-sm font-bold text-gray-300">
          Message
        </label>
        <textarea
          name="content"
          required
          className="w-full resize-y overflow-auto h-96 md:h-60 bg-black/20 mt-2 p-3 pt-2 md:pt-3 rounded-lg focus:outline-none focus:shadow-outline"
          placeholder={messagePlaceholder}
        />
      </div>

      {/* <div className="mt-8"> */}
      <button
        type="submit"
        className="text-sm font-bold mt-2 p-3 pl-5 pr-5 tracking-wide bg-gray-800 rounded w-fit focus:outline-none focus:shadow-outline border border-gray-600"
      >
        Send
      </button>
    </form>
  );
}
