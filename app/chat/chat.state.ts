import { create } from "zustand";

type ChatControlState = {
  isNewChat: boolean;
  updateIsNewChat: (newIsNewChat: boolean) => void;
};

const useChatControl = create<ChatControlState>((set) => ({
  isNewChat: false,
  updateIsNewChat: (newIsNewChat: boolean) => set({ isNewChat: newIsNewChat }),
}));

export default useChatControl;
