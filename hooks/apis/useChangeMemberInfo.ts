import { apiClient } from "#/hooks/apiSetting";
import { userSchema } from "#/types/schema/schema";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";

export const MemberInfo = z.object({
  username: userSchema.username.optional(),
  intro: userSchema.intro.optional(),
  skill: userSchema.skill.optional(),
});

export type MemberInfo = z.infer<typeof MemberInfo>;

const patchMemberInfo = async (memberInfo: MemberInfo) => {
  const response = await apiClient.patch(`/member/info`, memberInfo);

  return response.data;
};

export const useChangeMemberInfo = () => {
  return useMutation(patchMemberInfo, {
    onSuccess: (res) => {
      if (res.code === 1103) {
        alert("회원정보가 변경되었습니다.");

        return;
      }
    },
  });
};
