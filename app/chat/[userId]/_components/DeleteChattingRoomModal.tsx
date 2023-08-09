"use client";
import { Modal } from "#/ui/components/modal/Modal";
import useModalControl from "#/app/modalControl.state";
import { useRouter } from "next/navigation";
import routerPaths from "#/utils/routerPaths";

export const DeleteChattingRoomModal = () => {
  const { isDeleteChatModalOpen, updateIsDeleteChatModalOpen } =
    useModalControl();

  const { push } = useRouter();

  const handleClickDelete = () => {
    // 삭제 로직 로직
    // mutate(2);
    //삭제 성공하면
    push(routerPaths.chat());
  };

  const handleClickCancel = () => {
    updateIsDeleteChatModalOpen(!isDeleteChatModalOpen);
  };

  return (
    <Modal
      onConfirm={handleClickDelete}
      confirmText="삭제"
      onCancel={handleClickCancel}
      cancelText="취소"
    >
      <p className="text-[18px] font-bold mb-2">대화 삭제</p>

      <p className="text-[14px]">
        이 대화를 정말 삭제할까요?
        <br />
        대화를 삭제하면 다시 연락하실 수 없습니다.
      </p>
    </Modal>
  );
};
