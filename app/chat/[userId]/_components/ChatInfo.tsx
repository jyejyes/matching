"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import routerPaths from "#/utils/routerPaths";
import useModalControl from "#/app/modalControl.state";

export default function ChatInfo() {
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
    <div className="w-full bg-white flex p-4">
      <Image
        src={"/images/chat/ic-back.svg"}
        alt={"back"}
        width={24}
        height={24}
        className={"cursor-pointer"}
        onClick={handleClickBack}
      />

      <p className="text-center flex-1 text-gray9 text-[17px] font-bold">
        사람이름
      </p>

      <Image
        src={"/images/chat/ic-trash.svg"}
        alt={"trash"}
        width={24}
        height={24}
        className={"cursor-pointer"}
        onClick={handleClickTrash}
      />
    </div>
  );
}
