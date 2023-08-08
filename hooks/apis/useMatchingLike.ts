import { apiClient } from "#/hooks/apiSetting";
import {
  chatSchema,
  matchingLikeSchema,
  matchSchema,
  userSchema,
} from "#/types/schema/schema";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";

//요청 타입
const UserLikeSchema = z.object({
  toMemberId: userSchema.id,
  like: matchingLikeSchema.like,
});

type UserLikeType = z.infer<typeof UserLikeSchema>;

//응답 타입
const UserLikeResponseSchema = z.object({
  usedCount: z.number(),
  isMatched: z.boolean(),
  matchInfo: z
    .object({
      id: matchSchema.id,
      fromMember: z.object({
        id: userSchema.id,
        username: userSchema.username,
        position: userSchema.position,
        imgUrl: userSchema.imgUrl,
      }),
      toMember: z.object({
        id: userSchema.id,
        username: userSchema.username,
        position: userSchema.position,
        imgUrl: userSchema.imgUrl,
      }),
      matchTime: matchSchema.matchTime,
    })
    .nullish(),
  messageRoomId: chatSchema.messageRoomId.nullish(),
});

type UserLikeResponseType = z.infer<typeof UserLikeResponseSchema>;

const matchingLike = async (isUserLike: UserLikeType) => {
  const response = await apiClient.post("/match/like", isUserLike);

  return response.data;
  // return UserLikeResponseSchema.parse(response.data);
};

export const useMatchingLike = () => {
  return useMutation(matchingLike, {
    onSuccess(res) {
      console.log(res);
      if (res.code === 4201) {
        reset();
      }
    },
  });
};

const reset = async () => {
  try {
    const response = await apiClient.post("/test/reset");
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
