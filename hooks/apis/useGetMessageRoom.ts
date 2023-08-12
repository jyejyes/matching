import { apiClient } from "#/hooks/apiSetting";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { matchSchema, MessageSchema, userSchema } from "#/types/schema/schema";

export const MsgSchema = z.object({
  id: MessageSchema.messageId,
  content: MessageSchema.content,
  messageWriter: z.object({
    id: MessageSchema.messageWriterId,
    username: userSchema.username,
    imgUrl: userSchema.imgUrl,
  }),
  isRead: MessageSchema.isRead,
  messageCreatedTime: MessageSchema.messageCreatedTime,
});

export const MessageRoomSchema = z.object({
  loginMemberId: userSchema.id,
  matchId: matchSchema.id,
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
