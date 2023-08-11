"use client";
import { Modal } from "#/ui/components/modal/Modal";
import useModalControl from "#/app/modalControl.state";
import { useRouter } from "next/navigation";
import routerPaths from "#/utils/routerPaths";
import { signOut } from "next-auth/react";

export const LogoutModal = () => {
  const { isLogoutModalOpen, updateIsLogoutModalOpen } = useModalControl();

  const { push } = useRouter();
  const handleClickLogout = () => {
    // 로그아웃 로직
    signOut({ callbackUrl: routerPaths.signup() });

    push(routerPaths.signup());
  };

  const handleClickCancel = () => {
    updateIsLogoutModalOpen(!isLogoutModalOpen);
  };

  return (
    <Modal
      onConfirm={handleClickLogout}
      confirmText="로그아웃"
      onCancel={handleClickCancel}
      cancelText="취소"
    >
      <p className="text-[18px] font-bold mb-2">로그아웃</p>

      <p className="text-[14px]">정말 로그아웃 하시겠습니까?</p>
    </Modal>
  );
};
