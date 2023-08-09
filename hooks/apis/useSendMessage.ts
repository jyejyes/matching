import { apiClient } from "#/hooks/apiSetting";
import { z } from "zod";
import { ChatSchema, MessageSchema } from "#/types/schema/schema";
import {
  MessageRoomSchema,
  useGetMessageRoom,
} from "#/hooks/apis/useGetMessageRoom";
import { useMutation } from "@tanstack/react-query";

//요청
const SendMessageSchema = z.object({
  messageRoomId: ChatSchema.messageRoomId,
  content: MessageSchema.content,
});
type SendMessageType = z.infer<typeof SendMessageSchema>;

//응답
export const SendMessageResponseSchema = MessageRoomSchema;
type SendMessageResponseType = z.infer<typeof SendMessageResponseSchema>;

const sendMessage = async (sendingMessage: SendMessageType) => {
  const response = await apiClient.post(
    `/message/${sendingMessage.messageRoomId}`,
    sendingMessage
  );

  return response.data;
  // return SendMessageResponseSchema.parse(response.data);
};

export const useSendMessage = () => {
  return useMutation(
    (sendingMessage: SendMessageType) => sendMessage(sendingMessage),
    {
      onError: (error) => {
        console.log(error);
      },
    }
  );
  // return useMutation((sendingMessage: SendMessageType) =>
  //   sendMessage(sendingMessage)
  // );
};
