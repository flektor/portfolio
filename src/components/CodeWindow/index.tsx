import React, { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import useSWR from "swr";

const customStyle = {
  ...atomOneDark,
  "hljs-comment": {
    ...atomOneDark["hljs-comment"],
    display: "none", // Hide comment lines
  },
};

const fetchData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data as any;
};

export default function CodeWindow() {
  const { data: code, error, isLoading } = useSWR(
    `/api/github-code`,
    fetchData,
  );

  const [hideComments, sethideComments] = useState(false);

  function onHideCommentsHandler() {
    sethideComments((prev) => !prev);
  }

  if (error) return <div>failed to load</div>;

  return (
    <div className="max-w-5xl transition-colors ease-linear shadow-md">
      <div className="w-full h-12 rounded-t-lg bg-gray-200 dark:bg-gray-900 flex justify-start items-center space-x-1.5 px-4">
        <span className="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent" />
        <span className="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent" />
        <span className="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent" />
      </div>

      <div className="flex items-center p-2 bg-[#21252B] w-full">
        <input
          id="default-checkbox"
          type="checkbox"
          checked={!hideComments}
          className="ml-4 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={onHideCommentsHandler}
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {hideComments ? "Hide Comments" : "Show Comments"}
        </label>
      </div>

      <div className="dark:bg-[#21252B] border-t-0 w-full h-96 rounded-b-lg">
        {isLoading || typeof code !== "string"
          ? "Loading file from github.."
          : (
            <SyntaxHighlighter
              language="typescript"
              showLineNumbers
              style={hideComments ? customStyle : atomOneDark}
            >
              {code}
            </SyntaxHighlighter>
          )}
      </div>
    </div>
  );
}
