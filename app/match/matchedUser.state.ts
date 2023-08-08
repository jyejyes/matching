import { create } from "zustand";
import { MatchingCoworkerInfo } from "#/hooks/apis/useGetFeed";

type userInfoState = {
  userInfo: MatchingCoworkerInfo;
  updateUserInfo: (newUserInfo: MatchingCoworkerInfo) => void;
};
type MatchedUserState = userInfoState;

const useMatchedUser = create<MatchedUserState>((set) => ({
  userInfo: {} as MatchingCoworkerInfo,
  updateUserInfo: (newUserInfo: MatchingCoworkerInfo) =>
    set({ userInfo: newUserInfo }),
}));

export default useMatchedUser;
