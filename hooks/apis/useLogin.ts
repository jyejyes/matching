import { apiClient } from "#/hooks/apiSetting";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { tokenSchema, userSchema } from "#/types/schema/schema";

import SessionStorage from "#/utils/SessionStorage";
import { setCookie } from "#/utils/Cookie/Cookie";
import routerPaths from "#/utils/routerPaths";
import { useRouter } from "next/navigation";

// TODO: success util하나 만들어서 감싸서 나중에 사용할것
const LoginResponseSchema = z.object({
  code: z.number(),
  data: z
    .object({
      token: tokenSchema.jwtToken,
    })
    .nullish(),
});

//요청
const reqSchema = z.object({
  user: z.object({
    id: z.string(),
    name: z.string(),
    email: z.string(),
    image: z.string(),
  }),
  expires: z.string().optional(),
  accessToken: z.string().optional(),
});

export type LoginReqType = z.infer<typeof reqSchema>;

const login = async (session: LoginReqType) => {
  const response = await apiClient.post("/login-jwt", session);

  return LoginResponseSchema.parse(response.data);
};
export const useLogin = () => {
  const { push } = useRouter();

  return useMutation(login, {
    onSuccess(res) {
      //가입 정보가 있는 경우(회원인 경우)
      if (res.code === 1101 && res.data) {
        SessionStorage.setItem("token", res.data.token);

        setCookie("token", res.data.token);

        push(routerPaths.match());

        return;
      }

      // 기존 가입 정보가 없는 경우
      if (res.code === 4102) {
        push(routerPaths.selectedPosition());

        return;
      }
    },
    onError(err) {
      console.log(err);
    },
  });
};
