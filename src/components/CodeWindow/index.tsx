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
      <div className="w-full h-12 rounded-t-lg bg-gray-900 flex justify-start items-center space-x-1.5 px-4">
        <span className="w-3 h-3 border-red-400 rounded-full bg-red-400" />
        <span className="w-3 h-3 border-yellow-400 rounded-full bg-yellow-400" />
        <span className="w-3 h-3 border-green-400 rounded-full bg-green-400" />
      </div>
      <div
        className={`${
          typeof code !== "string" && "hidden"
        } flex items-center p-1 bg-[#21252B] w-full`}
      >
        <input
          id="default-checkbox"
          type="checkbox"
          checked={!hideComments}
          className="ml-4 w-4 h-4 bg-[#3C7EBB] border-gray-300 rounded focus:ring-[#3C7EBB] ring-offset-gray-800 focus:ring-2 dark:border-gray-600"
          onChange={onHideCommentsHandler}
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-300"
        >
          {hideComments ? "Hide Comments" : "Show Comments"}
        </label>
      </div>

      <div className="bg-[#21252B] border-t-0 w-full h-256 rounded-b-lg overflow-auto">
        {isLoading || typeof code !== "string"
          ? (
            <div className="flex justify-center p-4">
              <span className="m-2">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 mr-2 animate-spin fill-white/75"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#3C7EBB"
                  />
                </svg>
                Loading file from github..
              </span>
            </div>
          )
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
