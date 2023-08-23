"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  content: string;
  back: string;
};
export const Header = ({ content, back }: Props) => {
  const { push } = useRouter();
  return (
    <header className="relative w-full bg-white flex items-center p-4 border-[1px] border-b-gray1">
      <Image
        src={"/images/chat/ic-back.svg"}
        alt={"back"}
        width={24}
        height={24}
        className={"absolute cursor-pointer"}
        onClick={() => push(back)}
      />

      <div className="flex flex-col items-center gap-[2px] flex-1 ">
        <p className="text-center text-gray9 text-[17px] font-bold">
          {content}
        </p>
      </div>
    </header>
  );
};
