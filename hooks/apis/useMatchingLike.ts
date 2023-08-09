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
import { useGetFeed } from "#/hooks/apis/useGetFeed";
import useModalControl from "#/app/modalControl.state";
import { useMatchingSuccessInfo } from "#/app/match/matching.state";

//요청 타입
const UserLikeSchema = z.object({
  toMemberId: userSchema.id,
  like: matchingLikeSchema.like,
});

type UserLikeType = z.infer<typeof UserLikeSchema>;

//응답 타입
export const UserLikeResponseSchema = z.object({
  usedCount: z.number(),
  isMatched: z.boolean(),
  matchInfo: z
    .object({
      id: matchSchema.id,
      fromMember: fromToUserSchema,
      toMember: fromToUserSchema,
      matchTime: matchSchema.matchTime,
      isChecked: z.boolean(),
    })
    .nullish(),
  messageRoomId: ChatSchema.messageRoomId.nullish(),
});

export type UserLikeResponseType = z.infer<typeof UserLikeResponseSchema>;

const matchingLike = async (isUserLike: UserLikeType) => {
  const response = await apiClient.post("/match/like", isUserLike);

  return response.data;
  // return UserLikeResponseSchema.parse(response.data);
};

export const useMatchingLike = () => {
  const { updateIsMatchingSuccessModalOpen } = useModalControl(); //매칭 성사 모달

  const { updateMatchingSuccessInfo } = useMatchingSuccessInfo();

  return useMutation(matchingLike, {
    onSuccess(res) {
      if (res.code === 4201) {
        reset();

        return;
      }

      //매칭 됐을 때
      if (res.data.isMatched) {
        //매칭 완료 창 띄우기
        updateIsMatchingSuccessModalOpen(true);

        //대상자 정보 저장
        updateMatchingSuccessInfo(res.data);

        return;
      }
    },
  });
};

const reset = async () => {
  try {
    const response = await apiClient.get("/test/reset");
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
