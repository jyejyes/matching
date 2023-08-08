"use client";

import { BottomNavigator } from "#/app/_components/BottomNavigator";
import UserSettingInfo from "#/app/setting/_components/UserSettingInfo";
import React from "react";
import Terms from "#/app/setting/_components/Terms";
import UserQuit from "#/app/setting/_components/UserQuit";
import useModalControl from "#/app/modalControl.state";
import { LogoutModal } from "#/app/setting/_components/LogoutModal";
import { DeleteModal } from "#/app/setting/_components/DeleteModal";

export default function Page() {
  const { isLogoutModalOpen, isDeleteModalOpen } = useModalControl();

  return (
    <div className="w-full h-full p-4 relative">
      {isLogoutModalOpen && <LogoutModal />}
      {isDeleteModalOpen && <DeleteModal />}

      <h1 className="text-[24px] font-bold mt-[10px] mb-[14px]">설정</h1>

      <div className="py-[10px] mb-6">
        <UserSettingInfo />
      </div>

      <div>
        <Terms />
      </div>

      <div className="absolute bottom-20 left-0 w-full">
        <UserQuit />
      </div>

      <div className="absolute w-full bottom-0 left-0">
        <BottomNavigator />
      </div>
    </div>
  );
}
