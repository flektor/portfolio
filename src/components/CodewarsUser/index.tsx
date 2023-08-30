import React from "react";
import CodewarsUserBadge from "../CodewarsUserBadge";
import useSWR from "swr";
import { RankObject, User } from "codewars-api-types/v1";
import CodewarsBadge from "../CodewarsBadge";
import getProperLanguageName from "~/utils/properLanguageNames";
import Image from "next/image";
import { getIcon } from "~/utils/techIcons";

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

  // const languages = Object.keys(user.ranks.languages).map((lang) => ({
  //   language: getProperLanguageName(lang),
  //   ...(user.ranks.languages[lang] as RankObject),
  // }));

  return (
    <div className="flex flex-col items-center">
      <CodewarsUserBadge
        username={username}
        honor={user.honor}
        color={user.ranks.overall.color}
        rank={user.ranks.overall.name}
      />

      {
        /* <ul className="flex flex-col gap-2 p-2 text-xl list-none bg-[#111827]">
        {languages.map((item) => {
          const icon = getIcon(item.language);
          return (
            <li
              key={item.name}
              className="p-4 pl-6 pr-6 bg-[#282C34]"
            >
              <div className="flex justify-around items-center gap-2">
                {icon && (
                  <Image
                    alt={icon.alt}
                    src={icon.src}
                    width={48}
                    height={48}
                  />
                )}
                <CodewarsBadge color={item.color} rank={item.name} />
              </div>

              <div className="p-2 block flex justify-around">
                <span>Score:</span>
                {item.score}
              </div>
            </li>
          );
        })}
      </ul> */
      }
    </div>
  );
}
