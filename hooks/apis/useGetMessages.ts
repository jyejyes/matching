import { apiClient } from "#/hooks/apiSetting";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import {
  ChatSchema,
  fromToUserSchema,
  MessageSchema,
  userSchema,
} from "#/types/schema/schema";

export const GetMessageSchema = z.object({
  id: ChatSchema.messageRoomId,
  fromMember: fromToUserSchema,
  toMember: fromToUserSchema,
  createdTime: ChatSchema.createdTime,
  lastMessage: z.object({
    id: MessageSchema.messageId.nullish(),
    content: MessageSchema.content,
    messageWriterId: MessageSchema.messageWriterId,
    isRead: MessageSchema.isRead,
    messageCreatedTime: MessageSchema.messageCreatedTime,
  }),
  isNewMessageInRoom: MessageSchema.isNewMessageInRoom,
});

export type GetMessageResponseType = z.infer<typeof GetMessageSchema>;

export const GetMessagesSchema = z.object({
  loginMemberId: userSchema.id,
  messageRooms: z.array(GetMessageSchema),
});

type GetMessagesResponseType = z.infer<typeof GetMessagesSchema>;
const getMessage = async () => {
  const response = await apiClient.get("/message");

  return GetMessagesSchema.parse(response.data.data);
};

export const useGetMessages = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    data = {} as GetMessagesResponseType,
  } = useQuery(["message"], getMessage);

  return { isLoading, isError, isSuccess, data };
};
