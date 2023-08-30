"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import routerPaths from "#/utils/routerPaths";
import useModalControl from "#/app/modalControl.state";
import Link from "next/link";
import { apiClient } from "#/hooks/apiSetting";

type Props = {
  name: string;
  matchId: number;
  partnerId: number;
};
export default function ChatInfo({ name, matchId, partnerId }: Props) {
  const { push } = useRouter();

  const { isDeleteChatModalOpen, updateIsDeleteChatModalOpen } =
    useModalControl();

  const handleClickBack = () => {
    push(routerPaths.chat());
  };

  const handleClickTrash = () => {
    updateIsDeleteChatModalOpen(!isDeleteChatModalOpen);
  };

  return (
    <header className="w-full bg-white flex p-4">
      <Image
        src={"/images/chat/ic-back.svg"}
        alt={"back"}
        width={24}
        height={24}
        className={"cursor-pointer"}
        onClick={handleClickBack}
      />

      <div className="flex flex-col items-center gap-[2px] flex-1 ">
        <p className="text-center text-gray9 text-[17px] font-bold">
          {name ?? "설정되지 않음"}
        </p>

        <Link
          href={{
            pathname: routerPaths.people(partnerId),
            query: { matchId: matchId },
          }}
          className="bg-gray1 rounded-[4px] px-2 text-pointBlue2 font-medium w-fit text-[14px]"
        >
          프로필 보기
        </Link>
      </div>

      <Image
        src={"/images/chat/ic-trash.svg"}
        alt={"trash"}
        width={24}
        height={24}
        className={"cursor-pointer"}
        onClick={handleClickTrash}
      />
    </header>
  );
}
