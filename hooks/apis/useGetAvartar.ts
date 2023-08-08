import { useQuery } from "@tanstack/react-query";
import { apiClient } from "#/hooks/apiSetting";

type AvatarUrl = {
  imgName: string;
  imgUrl: string;
};
const getAvatarUrl = async () => {
  return await apiClient
    .get(`/member/default-img`)
    .then((res) => res.data.data);
};

export const useGetAvatarUrl = () => {
  const { isLoading, isError, data, isSuccess } = useQuery<AvatarUrl[]>(
    ["avatar"],
    getAvatarUrl
  );

  return { isLoading, isError, data, isSuccess };
};

//
// import { UserInfoState } from "#/app/signup/store/useUserInfo";
// import { useQuery } from "@tanstack/react-query";
// import { apiClient } from "#/hooks/apiSetting";
// import { signupSchema } from "#/types/schema/schema";
// import { z } from "zod";
//
// type AvatarUrl = {
//   imgName: string;
//   imgUrl: string;
// };
//
// const avatarSchema = z.array(
//     z.object({
//       imgName: signupSchema.avatarImgName,
//       imgUrl: signupSchema.avatarImgUrl,
//     })
// );
//
// const getAvatarUrl = async () => {
//   const response = await apiClient.get(`/member/default-img`);
//
//   return avatarSchema.parse(response.data.data);
// };
//
// export const useGetAvatarUrl = () => {
//   const { isLoading, isError, data, isSuccess } = useQuery(
//       ["avatar"],
//       getAvatarUrl
//   );
//
//   return { isLoading, isError, data, isSuccess };
// };
