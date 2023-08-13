import { z } from "zod";
import { matchSchema, userSchema } from "#/types/schema/schema";
import { apiClient } from "#/hooks/apiSetting";
import { useQuery } from "@tanstack/react-query";
import { useFeedUser } from "#/app/match/matching.state";
import { MatchingCoworkerInfoSchema } from "#/hooks/apis/useGetFeed";

export const GetUserInfo = z.object({
  matchId: matchSchema.id,
  loginMemberId: userSchema.id,
  matchedMember: MatchingCoworkerInfoSchema,
});

type UserInfoType = z.infer<typeof GetUserInfo>;

const getUserInfo = async (matchId: number, matchedMemberId: number) => {
  const response = await apiClient.get(
    `/match/${matchId}/member/${matchedMemberId}`
  );

  return GetUserInfo.parse(response.data.data);
};

export const useGetUserInfo = (matchId: number, matchedMemberId: number) => {
  const { updateUserInfo } = useFeedUser();

  const {
    isLoading,
    isSuccess,
    isError,
    data = {} as UserInfoType,
  } = useQuery(
    ["userInfo", matchId, matchedMemberId],
    () => getUserInfo(matchId, matchedMemberId),
    {
      enabled: !!matchId && !!matchedMemberId,
      onSuccess: (data) => {
        updateUserInfo(data.matchedMember);
      },
    }
  );

  return { isLoading, isSuccess, isError, data };
};
