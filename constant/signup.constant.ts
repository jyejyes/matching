import { UserInfoState } from "#/app/signup/store/useUserInfo";

export const POSITIONS: {
  user: string;
  dev: UserInfoState["position"];
}[] = [
  {
    user: "기획(PM/PO)",
    dev: "PM_PO",
  },
  {
    user: "디자인",
    dev: "DESIGNER",
  },
  {
    user: "프론트엔드 개발",
    dev: "FRONT_END",
  },
  {
    user: "백엔드 개발",
    dev: "BACK_END",
  },
];
