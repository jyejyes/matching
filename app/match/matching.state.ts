import { create } from "zustand";
import { MatchingCoworkerInfo } from "#/hooks/apis/useGetFeed";
import { UserLikeResponseSchema } from "#/hooks/apis/useMatchingLike";
import { z } from "zod";

type UserInfoState = {
  userInfo: MatchingCoworkerInfo;
  updateUserInfo: (newUserInfo: MatchingCoworkerInfo) => void;
};
type MatchingState = UserInfoState;

export const useFeedUser = create<MatchingState>((set) => ({
  userInfo: {} as MatchingCoworkerInfo,
  updateUserInfo: (newUserInfo: MatchingCoworkerInfo) =>
    set({ userInfo: newUserInfo }),
}));

//

type MatchingSuccessInfoType = z.infer<typeof UserLikeResponseSchema>;

type MatchingSuccessInfo = {
  matchingSuccessInfo: MatchingSuccessInfoType;
  updateMatchingSuccessInfo: (
    newMatchingSuccessInfo: MatchingSuccessInfoType
  ) => void;
};

export const useMatchingSuccessInfo = create<MatchingSuccessInfo>((set) => ({
  matchingSuccessInfo: {} as MatchingSuccessInfoType,
  updateMatchingSuccessInfo: (newInfo: MatchingSuccessInfoType) =>
    set({ matchingSuccessInfo: newInfo }),
}));
