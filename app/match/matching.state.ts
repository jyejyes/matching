import { create } from "zustand";
import { MatchingCoworkerInfo } from "#/hooks/apis/useGetFeed";
import { UserLikeResponseSchema } from "#/hooks/apis/useMatchingLike";
import { z } from "zod";
import { MatchingSuccessInfoSchema } from "#/types/schema/schema";

//현재 화면에 표시되는 매칭 대상자 정보 저장
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

//오늘의 매칭 대상자 전체 저장
type TodayMatchingUsersType = {
  todayMatchingUsers: MatchingCoworkerInfo[];
  updateTodayMatchingUsers: (
    newTodayMatchingUsers: MatchingCoworkerInfo[]
  ) => void;
  deleteTodayMatchingUsers: (userIdToDelete: number) => void;
};
export const useTodayMatchingUsers = create<TodayMatchingUsersType>((set) => ({
  todayMatchingUsers: [],
  updateTodayMatchingUsers: (newTodayMatchingUsers) =>
    set({ todayMatchingUsers: newTodayMatchingUsers }),
  deleteTodayMatchingUsers: (userIdToDelete) => {
    set((state) => ({
      todayMatchingUsers: state.todayMatchingUsers.filter(
        (user) => user.id !== userIdToDelete
      ),
    }));
  },
}));

//매칭 성공 대상자 정보 타입
type MatchingSuccessInfoType = z.infer<typeof MatchingSuccessInfoSchema>;

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

//현재 유저의 선택 정보 저장
type UserChoiceInfoType = {
  userChoice: "like" | "unlike" | "none";
  updateUserChoice: (newUserChoice: "like" | "unlike" | "none") => void;
};

export const useUserChoiceInfo = create<UserChoiceInfoType>((set) => ({
  userChoice: "none",
  updateUserChoice: (newUserChoice: "like" | "unlike" | "none") =>
    set({ userChoice: newUserChoice }),
}));
