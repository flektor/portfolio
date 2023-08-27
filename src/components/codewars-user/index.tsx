import React from "react";
import CodewarsUserBadge from "../codewars-user-badge";
import useSWR from "swr";
import { RankObject, User } from "codewars-api-types/v1";
import CodewarsBadge from "../codewars-badge";
import getProperLanguageName from "~/utils/proper-language-names";
import Image from "next/image";
import { getIcon } from "~/utils/tech-icons";

const fetchData = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data as User;
};

export default function CodewarsUser({ username }: { username: string }) {
  const { data: user, error, isLoading } = useSWR(
    `/api/codewars-user?username=${username}`,
    fetchData,
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  if (!user) {
    return <div>No data available</div>;
  }

  console.log(user);

  const languages = Object.keys(user.ranks.languages).map((lang) => ({
    language: getProperLanguageName(lang),
    ...(user.ranks.languages[lang] as RankObject),
  }));

  return (
    <>
      <CodewarsUserBadge
        username={username}
        honor={user.honor}
        color={user.ranks.overall.color}
        rank={user.ranks.overall.name}
      />

      <ul className="flex flex-wrap text-xl list-none">
        {languages.map((item) => {
          const icon = getIcon(item.language);
          return (
            <li
              key={item.name}
              className="m-2 p-2 pr-6 pl-4 border-solid border border-white rounded-lg w-max"
            >
              <div className="flex justify-between items-center">
                <span className="pl-2">{item.language}</span>
                {icon && (
                  <Image
                    alt={icon.alt}
                    src={icon.src}
                    width={48}
                    height={48}
                    className="ml-2"
                  />
                )}
              </div>
              <div className="flex justify-between items-center">
                <span className="m-2">Rank:</span>
                <CodewarsBadge color={item.color} rank={item.name} />
              </div>
              <div className="p-2 block flex justify-between">
                <span>Score:</span>
                {item.score}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
