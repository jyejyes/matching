"use client";

import Image from "next/image";
import clsx from "clsx";
import SelectedImage from "#/ui/components/SelectedImage";
import useUserInfo from "#/app/signup/store/useUserInfo";
import LocalStorage from "#/utils/LocalStorage";

export default function KakaoProfile() {
  // TODO: 타입 지정하기
  // 유틸함수 만들기 : type 지정하는거- 자동으로 스토리지 저장되게

  const userKaKaoImageUrl = JSON.parse(LocalStorage.getItem("user") ?? "{}");

  const { imgUrl, updateImgUrl } = useUserInfo();

  const handleClickImage = (url: string) => {
    updateImgUrl(url);
  };

  return (
    <div className="flex flex-col gap-[18px]">
      <p className="text-pointBlue2 font-bold">카카오톡 프로필</p>

      {/*  TODO: default Select 설정하기 : 카카오에 */}
      <SelectedImage
        imgUrl={userKaKaoImageUrl.image}
        selected={imgUrl === userKaKaoImageUrl.image}
        onClick={() => handleClickImage(userKaKaoImageUrl.image)}
      />
    </div>
  );
}
