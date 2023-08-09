import { create } from "zustand";

type ModalControlState = {
  isLogoutModalOpen: boolean;
  isDeleteModalOpen: boolean;
  isDeleteChatModalOpen: boolean;
  isMatchingSuccessModalOpen: boolean;

  updateIsLogoutModalOpen: (newIsLogoutModalOpen: boolean) => void;
  updateIsDeleteModalOpen: (newIsDeleteModalOpen: boolean) => void;
  updateIsDeleteChatModalOpen: (newIsDeleteChatModalOpen: boolean) => void;
  updateIsMatchingSuccessModalOpen: (
    newIsMatchingSuccessModalOpen: boolean
  ) => void;
};
const useModalControl = create<ModalControlState>((set) => ({
  isLogoutModalOpen: false,
  isDeleteModalOpen: false,
  isDeleteChatModalOpen: false,
  isMatchingSuccessModalOpen: false,

  updateIsLogoutModalOpen: (newIsLogoutModalOpen: boolean) =>
    set({ isLogoutModalOpen: newIsLogoutModalOpen }),
  updateIsDeleteModalOpen: (newIsDeleteModalOpen: boolean) =>
    set({ isDeleteModalOpen: newIsDeleteModalOpen }),
  updateIsDeleteChatModalOpen: (newIsDeleteChatModalOpen: boolean) =>
    set({ isDeleteChatModalOpen: newIsDeleteChatModalOpen }),
  updateIsMatchingSuccessModalOpen: (newIsMatchingSuccessModalOpen: boolean) =>
    set({ isMatchingSuccessModalOpen: newIsMatchingSuccessModalOpen }),
}));

export default useModalControl;
