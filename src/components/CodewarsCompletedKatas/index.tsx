import React, { useEffect, useState } from "react";
import useSWR, { mutate } from "swr";
import { CompletedChallenges } from "codewars-api-types/v1";
import getProperLanguageName from "~/utils/properLanguageNames";

const fetchData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data as CompletedChallenges;
};

export default function CodewarsUser(
  { username, page }: { username: string; page: number },
) {
  const [currentPage, setCurrentPage] = useState(page);
  const { data: katas, error, isLoading } = useSWR(
    `/api/codewars-completed-katas?username=${username}&page=${currentPage}`,
    fetchData,
  );

  function nextPage() {
    if (katas && currentPage < katas.totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  useEffect(() => {
    mutate(
      `/api/codewars-completed-katas?username=${username}&page=${currentPage}`,
    );
  }, [currentPage]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  if (!katas) {
    return <div>No data available</div>;
  }

  return (
    <>
      <span className="m-3 text-2xl">
        Solved Challenges: {katas.totalItems}
      </span>
      {
        <ul>
          {katas.data.map((kata) => (
            <li key={kata.id} className="m-4">
              <span className="block">Title: {kata.name}</span>
              <span className="block">
                Languages: {kata.completedLanguages.map((lang) =>
                  getProperLanguageName(lang)
                ).join(", ")}
              </span>
              <span className="block">Solved at: {kata.completedAt}</span>
            </li>
          ))}
        </ul>
      }

      <button onClick={prevPage} disabled={currentPage === 0}>{"<"}</button>
      page {currentPage} of {katas.totalPages}
      <button onClick={nextPage} disabled={currentPage === katas.totalPages}>
        {">"}
      </button>
    </>
  );
}
