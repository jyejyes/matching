"use client";

import { SelectedTitle } from "#/app/signup/_components/SelectedTitle";
import Image from "next/image";
import routerPaths from "#/utils/routerPaths";
import { useRouter } from "next/navigation";
import { POSITIONS } from "#/constant/signup.constant";
import { SelectedButton } from "#/ui/components/SelectedButton";
import { DefaultButton } from "#/ui/components/DefaultButton";
import useUserInfo, { UserInfoState } from "#/app/signup/store/useUserInfo";
import { apiClient } from "#/hooks/apiSetting";
import SessionStorage from "#/utils/SessionStorage";
import { LoginReqType, useLogin } from "#/hooks/apis/useLogin";

export default function Page() {
  const { push } = useRouter();

  const userInfo = JSON.parse(
    SessionStorage.getItem("user") ?? "{}"
  ) as LoginReqType["user"];

  const { id: userProviderId, name: username } = JSON.parse(
    SessionStorage.getItem("user") ?? "{}"
  );

  const {
    position,
    skills: skill,
    imgUrl,
    intro,
    interest: userSelectedInterest,
    updateInterest,
    deleteInterest,
  } = useUserInfo();

  //로그인 hook
  const { mutateAsync: serviceLogin, isSuccess } = useLogin();

  const handleClickBackButton = () => {
    push(routerPaths.selectedProfile());
  };

  const handleClickNextButton = async () => {
    //api 호출
    await postSignup();
  };

  const handleClickInterest = (interest: UserInfoState["position"]) => {
    if (userSelectedInterest.includes(interest)) {
      deleteInterest(interest);
      return;
    }

    updateInterest(interest);
  };

  //TODO: rq로 바꿔야함
  const postSignup = async () => {
    try {
      const { data } = await apiClient.post("/member/sign-up", {
        userProviderId,
        username,
        position,
        registrationSource: "KAKAO",
        intro,
        imgUrl,
        interest: userSelectedInterest,
        skill,
      });

      if (data.code === 1102) {
        const user = userInfo;
        //로그인 호출하고
        const res = await serviceLogin({
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
          },
        });

        if (res.code === 1101) {
          push(routerPaths.matchLoading());
        }

        return;
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="relative h-full">
      <Image
        src={"/images/signup/ic-backward.svg"}
        alt={"뒤로가기"}
        width={24}
        height={24}
        className="mb-[30px] cursor-pointer"
        onClick={handleClickBackButton}
      />

      <SelectedTitle
        currentStep={5}
        totalSteps={5}
        title={["다 왔어요!", "이제 원하는 매칭 직군을 선택해주세요"]}
        className="mb-5"
      />

      <div className="flex flex-col gap-3 mb-[30px]">
        {POSITIONS.map((position, i) => (
          <SelectedButton
            key={i}
            size={"lg"}
            selected={userSelectedInterest.includes(position.dev)}
            disabled={false}
            onClick={() => handleClickInterest(position.dev)}
          >
            {position.user}
          </SelectedButton>
        ))}
      </div>

      <div className="w-full">
        <p className="text-gray6 text-center text-[14px]">
          중복 선택이 가능해요.
        </p>
      </div>

      <div className="absolute bottom-0 w-full">
        <DefaultButton disabled={false} onClick={handleClickNextButton}>
          다음
        </DefaultButton>
      </div>
    </div>
  );
}
