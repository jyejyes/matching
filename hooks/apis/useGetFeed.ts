import { apiClient } from "#/hooks/apiSetting";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { matchSchema } from "#/types/schema/schema";
import { useFeedUser } from "#/app/match/matching.state";

export const MatchingCoworkerInfoSchema = z.object({
  registrationSource: matchSchema.registrationSource,
  id: matchSchema.id,
  imgUrl: matchSchema.imgUrl,
  interest: matchSchema.interest,
  intro: matchSchema.intro,
  position: matchSchema.position,
  skill: matchSchema.skill,
  userProviderId: matchSchema.userProviderId,
  username: matchSchema.username,
});

export type MatchingCoworkerInfo = z.infer<typeof MatchingCoworkerInfoSchema>;

const getFeed = async () => {
  const response = await apiClient.get(`/match/feed`);

  return MatchingCoworkerInfoSchema.parse(response.data.data);
};

export const useGetFeed = () => {
  const { updateUserInfo } = useFeedUser();

  const {
    isLoading,
    refetch,
    isError,
    data = {} as MatchingCoworkerInfo,
    isSuccess,
  } = useQuery(["matchingCoworker"], getFeed, {
    onSuccess: (data) => {
      updateUserInfo(data);
    },
  });

  return { isLoading, isError, data, isSuccess, refetch };
};
