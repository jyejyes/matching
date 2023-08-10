import { apiClient } from "#/hooks/apiSetting";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { matchSchema } from "#/types/schema/schema";
import { useFeedUser, useTodayMatchingUsers } from "#/app/match/matching.state";

export const MatchingCoworkersInfoSchema = z.array(
  z.object({
    registrationSource: matchSchema.registrationSource,
    id: matchSchema.id,
    imgUrl: matchSchema.imgUrl,
    interest: matchSchema.interest,
    intro: matchSchema.intro,
    position: matchSchema.position,
    skill: matchSchema.skill,
    userProviderId: matchSchema.userProviderId,
    username: matchSchema.username,
  })
);

export type MatchingCoworkersInfo = z.infer<typeof MatchingCoworkersInfoSchema>;

const getAllFeed = async () => {
  const response = await apiClient.get(`/match/today-list`);

  return MatchingCoworkersInfoSchema.parse(response.data.data);
};

export const useGetAllFeed = () => {
  const { updateUserInfo } = useFeedUser();

  const { updateTodayMatchingUsers } = useTodayMatchingUsers();

  const {
    isLoading,
    isError,
    data = [] as MatchingCoworkersInfo,
    isSuccess,
  } = useQuery(["matchingAllCoworker"], getAllFeed, {
    onSuccess: (data) => {
      updateTodayMatchingUsers(data);
    },
  });

  return { isLoading, isError, data, isSuccess };
};
