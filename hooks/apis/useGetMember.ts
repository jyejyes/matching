import { apiClient } from "#/hooks/apiSetting";
import { matchSchema, userSchema } from "#/types/schema/schema";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";

const MemberSchema = z.object({
  id: userSchema.id,
  userProviderId: matchSchema.userProviderId,
  username: userSchema.username,
  position: userSchema.position,
  RegistrationSource: matchSchema.registrationSource,
  intro: userSchema.intro,
  imgUrl: userSchema.imgUrl,
  interest: userSchema.interest,
  skill: userSchema.skill,
});

export type MemberType = z.infer<typeof MemberSchema>;
const member = async () => {
  const response = await apiClient.get("/member");

  return MemberSchema.parse(response.data.data);
};

export const useGetMember = () => {
  const {
    isLoading,
    isSuccess,
    isError,
    data = {} as MemberType,
  } = useQuery(["member"], member);

  return { isLoading, isSuccess, isError, data };
};
