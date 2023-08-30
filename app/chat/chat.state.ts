import { create } from "zustand";
import { z } from "zod";

const ChatControlState = z.object({
  isNewChat: z.boolean(),
  messageRoomId: z.number().optional(),
});

export type ChatControlStateType = z.infer<typeof ChatControlState>;

type ChatControlState = {
  newChatInfo: ChatControlStateType;
  updateNewChatInfo: (newIsNew: ChatControlStateType) => void;
};

const useChatControl = create<ChatControlState>((set) => ({
  newChatInfo: {
    isNewChat: false,
    messageRoomId: 0,
  },

  updateNewChatInfo: (newIsNew) => {
    set((state) => ({
      ...state,
      newChatInfo: newIsNew,
    }));
  },
}));

export default useChatControl;
