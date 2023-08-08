import { create } from "zustand";
import SessionStorage from "#/utils/SessionStorage";

export type UserInfoState = {
  position: "BACK_END" | "FRONT_END" | "PM_PO" | "DESIGNER" | "";
  skills: string[];
  imgUrl: string;
  intro: string;
  interest: string[];
};

export type UserInfoActions = {
  updatePosition: (newPosition: UserInfoState["position"]) => void;
  updateSkills: (newSkills: string) => void;
  updateImgUrl: (newImgUrl: string) => void;
  updateIntro: (newIntro: string) => void;
  updateInterest: (newInterest: string) => void;

  deleteSkill: (skillToDelete: string) => void;
  deleteInterest: (interestToDelete: string) => void;
};

type UserInfoStore = UserInfoState & UserInfoActions;

const useUserInfo = create<UserInfoStore>((set) => ({
  position: "",
  skills: [],
  imgUrl: "",
  intro: "",
  interest: [],
  updatePosition: (newPosition) => set({ position: newPosition }),
  updateSkills: (newSkills) =>
    set((state) => ({ skills: [...state.skills, newSkills] })),
  updateImgUrl: (newImgUrl) => set({ imgUrl: newImgUrl }),
  updateIntro: (newIntro) => set({ intro: newIntro }),
  updateInterest: (newInterest) =>
    set((state) => ({ interest: [...state.interest, newInterest] })),

  deleteSkill: (skillToDelete) =>
    set((state) => ({
      skills: state.skills.filter((skill) => skill !== skillToDelete),
    })),
  deleteInterest: (interestToDelete) =>
    set((state) => ({
      interest: state.interest.filter(
        (interest) => interest !== interestToDelete
      ),
    })),
}));

export default useUserInfo;
