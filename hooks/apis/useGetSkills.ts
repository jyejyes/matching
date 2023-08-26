import { UserInfoState } from "#/app/signup/store/useUserInfo";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "#/hooks/apiSetting";
import { z } from "zod";
import { signupSchema } from "#/types/schema/schema";

type SkillType = z.infer<typeof signupSchema.skill>;
const getSkills = async (query: UserInfoState["position"]) => {
  return await apiClient
    .get(`/member/skill?position=${query}`)
    .then((res) => res.data.data);
};

export const useGetSkills = (query: UserInfoState["position"]) => {
  const { isLoading, isError, data, isSuccess } = useQuery<SkillType[]>(
    ["skills", query],
    () => getSkills(query),
    {
      enabled: !!query,
    }
  );

  return { isLoading, isError, data, isSuccess };
};
