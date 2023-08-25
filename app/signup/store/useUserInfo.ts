import { create } from "zustand";

export type UserInfoState = {
  username: string;
  position: "BACK_END" | "FRONT_END" | "PM_PO" | "DESIGNER" | "";
  skills: string[];
  imgUrl: string;
  intro: string;
  interest: string[];
};

export type UserInfoActions = {
  updateUsername: (newUsername: string) => void;
  updatePosition: (newPosition: UserInfoState["position"]) => void;
  updateSkills: (newSkills: string) => void;
  updateImgUrl: (newImgUrl: string) => void;
  updateIntro: (newIntro: string) => void;
  updateInterest: (newInterest: string) => void;

  deleteSkill: (skillToDelete: string) => void;
  deleteInterest: (interestToDelete: string) => void;

  deleteAll: () => void;
};

type UserInfoStore = UserInfoState & UserInfoActions;

const useUserInfo = create<UserInfoStore>((set) => ({
  username: "",
  position: "",
  skills: [],
  imgUrl: "",
  intro: "",
  interest: [],
  updateUsername: (newUsername) => set({ username: newUsername }),
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
  deleteAll: () =>
    set((state) => ({
      position: "",
      skills: [],
      imgUrl: "",
      intro: "",
      interest: [],
    })),
}));

export default useUserInfo;
