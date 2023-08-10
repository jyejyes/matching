"use client";
import { Modal } from "#/ui/components/modal/Modal";
import useModalControl from "#/app/modalControl.state";
import { useRouter } from "next/navigation";
import routerPaths from "#/utils/routerPaths";
import { useDeleteMatch } from "#/hooks/apis/useDeleteMatch";

type Props = {
  chatId: number;
};
export const DeleteChattingRoomModal = ({ chatId }: Props) => {
  const { isDeleteChatModalOpen, updateIsDeleteChatModalOpen } =
    useModalControl();

  const { push } = useRouter();

  const { mutateAsync: deleteUser } = useDeleteMatch();

  const handleClickDelete = async () => {
    try {
      const res = await deleteUser(chatId);

      // 성공 코드
      if (res.code === 1202) {
        push(routerPaths.chat());

        return;
      }
    } catch (e) {
      console.log(e);
    }
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
