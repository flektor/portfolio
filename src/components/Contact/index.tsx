import React, { ChangeEvent, useState } from "react";
import PronounsValues, { Pronouns } from "./pronouns-values";
import SelectPronouns from "./SelectPronouns";
import CustomPronounsInput from "./CustomPronounsInput";
import {
  ContactMessageError,
  ContactMessageRequest,
  emailRegex,
  validateInput,
} from "../../pages/api/contact/index";

export type MessageInput = {
  nameValue: string;
  pronounsValue: Pronouns;
  customPronounsValue?: string;
  emailValue: string;
  contentValue: string;
};

const messagePlaceholder =
  `Hello George,\n\nI'm excited to connect with you and discuss potential opportunities. Your work has left a strong impression, and we are very interested in exploring collaboration.
\nLooking forward to a productive conversation.    
\nBest regards,\n[Your Name]`;

type InputError = false | "empty" | "invalid";

export default function Contact() {
  const [isCustomPronouns, setIsPronouns] = useState(false);
  const [showMessageSent, setShowMessageSent] = useState(false);

  const [showNameError, setShowNameError] = useState<InputError>(false);
  const [showContentError, setShowContentError] = useState<InputError>(false);
  const [showEmailError, setShowEmailError] = useState<InputError>(false);

  function handlePronounsChange(event: ChangeEvent<HTMLSelectElement>) {
    setIsPronouns(event.target.value === PronounsValues.Custom);
  }

  function handleValidationError(error: ContactMessageError | undefined) {
    if (error?.message === "Invalid email") {
      return setShowEmailError("invalid");
    }

    if (error?.message === "Invalid name") {
      setShowNameError("invalid");
    }

    if (error?.message === "Invalid content") {
      setShowContentError("invalid");
    }

    return console.error(error?.message);
  }

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = Object.fromEntries(
      new FormData(event.currentTarget),
    ) as MessageInput;

    if (data.nameValue.trim() === "") {
      return setShowNameError("empty");
    }

    if (data.emailValue.trim() === "") {
      return setShowEmailError("empty");
    }

    if (!emailRegex.test(data.emailValue)) {
      return setShowEmailError("invalid");
    }

    if (data.contentValue.trim() === "") {
      return setShowContentError("empty");
    }

    const object: ContactMessageRequest = {
      name: data.nameValue,
      pronouns: data.pronounsValue === PronounsValues.Custom
        ? data.customPronounsValue as Pronouns
        : data.pronounsValue,
      email: data.emailValue,
      content: data.contentValue,
    };

    const { data: validatedData, error } = validateInput(object);

    if (error || !validatedData) {
      return handleValidationError(error);
    }

    event.currentTarget.reset();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(object),
    });

    if (!response.ok) {
      return;
    }

    setShowMessageSent(true);
    setTimeout(() => setShowMessageSent(false), 4000);
  }

  return (
    <form onSubmit={handleFormSubmit} className="w-full">
      <div className=" flex flex-wrap items-center gap-3">
        <div className=" flex flex-col justify-around">
          <label
            htmlFor="name"
            className={`text-sm font-bold text-gray-300 ${
              showNameError && "text-red-500"
            }`}
          >
            {showNameError ? "Please enter your name" : "Your Name"}
          </label>

          <input
            className={`w-full bg-black/20 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
              showNameError && "text-red-500 border border-red-500"
            }`}
            type="text"
            name="nameValue"
            placeholder="E.g. Jane Doe"
            // required
            autoComplete="new-password" // hack to hide the autocomplete suggestions in google chome
            onChange={() => setShowNameError(false)}
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
        <label
          htmlFor="email"
          className={`w-full text-sm font-bold text-gray-300 mt-2 ${
            showEmailError && "text-red-500"
          }`}
        >
          {!showEmailError && "Email"}
          {showEmailError === "empty" && "Please add your email address"}
          {showEmailError === "invalid" && "Email address is not valid"}
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
          name="emailValue"
          type="text"
          // pattern={emailRegex.source}
          autoComplete="new-password"
          // required
          placeholder="jane.doe@example.com"
          className={`autofill:border-black/20 w-full bg-black/20 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline ${
            showEmailError && "text-red-500 border border-red-500"
          }`}
          onChange={() => setShowEmailError(false)}
        />
      </div>

      <div className="w-full mt-2">
        <label
          className={`text-sm font-bold text-gray-300 ${
            showContentError && "text-red-500"
          }`}
        >
          {showContentError ? "Please leave a message" : "Message"}
        </label>
        <textarea
          name="contentValue"
          // required
          className={`w-full resize-y overflow-auto h-96 md:h-60 bg-black/20 mt-2 p-3 pt-2 md:pt-3 rounded-lg focus:outline-none focus:shadow-outline ${
            showContentError && "border border-red-500"
          }`}
          placeholder={messagePlaceholder}
          onChange={() => setShowContentError(false)}
        />
      </div>

      <div className="flex justify-between items-center gap-3 mt-2">
        <button
          type="submit"
          className="text-sm font-bold p-3 pl-5 pr-5 tracking-wide bg-gray-800 rounded w-fit focus:outline-none focus:shadow-outline border border-gray-600"
        >
          Send
        </button>
        {showMessageSent && (
          <div className="p-2.5 rounded-lg border border-green-600 z-10 bg-[#111827]">
            <span className="mx-2 text-white/60 text-sm md:text-md">
              Message Sent! ❤️
            </span>
          </div>
        )}
      </div>
    </form>
  );
}
