import { create } from "zustand";

type ModalControlState = {
  isLogoutModalOpen: boolean;
  isDeleteModalOpen: boolean;
  isDeleteChatModalOpen: boolean;
  isMatchingSuccessModalOpen: boolean; //매칭 성공 모달
  isMatchingModalOpen: boolean; //매칭 선택 모달

  updateIsLogoutModalOpen: (newIsLogoutModalOpen: boolean) => void;
  updateIsDeleteModalOpen: (newIsDeleteModalOpen: boolean) => void;
  updateIsDeleteChatModalOpen: (newIsDeleteChatModalOpen: boolean) => void;
  updateIsMatchingSuccessModalOpen: (
    newIsMatchingSuccessModalOpen: boolean
  ) => void;
  updateIsMatchingModalOpen: (newIsMatchingModalOpen: boolean) => void;
};
const useModalControl = create<ModalControlState>((set) => ({
  isLogoutModalOpen: false,
  isDeleteModalOpen: false,
  isDeleteChatModalOpen: false,
  isMatchingSuccessModalOpen: false,
  isMatchingModalOpen: false,

  updateIsLogoutModalOpen: (newIsLogoutModalOpen: boolean) =>
    set({ isLogoutModalOpen: newIsLogoutModalOpen }),
  updateIsDeleteModalOpen: (newIsDeleteModalOpen: boolean) =>
    set({ isDeleteModalOpen: newIsDeleteModalOpen }),
  updateIsDeleteChatModalOpen: (newIsDeleteChatModalOpen: boolean) =>
    set({ isDeleteChatModalOpen: newIsDeleteChatModalOpen }),
  updateIsMatchingSuccessModalOpen: (newIsMatchingSuccessModalOpen: boolean) =>
    set({ isMatchingSuccessModalOpen: newIsMatchingSuccessModalOpen }),
  updateIsMatchingModalOpen: (newIsMatchingModalOpen: boolean) =>
    set({ isMatchingModalOpen: newIsMatchingModalOpen }),
}));

export default useModalControl;
