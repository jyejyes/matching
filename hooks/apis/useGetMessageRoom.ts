import { apiClient } from "#/hooks/apiSetting";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { MessageSchema, userSchema } from "#/types/schema/schema";

export const MsgSchema = z.object({
  id: MessageSchema.messageId,
  content: MessageSchema.content,
  messageWriterId: MessageSchema.messageWriterId,
  isRead: MessageSchema.isRead,
  messageCreatedTime: MessageSchema.messageCreatedTime,
});

export const MessageRoomSchema = z.object({
  loginMemberId: userSchema.id,
  messages: z.array(MsgSchema),
});

type MessageRoomType = z.infer<typeof MessageRoomSchema>;

const getMessageRoom = async (messageRoomId: number) => {
  const response = await apiClient.get(`/message/${messageRoomId}`);

  return MessageRoomSchema.parse(response.data.data);
};

export const useGetMessageRoom = (messageRoomId: number) => {
  const {
    refetch,
    isLoading,
    isSuccess,
    isError,
    data = {} as MessageRoomType,
  } = useQuery(["messageRoom", messageRoomId], () =>
    getMessageRoom(messageRoomId)
  );

  return { refetch, isLoading, isSuccess, isError, data };
};