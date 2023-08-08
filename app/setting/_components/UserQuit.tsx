"use client";

import useModalControl from "#/app/modalControl.state";

export default function UserQuit() {
  const {
    isLogoutModalOpen,
    updateIsLogoutModalOpen,
    isDeleteModalOpen,
    updateIsDeleteModalOpen,
  } = useModalControl();

  const handleClickLogout = () => {
    updateIsLogoutModalOpen(!isLogoutModalOpen);
  };

  const handleClickDelete = () => {
    updateIsDeleteModalOpen(!isDeleteModalOpen);
  };

  return (
    <div className="w-full flex justify-center gap-10">
      <button
        className="underline text-[13px] text-gray5"
        onClick={handleClickLogout}
      >
        로그아웃
      </button>
      <button
        className="underline text-[13px] text-gray5"
        onClick={handleClickDelete}
      >
        회원탈퇴
      </button>
    </div>
  );
}
