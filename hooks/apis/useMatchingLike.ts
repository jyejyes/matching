import { apiClient } from "#/hooks/apiSetting";
import {
  ChatSchema,
  fromToUserSchema,
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
export const UserLikeResponseSchema = z.object({
  usedCount: z.number(),
});

export type UserLikeResponseType = z.infer<typeof UserLikeResponseSchema>;

const matchingLike = async (isUserLike: UserLikeType) => {
  const response = await apiClient.post("/match/like", isUserLike);

  return UserLikeResponseSchema.parse(response.data.data);
};

export const useMatchingLike = () => {
  return useMutation(matchingLike, {});
};
