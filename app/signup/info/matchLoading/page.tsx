"use client";

import { AutoProgress } from "#/ui/components/AutoProgress";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import routerPaths from "#/utils/routerPaths";

export default function Page() {
  const { push } = useRouter();

  const loadingSec = 4;

  useEffect(() => {
    const timer = setTimeout(() => {
      push(routerPaths.match());
    }, loadingSec * 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="w-full h-full text-center flex-center-col">
      <Image
        src={"/images/signup/img-clapping@x2.png"}
        alt={"박수"}
        width={100}
        height={100}
        className="mb-5"
      />

      <h2 className="text-subtitle leading-[31px] font-bold">
        수고하셨어요! <br />
        이제 매칭을 시작할게요.
      </h2>

      <div className="m-[46px] w-[70%]">
        <AutoProgress sec={loadingSec} />
      </div>

      <p className="text-[14px] text-gray6 mt-[10px]">
        팀빌딩은 하루에 5명까지 보여드려요.
        <br />
        매칭 결과는 좋아요를 누르는 즉시
        <br />
        혹은 채팅 탭에서 확인이 가능해요.
      </p>
    </div>
  );
}
