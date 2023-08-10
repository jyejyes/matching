"use client";
import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useLogin } from "#/hooks/apis/useLogin";
import LocalStorage from "#/utils/LocalStorage";

export const SocialLogin = () => {
  const { data: session, status } = useSession();

  const { mutate: serviceLogin, isSuccess } = useLogin();

  useEffect(() => {
    if (session) {
      //로컬 스토리지에 저장
      LocalStorage.setItem("user", JSON.stringify(session.user));

      //요청 보내기 (expires가 남은 경우 안하고 싶은데)
      serviceLogin({
        user: {
          id: session.user.id,
          name: session.user.name as string,
          email: session.user.email as string,
          image: session.user.image as string,
        },
      });
    }
  }, [session]);

  return (
    <>
      <p className="text-gray6 mb-[15px]">카카오로 3초만에 시작하기</p>

      <button
        onClick={() => signIn()}
        className="py-[14px] px-[18px] text-gray9 font-bold bg-kakaoYellow rounded-[80px]"
      >
        카카오로 시작
      </button>
    </>
  );
};
