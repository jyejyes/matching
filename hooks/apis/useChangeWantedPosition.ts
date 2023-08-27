import { apiClient } from "#/hooks/apiSetting";
import { userSchema } from "#/types/schema/schema";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";

export const MemberWanted = z.object({
  positions: userSchema.interest.optional(),
});

export type MemberWanted = z.infer<typeof MemberWanted>;

const patchMemberWanted = async (positions: MemberWanted) => {
  const response = await apiClient.patch(`/member/interest`, positions);

  return response.data;
};

export const useChangeMemberWanted = () => {
  return useMutation(patchMemberWanted, {
    onSuccess: (res) => {
      console.log(res);
      // if (res.code === 1103) {
      //   alert("회원정보가 변경되었습니다.");
      //
      //   return;
      // }
    },
  });
};
