"use client";
import { Modal } from "#/ui/components/modal/Modal";
import useModalControl from "#/app/modalControl.state";
import { useRouter } from "next/navigation";
import routerPaths from "#/utils/routerPaths";
import { useDeleteUser } from "#/hooks/apis/useDeleteUser";
import SessionStorage from "#/utils/SessionStorage";
import { removeCookie } from "#/utils/Cookie/Cookie";

export const DeleteModal = () => {
  const { isDeleteModalOpen, updateIsDeleteModalOpen } = useModalControl();

  const { push } = useRouter();

  const { mutate: deleteUser } = useDeleteUser();
  const handleClickDelete = () => {
    // 탈퇴 로직
    deleteUser();

    SessionStorage.clear();
    removeCookie("next-auth.session-token");
    removeCookie("next-auth.csrf-token");
    removeCookie("token");
    removeCookie("next-auth.callback-url");

    push(routerPaths.signup());
  };

  const handleClickCancel = () => {
    updateIsDeleteModalOpen(!isDeleteModalOpen);
  };

  return (
    <Modal
      onConfirm={handleClickDelete}
      confirmText="회원 탈퇴"
      onCancel={handleClickCancel}
      cancelText="취소"
    >
      <p className="text-[18px] font-bold mb-2">회원탈퇴</p>

      <p className="text-[14px]">
        정말 회원탈퇴하시겠어요?
        <br />
        모든 데이터가 사라지며, 다시 복구할 수 없습니다.
      </p>
    </Modal>
  );
};
