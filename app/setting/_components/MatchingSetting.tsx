"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import routerPaths from "#/utils/routerPaths";

export const MatchingSetting = () => {
  const { push } = useRouter();

  const handleClickButton = (setting: "intro" | "matchingJob") => {
    if (setting === "intro") {
      push(routerPaths.settingIntro());
    }
    if (setting === "matchingJob") {
      push(routerPaths.settingMatchingJob());
    }
  };

  return (
    <>
      <p className="text-[13px] text-gray6">매칭 설정</p>

      <div>
        <button
          onClick={() => handleClickButton("intro")}
          className="w-full py-[14px] bg-white flex items-center gap-[11px]"
        >
          <Image
            src={"/images/setting/ic-write_story.svg"}
            alt={"note"}
            width={24}
            height={24}
          />
          내 소개 수정
        </button>
        <button
          onClick={() => handleClickButton("matchingJob")}
          className="w-full py-[14px] bg-white flex items-center gap-[11px]"
        >
          <Image
            src={"/images/setting/ic-thumb_up.svg"}
            alt={"note"}
            width={24}
            height={24}
          />
          매칭 직군 수정
        </button>
      </div>
    </>
  );
};
